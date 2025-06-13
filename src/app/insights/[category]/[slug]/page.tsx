import { getPostBySlug, getAllPosts } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Image from 'next/image'
import type { Metadata } from 'next'

export const revalidate = 60 // Revalidate every minute

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug, resolvedParams.category)

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Your Name'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

type Props = {
  params: Promise<{ category: string; slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ArticlePage({ params, searchParams }: Props) {
  const [resolvedParams] = await Promise.all([params, searchParams])
  const post = await getPostBySlug(resolvedParams.slug, resolvedParams.category)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/insights">Insights</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/insights/${resolvedParams.category}`}>
              {resolvedParams.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-xl text-muted-foreground">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{resolvedParams.category}</Badge>
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {post.coverImage && (
        <div className="my-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={630}
            className="rounded-lg"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert mt-8">
        {post.content}
      </div>
    </article>
  )
} 
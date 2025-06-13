import { getAllPosts } from '@/lib/content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export const revalidate = 60 // Revalidate every minute

export default async function Home() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 3) // Get the 3 most recent posts

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to My Insight Hub</h1>
        <p className="text-xl text-muted-foreground">
          A collection of personal insights, thoughts, and experiences on various topics.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Insights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.category}/${post.slug}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {['Stock Insights', 'AI Trends', 'Tech Notes', 'Productivity', 'Life Observations'].map(
            (category) => (
              <Link
                key={category}
                href={`/insights/${category.toLowerCase().replace(' ', '-')}`}
              >
                <Card className="transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  )
}

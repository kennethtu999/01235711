import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { ReactNode } from 'react'

const contentDirectory = path.join(process.cwd(), 'content')

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  category: string
  tags: string[]
  coverImage: string
  content: ReactNode
}

export async function getPostBySlug(slug: string, category: string): Promise<Post | null> {
  const fullPath = path.join(contentDirectory, category, `${slug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            [rehypePrismPlus, { ignoreMissing: true }]
          ]
        }
      }
    })

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      category: data.category,
      tags: data.tags,
      coverImage: data.coverImage,
      content: compiledContent
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(category?: string): Promise<Post[]> {
  const categories = category 
    ? [category]
    : fs.readdirSync(contentDirectory).filter(dir => 
        fs.statSync(path.join(contentDirectory, dir)).isDirectory() && 
        dir !== 'pages'
      )

  const posts: Post[] = []

  for (const cat of categories) {
    const categoryPath = path.join(contentDirectory, cat)
    const files = fs.readdirSync(categoryPath)
    
    for (const file of files) {
      if (file.endsWith('.mdx')) {
        const slug = file.replace(/\.mdx$/, '')
        const post = await getPostBySlug(slug, cat)
        if (post) {
          posts.push(post)
        }
      }
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getCategories(): Promise<string[]> {
  return fs.readdirSync(contentDirectory)
    .filter(dir => 
      fs.statSync(path.join(contentDirectory, dir)).isDirectory() && 
      dir !== 'pages'
    )
}

export async function getTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags)
} 
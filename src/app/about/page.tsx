import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about My Insight Hub and our mission.',
  openGraph: {
    title: 'About',
    description: 'Learn more about My Insight Hub and our mission.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About',
    description: 'Learn more about My Insight Hub and our mission.',
  },
}

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-6 lg:py-10">
      <div className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">About My Insight Hub</h1>
          <p className="text-xl text-muted-foreground">
            A platform for sharing personal insights, thoughts, and experiences on various topics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg">
            My Insight Hub is dedicated to sharing valuable insights and experiences across different
            domains, from technology and AI to personal development and life observations. We believe
            in the power of knowledge sharing and continuous learning.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Categories</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Stock Insights',
                description: 'Analysis and thoughts on stock market trends and investments.',
              },
              {
                title: 'AI Trends',
                description: 'Latest developments and insights in artificial intelligence.',
              },
              {
                title: 'Tech Notes',
                description: 'Technical articles and tutorials on various technologies.',
              },
              {
                title: 'Productivity',
                description: 'Tips and strategies for improving personal and professional productivity.',
              },
              {
                title: 'Life Observations',
                description: 'Personal experiences and lessons learned from life.',
              },
            ].map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-lg">
            Have questions, suggestions, or want to collaborate? Feel free to reach out through our{' '}
            <a href="/contact" className="text-primary hover:underline">
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
} 
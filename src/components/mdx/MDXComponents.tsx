import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface MDXComponentsProps {
  className?: string
  [key: string]: any
}

const components = {
  h1: ({ className, ...props }: MDXComponentsProps) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: MDXComponentsProps) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: MDXComponentsProps) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: MDXComponentsProps) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: MDXComponentsProps) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: MDXComponentsProps) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: MDXComponentsProps) => (
    <Link
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: MDXComponentsProps) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: MDXComponentsProps) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: MDXComponentsProps) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: MDXComponentsProps) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: MDXComponentsProps) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic text-muted-foreground',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: MDXComponentsProps & { alt: string }) => (
    <Image
      className={cn('rounded-md object-cover', className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: MDXComponentsProps) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: MDXComponentsProps) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: MDXComponentsProps) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: MDXComponentsProps) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: MDXComponentsProps) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: MDXComponentsProps) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg bg-black p-4',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: MDXComponentsProps) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    />
  ),
  Card: ({ className, ...props }: MDXComponentsProps) => (
    <Card className={cn('mt-6', className)} {...props} />
  ),
  CardContent: ({ className, ...props }: MDXComponentsProps) => (
    <CardContent className={cn('p-6', className)} {...props} />
  ),
  Badge: ({ className, ...props }: MDXComponentsProps) => (
    <Badge className={cn('mt-2', className)} {...props} />
  ),
}

export default components 
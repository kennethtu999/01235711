import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface MDXComponentsProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

interface MDXLinkProps extends MDXComponentsProps {
  href: string;
}

interface MDXImageProps extends MDXComponentsProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const MDXComponents = {
  h1: ({ children, className }: MDXComponentsProps) => (
    <h1 className={`mt-8 mb-4 text-4xl font-bold ${className || ''}`}>{children}</h1>
  ),
  h2: ({ children, className }: MDXComponentsProps) => (
    <h2 className={`mt-8 mb-4 text-3xl font-semibold ${className || ''}`}>{children}</h2>
  ),
  h3: ({ children, className }: MDXComponentsProps) => (
    <h3 className={`mt-6 mb-4 text-2xl font-semibold ${className || ''}`}>{children}</h3>
  ),
  h4: ({ children, className }: MDXComponentsProps) => (
    <h4 className={`mt-6 mb-4 text-xl font-semibold ${className || ''}`}>{children}</h4>
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
  p: ({ children, className }: MDXComponentsProps) => (
    <p className={`mb-4 leading-7 ${className || ''}`}>{children}</p>
  ),
  a: ({ children, className, href }: MDXLinkProps) => (
    <a href={href} className={`text-primary underline underline-offset-4 ${className || ''}`}>
      {children}
    </a>
  ),
  ul: ({ children, className }: MDXComponentsProps) => (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className || ''}`}>{children}</ul>
  ),
  ol: ({ children, className }: MDXComponentsProps) => (
    <ol className={`my-6 ml-6 list-decimal [&>li]:mt-2 ${className || ''}`}>{children}</ol>
  ),
  li: ({ children, className }: MDXComponentsProps) => (
    <li className={className}>{children}</li>
  ),
  blockquote: ({ children, className }: MDXComponentsProps) => (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className || ''}`}>{children}</blockquote>
  ),
  img: ({ src, alt, className, width, height }: MDXImageProps) => (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 630}
      className={`rounded-md ${className || ''}`}
    />
  ),
  hr: () => <hr className="my-8" />,
  table: ({ children, className }: MDXComponentsProps) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={`w-full ${className || ''}`}>{children}</table>
    </div>
  ),
  tr: ({ children, className }: MDXComponentsProps) => (
    <tr className={`m-0 border-t p-0 even:bg-muted ${className || ''}`}>{children}</tr>
  ),
  th: ({ children, className }: MDXComponentsProps) => (
    <th className={`border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right ${className || ''}`}>
      {children}
    </th>
  ),
  td: ({ children, className }: MDXComponentsProps) => (
    <td className={`border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right ${className || ''}`}>
      {children}
    </td>
  ),
  pre: ({ children, className }: MDXComponentsProps) => (
    <pre className={`mt-6 mb-4 overflow-x-auto rounded-lg bg-black p-4 ${className || ''}`}>
      {children}
    </pre>
  ),
  code: ({ children, className }: MDXComponentsProps) => (
    <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm ${className || ''}`}>
      {children}
    </code>
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

export default MDXComponents 
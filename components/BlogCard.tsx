import Link from "next/link"

type BlogCardProps = {
  title: string
  excerpt: string
  slug: string
  date: string
}

export default function BlogCard({ title, excerpt, slug, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <article className="border rounded-lg p-6 hover:border-primary transition-colors duration-300">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{excerpt}</p>
        <time className="text-xs text-muted-foreground">{date}</time>
      </article>
    </Link>
  )
}


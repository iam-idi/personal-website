import Layout from "../../components/Layout"
import Link from "next/link"
import { getAllBlogPosts } from "../../utils/blogPosts"

export default function BlogIndex() {
  const blogPosts = getAllBlogPosts()

  return (
    <Layout>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Blog Posts</h1>

      <ul className="space-y-0">
        {blogPosts.map((post, index) => (
          <li key={post.slug} className={index === 0 ? "border-t border-b py-6" : "border-b py-6"}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-lg md:text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">{post.excerpt}</p>
              <time className="text-xs md:text-sm text-muted-foreground mt-4 block">{post.date}</time>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}


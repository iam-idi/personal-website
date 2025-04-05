import { notFound } from "next/navigation"
import Layout from "../../../components/Layout"
import { getBlogPostBySlug } from "../../../utils/blogPosts"

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params?.slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <article className="max-w-2xl mx-auto">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{post.title}</h1>
          <time className="text-sm text-muted-foreground block mt-2">{post.date}</time>
        </header>

        <div className="prose dark:prose-invert prose-sm md:prose-base lg:prose-lg mx-auto">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </Layout>
  )
}


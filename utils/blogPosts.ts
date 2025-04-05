export type BlogPost = {
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
}

// This is a mock database. In a real application, you'd fetch this data from an API or database.
const blogPosts: BlogPost[] = [
  {
    title: "My First Blog Post",
    slug: "my-first-blog-post",
    date: "2023-05-01",
    excerpt: "This is an excerpt of my first blog post.",
    content: "This is the full content of my first blog post.",
  },
  {
    title: "Another Interesting Article",
    slug: "another-interesting-article",
    date: "2023-05-15",
    excerpt: "Here's a brief summary of another interesting article.",
    content: "This is the full content of another interesting article.",
  },
  // Add more blog posts here
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}


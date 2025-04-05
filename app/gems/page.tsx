import Layout from "../../components/Layout"

export default function GemsPage() {
  return (
    <Layout>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Cool Gems</h1>
      <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl">
        A curated collection of interesting resources I've discovered across the internet. These gems have helped me
        learn, grow, and stay inspired in my journey as a developer.
      </p>

      <div className="space-y-6 md:space-y-8">
        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Articles</h2>
        <ul className="space-y-3 md:space-y-4">
          <li className="border rounded-lg p-3 md:p-4">
            <div>
              <a href="#" className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                The Future of Web Development
              </a>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                An insightful article exploring emerging trends and technologies shaping the future of web development.
              </p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-0.5 rounded-full">Article</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </li>
          <li className="border rounded-lg p-3 md:p-4">
            <div>
              <a href="#" className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                Understanding the JavaScript Event Loop
              </a>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                A deep dive into how the JavaScript event loop works and why it matters for performance.
              </p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-0.5 rounded-full">Article</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
            </div>
          </li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 mt-6 md:mt-8">Videos</h2>
        <ul className="space-y-3 md:space-y-4">
          <li className="border rounded-lg p-3 md:p-4">
            <div>
              <a href="#" className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                Advanced React Patterns
              </a>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                A comprehensive video tutorial on advanced React patterns and best practices for building scalable
                applications.
              </p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-0.5 rounded-full">Video</span>
                <span className="mx-2">•</span>
                <span>25 min</span>
              </div>
            </div>
          </li>
          <li className="border rounded-lg p-3 md:p-4">
            <div>
              <a href="#" className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                Building a Full-Stack App with Next.js
              </a>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                Step-by-step tutorial on building a complete application with Next.js, including authentication and
                database integration.
              </p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-0.5 rounded-full">Video</span>
                <span className="mx-2">•</span>
                <span>45 min</span>
              </div>
            </div>
          </li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 mt-6 md:mt-8">Tools</h2>
        <ul className="space-y-3 md:space-y-4">
          <li className="border rounded-lg p-3 md:p-4">
            <div>
              <a href="#" className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                DevUtils.app
              </a>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                An all-in-one toolbox for developers featuring JSON formatting, URL encoding/decoding, and more.
              </p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-0.5 rounded-full">Tool</span>
                <span className="mx-2">•</span>
                <span>Free & Paid</span>
              </div>
            </div>
          </li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 mt-6 md:mt-8">Podcasts</h2>
        <ul className="space-y-3 md:space-y-4">
          <li className="border rounded-lg p-3 md:p-4">
            <div>
              <a href="#" className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                Syntax.fm
              </a>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                A tasty web development podcast by Wes Bos and Scott Tolinski covering all things JavaScript, CSS, and
                more.
              </p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-0.5 rounded-full">Podcast</span>
                <span className="mx-2">•</span>
                <span>Weekly</span>
              </div>
            </div>
          </li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 mt-6 md:mt-8">Books</h2>
        <ul className="space-y-3 md:space-y-4">
          <li className="border rounded-lg p-3 md:p-4">
            <div>
              <a href="#" className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                Designing Data-Intensive Applications
              </a>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                A must-read book for any developer working with large-scale applications and data systems.
              </p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-0.5 rounded-full">Book</span>
                <span className="mx-2">•</span>
                <span>Advanced</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  )
}


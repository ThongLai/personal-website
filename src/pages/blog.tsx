import Head from 'next/head';
import { SectionTitle } from "@/components/ui/section-title";
import { BlogCard } from "@/components/blog-card";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Tom</title>
        <meta name="description" content="Thoughts, insights, and technical guides" />
      </Head>
      <div className="container py-12 md:py-20">
        <SectionTitle 
          title="Blog" 
          subtitle="Thoughts, insights, and technical guides"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
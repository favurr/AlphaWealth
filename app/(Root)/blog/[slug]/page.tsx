import { notFound } from "next/navigation";
import BLOG_POSTS, { type BlogPost } from "@/app/(Root)/blog/data";
import StickyTOC from "../components/StickyTOC";
import MDXRenderer from "../components/mdx/mdx-renderer";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = BLOG_POSTS.find((p: BlogPost) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="relative py-24">
      {/* Right-aligned, desktop-only TOC */}
      <StickyTOC containerId="article-content" />

      <div className="mx-auto max-w-4xl px-6">
        <h1 className="mb-2 text-4xl font-semibold">{post.title}</h1>
        <p className="mb-8 text-sm text-muted-foreground">{post.date}</p>

        {/* THIS is what StickyTOC reads */}
        <article id="article-content">
          {post.content ? (
            <MDXRenderer source={post.content} />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </article>
      </div>
    </main>
  );
}

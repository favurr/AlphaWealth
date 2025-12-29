import React from "react";
import { notFound } from "next/navigation";
import BLOG_POSTS, { type BlogPost } from "@/app/(Root)/blog/data";
import sanitizeHtml from "@/lib/sanitizeHtml";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = (await params) as { slug: string };
  const post = BLOG_POSTS.find((p: BlogPost) => p.slug === slug);
  if (!post) return notFound();

  const safeContent = post.content ? sanitizeHtml(post.content) : "";

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="prose mx-auto max-w-none sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:prose lg:prose-lg prose-a:underline prose-a:text-primary">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-6">{post.date}</p>

          {post.content ? (
            <div
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </article>
      </div>
    </main>
  );
}

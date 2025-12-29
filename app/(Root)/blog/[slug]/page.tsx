import { notFound } from "next/navigation";
import BLOG_POSTS, { type BlogPost } from "@/app/(Root)/blog/data";
import sanitizeHtml from "@/lib/sanitizeHtml";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  const post = BLOG_POSTS.find((p: BlogPost) => p.slug === slug);
  if (!post) notFound();

  const safeContent = post.content ? sanitizeHtml(post.content) : "";

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="prose mx-auto max-w-none sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl prose-a:underline prose-a:text-primary">
          <h1 className="mb-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            {post.title}
          </h1>

          <p className="mb-6 text-sm text-muted-foreground">{post.date}</p>

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

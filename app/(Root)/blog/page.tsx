import React from "react";
import { BLOG_POSTS } from "./data";
import BlogCard from "@/components/blog-card";

export default function BlogHomePage() {
  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold mb-2">Blog</h1>
          <p className="text-muted-foreground mb-8">
            News, guides, and product updates — all posts are shown here. Click
            a card to read the full article.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard />
        </div>
      </div>
    </main>
  );
}

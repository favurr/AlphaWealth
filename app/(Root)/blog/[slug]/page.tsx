import React from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../data";
import SupportArticle from "@/components/support-article";
import SupportToc from "@/components/support-toc";
import ContactWidget from "@/components/contact";

export default function BlogPostPage() {
    return (
      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:flex-row lg:gap-12">
          {/* Left: Support article */}
          <div className=" lg:flex-1 ">
            <SupportArticle />
          </div>

          {/* Middle: TOC */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <SupportToc />
            </div>
          </div>
        </div>
      </main>
    );

  // Generic post layout
  // return (
  //   <main className="py-24">
  //     <div className="mx-auto max-w-4xl px-6">
  //       <article className="prose mx-auto">
  //         <h1>{post.title}</h1>
  //         <p className="text-sm text-muted-foreground">{post.date}</p>
  //         <p>{post.excerpt}</p>

  //         <section className="mt-6">
  //           <h2>Details</h2>
  //           <p>
  //             This is a placeholder article body for{" "}
  //             <strong>{post.title}</strong>. Replace with content from the
  //             database or markdown files later.
  //           </p>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
  //             posuere erat a ante.
  //           </p>
  //         </section>
  //       </article>
  //     </div>
  //   </main>
  // );
}

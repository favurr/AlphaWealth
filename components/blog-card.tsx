"use client";

import Link from "next/link";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function BlogCard({
  post,
}: {
  post: { slug: string; title: string; excerpt: string; date: string };
}) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-150">
      <CardHeader>
        <div>
          <CardDescription>{post.date}</CardDescription>
          <CardTitle className="text-lg">{post.title}</CardTitle>
        </div>
        <div className="ml-2">
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm text-primary font-medium hover:underline"
          >
            Read
          </Link>
        </div>
      </CardHeader>
      <div className="px-6 pb-6 pt-0">
        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
      </div>
      <CardFooter>
        <div className="text-sm text-muted-foreground">Tags</div>
      </CardFooter>
    </Card>
  );
}

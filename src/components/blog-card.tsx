import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-all">
      <CardHeader className="pb-3">
        <div className="text-sm text-muted-foreground mb-1">
          {formatDate(date)}
        </div>
        <CardTitle className="text-xl">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="mt-4 inline-flex text-primary font-medium hover:underline"
        >
          Read more →
        </Link>
      </CardContent>
    </Card>
  );
}
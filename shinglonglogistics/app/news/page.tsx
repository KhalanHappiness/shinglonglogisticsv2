import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import NewsSidebar from "@/components/news/NewsSidebar";
import { newsPosts } from "@/data/shinglongdata";
import { formatDate } from "@/lib/formatDate";

export const metadata: Metadata = {
  title: "News & Updates | Shinglong Logistics",
  description: "Shipping guides, customs tips and updates from Shinglong Logistics.",
};

export default function NewsPage() {
  return (
    <main>
      <PageHeader title="News & Updates" crumbs={[{ label: "News & Updates" }]} />

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-20">
            {newsPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/news/${post.slug}`} className="relative block aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 850px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <h2 className="mt-8 text-2xl leading-snug text-foreground md:text-3xl">
                  <Link href={`/news/${post.slug}`} className="transition-colors hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-slate-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="mx-2">/</span>
                  <span className="text-primary">{post.category}</span>
                </p>
                <p className="mt-5 leading-relaxed text-slate-600">{post.excerpt}</p>
                <Link href={`/news/${post.slug}`} className="btn-outline mt-7 text-sm">
                  Read more
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <NewsSidebar />
        </div>
      </section>
    </main>
  );
}

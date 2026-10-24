import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import NewsSidebar from "@/components/news/NewsSidebar";
import CtaBand from "@/components/home/CtaBand";
import { home, newsPosts } from "@/data/shinglongdata";
import { formatDate } from "@/lib/formatDate";

export const dynamicParams = false;

export function generateStaticParams() {
  return newsPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Shinglong Logistics`, description: post.excerpt };
}

export default async function NewsArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <PageHeader
        title={post.title}
        crumbs={[{ label: "News & Updates", href: "/news" }, { label: post.category }]}
      />

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_320px]">
          <article>
            <div className="relative aspect-video overflow-hidden">
              <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 850px, 100vw" className="object-cover" />
            </div>
            <p className="mt-8 text-sm text-slate-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-2">/</span>
              <span className="text-primary">{post.category}</span>
            </p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-slate-600">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/news"
              className="mt-12 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to all news
            </Link>
          </article>

          <NewsSidebar currentSlug={post.slug} />
        </div>
      </section>

      <CtaBand content={home.ctaBand} />
    </main>
  );
}

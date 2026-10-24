import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Headset } from "lucide-react";
import { newsPosts, pages } from "@/data/shinglongdata";
import { formatDate } from "@/lib/formatDate";

// Shared by the news list and individual articles
export default function NewsSidebar({ currentSlug }: { currentSlug?: string }) {
  const recent = newsPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  const categories = [...new Set(newsPosts.map((p) => p.category))];
  const { supportBox } = pages.news;

  return (
    <aside className="space-y-12">
      <div>
        <h2 className="border-b border-slate-200 pb-4 text-lg font-semibold text-foreground">Recent Posts</h2>
        <ul className="mt-6 space-y-6">
          {recent.map((post) => (
            <li key={post.slug}>
              <Link href={`/news/${post.slug}`} className="group flex items-center gap-4">
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image src={post.image} alt="" fill sizes="64px" className="object-cover" />
                </span>
                <span>
                  <span className="block font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </span>
                  <span className="mt-1 block text-xs text-slate-400">
                    <span className="text-primary">{post.category}</span> / {formatDate(post.date, "short")}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="border-b border-slate-200 pb-4 text-lg font-semibold text-foreground">Categories</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          {categories.map((category) => (
            <li key={category} className="flex items-center justify-between">
              <span>{category}</span>
              <span className="text-sm text-slate-400">
                {newsPosts.filter((p) => p.category === category).length}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#f7f7f5] px-8 py-12 text-center">
        <Headset className="mx-auto h-11 w-11 text-primary" strokeWidth={1.25} />
        <h2 className="mt-5 text-xl font-semibold text-foreground">{supportBox.heading}</h2>
        <p className="mt-3 leading-relaxed text-slate-600">{supportBox.description}</p>
        <Link href={supportBox.cta.href} className="btn-primary mt-6 text-sm">
          {supportBox.cta.label}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

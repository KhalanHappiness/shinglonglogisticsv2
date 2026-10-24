import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  // The trail after "Home"; the last crumb is the current page
  crumbs: Crumb[];
}

export default function PageHeader({ title, crumbs }: PageHeaderProps) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <section className="border-t border-slate-100 bg-white py-16 text-center shadow-[inset_0_8px_12px_-10px_rgba(0,0,0,0.08)] md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl text-foreground md:text-5xl">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">
            {trail.map((crumb, i) => {
              const isLast = i === trail.length - 1;
              return (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="transition-colors hover:text-primary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-slate-500" : ""}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <span aria-hidden="true">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}

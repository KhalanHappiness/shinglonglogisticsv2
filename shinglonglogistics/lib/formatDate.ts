const long = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const short = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
  timeZone: "UTC",
});

// Dates in the data files are ISO strings (YYYY-MM-DD)
export function formatDate(iso: string, style: "long" | "short" = "long") {
  return (style === "long" ? long : short).format(new Date(iso));
}

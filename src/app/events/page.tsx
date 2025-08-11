import { getSortedEvents } from "../../lib/events";
import Link from "next/link";

export default async function EventsPage(): Promise<React.JSX.Element> {
  const items = await getSortedEvents();
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Events &amp; Updates</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Browse upcoming events, announcements, and recent news. Click any item to read the full post.
            </p>
          </div>
        </div>
        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-2">All Posts</h3>
        <div>
          {items.map((e) => (
            <div key={e.slug} className="p-4">
              <Link href={`/events/${e.slug}`} className="flex items-stretch justify-between gap-4 rounded-lg group">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-[#637588] text-sm font-normal leading-normal">{formatDisplayDate(e.date)}{e.category ? ` • ${e.category}` : ""}</p>
                  <p className="text-[#111418] text-base font-bold leading-tight group-hover:underline">{e.title}</p>
                  <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-3">{e.excerpt}</p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style={{ backgroundImage: `url(${e.image || '/event-placeholder.svg'})` }}
                  aria-label={e.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatDisplayDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
}



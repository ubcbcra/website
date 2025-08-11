import { getEventBySlug } from "../../../lib/events";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function EventDetailPage({ params }: Props) {
  const evt = await getEventBySlug(params.slug);
  if (!evt) return notFound();
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <article className="layout-content-container flex flex-col max-w-[760px] flex-1 p-4">
        <p className="text-[#637588] text-sm font-normal leading-normal mb-1">{formatDisplayDate(evt.date)}{evt.category ? ` • ${evt.category}` : ""}</p>
        <h1 className="text-[#111418] tracking-light text-[34px] font-bold leading-tight mb-4">{evt.title}</h1>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-6"
          style={{ backgroundImage: `url(${evt.image})` }}
          aria-label={evt.title}
        />
        <div className="prose max-w-none">
          {evt.content.split(/\n\n+/).map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl mt-6 mb-2">
                  {block.replace(/^##\s+/, "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4 text-[#111418] text-base leading-normal">
                {block}
              </p>
            );
          })}
        </div>
        <div className="mt-10">
          <a href="/events" className="text-sm font-medium text-[#1773cf] hover:underline">← Back to all events</a>
        </div>
      </article>
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

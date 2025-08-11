import { getEventBySlug } from "../../../lib/events";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

// Support both direct object and Promise-based params (Next.js 15 transitional types)
type EventParams = { slug: string };
export default async function EventDetailPage({ params }: { params: Promise<EventParams> }) {
  const { slug } = await params;
  const evt = await getEventBySlug(slug);
  if (!evt) return notFound();
  return (
  <div className="px-4 sm:px-6 lg:px-12 xl:px-20 flex flex-1 justify-center py-5">
      <article className="layout-content-container flex flex-col max-w-[760px] flex-1 p-4">
        <p className="text-[#637588] text-sm font-normal leading-normal mb-1">{formatDisplayDate(evt.date)}{evt.category ? ` • ${evt.category}` : ""}</p>
        <h1 className="text-[#111418] tracking-light text-[34px] font-bold leading-tight mb-4">{evt.title}</h1>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-6"
          style={{ backgroundImage: `url(${evt.image || '/event-placeholder.svg'})` }}
          aria-label={evt.title}
        />
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown 
            components={{
              h1: ({children}) => <h1 className="text-2xl font-bold mt-8 mb-4 text-[#111418]">{children}</h1>,
              h2: ({children}) => <h2 className="text-xl font-bold mt-6 mb-3 text-[#111418]">{children}</h2>,
              h3: ({children}) => <h3 className="text-lg font-bold mt-4 mb-2 text-[#111418]">{children}</h3>,
              p: ({children}) => <p className="mb-4 text-[#111418] text-base leading-relaxed">{children}</p>,
              strong: ({children}) => <strong className="font-bold text-[#111418]">{children}</strong>,
              em: ({children}) => <em className="italic">{children}</em>,
              ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
              li: ({children}) => <li className="text-[#111418] text-base leading-relaxed">{children}</li>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-[#1773cf] pl-4 italic my-4 text-[#637588]">{children}</blockquote>,
            }}
          >
            {evt.content || ''}
          </ReactMarkdown>
        </div>
        <div className="mt-10">
          <Link href="/events" className="text-sm font-medium text-[#1773cf] hover:underline">← Back to all events</Link>
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

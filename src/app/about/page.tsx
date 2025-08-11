"use client";
import { useState } from "react";

type Member = {
  role: string;
  name: string;
  contact: string;
  image: string; // unused (kept for backwards compatibility)
  description: string; // formal description (legacy)
  formalDescription?: string;
  funDescription?: string;
  // Optionally allow explicit image overrides (relative to /public)
  formalImage?: string;
  funImage?: string;
};

// Member data (update names/roles/emails here). Images are loaded from /public/members
// using a slug of the member name: e.g. "Akshat Kalra" -> /members/akshat-kalra.jpg.
// Supported extensions (checked in order): .jpg, .png, .webp, .jpeg
const members: Member[] = [
  {
    role: "President",
    name: "Tharun Pranav",
    contact: "president@brockcommons.ca",
    image: "",
    description: "Leads the association, ensuring effective governance and representation of residents' interests.",
    formalDescription: "Leads the association, ensuring effective governance and representation of residents' interests.",
    funDescription: "Spotted: TP with too many tabs open: AI builds, startups, and side quests galore. Still figuring it out… or quietly ten steps ahead?",
  },
  {
    role: "VP Internal",
    name: "Akshat Kalra",
    contact: "vp.internal@brockcommons.ca",
    image: "",
    description: "Manages internal affairs, including meetings, communications, and member engagement.",
    formalDescription: "Manages internal affairs, meetings, and member engagement.",
    funDescription: "Spotted: Akshat Kalra on lunch break #4, back at Brock like he never left. Friendly with everyone, except maybe his manager. Oops.",
  },
  {
    role: "VP External",
    name: "Shikha Rajesh",
    contact: "vp.external@brockcommons.ca",
    image: "",
    description: "Handles external relations, partnerships, and community outreach.",
    formalDescription: "Handles external relations, partnerships, and outreach.",
    funDescription: "Spotted: Shikha dashing out of Brock South, again. Time-blind, filter-free, and living loud. Iconic? Or just one joke away from chaos?",
  },
  {
    role: "VP Finance",
    name: "Stacy",
    contact: "vp.finance@brockcommons.ca",
    image: "",
    description: "Oversees financial matters, budgeting, and resource allocation.",
    formalDescription: "Oversees budgeting and resource allocation.",
    funDescription: "Spotted: Stacy swimming with the locals, fins, flippers, and a sea turtle sidekick. VP Finance on vacation… but who's keeping the receipts?",
  },
  {
    role: "South House President",
    name: "Rhea Gujral",
    contact: "south.president@brockcommons.ca",
    image: "",
    description: "Represents South House residents, addresses their concerns, and organizes house-specific events.",
    formalDescription: "Represents South House residents and organizes events.",
    funDescription: "Spotted: Rhea getting rowdy at the Pit. Volume: maxed. Vibes: certified. She’s not just running South… she’s the reason it’s loud.",
  },
  {
    role: "North House President",
    name: "Mayank",
    contact: "north.president@brockcommons.ca",
    image: "",
    description: "Represents North House residents, addresses their concerns, and organizes house-specific events.",
    formalDescription: "Advocates for North House residents and events.",
    funDescription: "Spotted: Mayank, unfazed in a snowstorm, calm like it’s part of the plan. North looks steady… but is it him, or just the weather?",
  },
  {
    role: "Tallwood House President",
    name: "Dikpaal Patel",
    contact: "tallwood.president@brockcommons.ca",
    image: "",
    description: "Represents Tallwood House residents, addresses their concerns, and organizes house-specific events.",
    formalDescription: "Supports Tallwood House community and events.",
    funDescription: "Spotted: Dikpaal, smiling post-Grouse Grind like it was a stroll. He conquered the mountain… but can he handle Tallwood’s chaos without breaking a sweat?",
  },
  {
    role: "Health & Sustainability Rep",
    name: "Elaina",
    contact: "health.sustainability@brockcommons.ca",
    image: "",
    description: "Promotes health and sustainability initiatives within the residence community.",
    formalDescription: "Promotes health and sustainability initiatives.",
    funDescription: "Turning green ideas into everyday habits.",
  },
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function buildImageCandidates(name: string, variant: 'formal' | 'fun'): string[] {
  const slug = toSlug(name) + (variant === 'fun' ? '-fun' : '');
  return [".webp", ".jpg", ".jpeg", ".png"].map(ext => `/members/${slug}${ext}`);
}

function MemberImage({ member, variant }: { member: Member; variant: 'formal' | 'fun' }) {
  const explicit = variant === 'fun' ? member.funImage : member.formalImage;
  const candidates = (explicit ? [explicit] : buildImageCandidates(member.name, variant)).concat(['/member-placeholder.svg']);
  const [index, setIndex] = useState(0);
  const src = candidates[index];
  return (
    <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#e4e7ea] flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${member.name} photo (${variant})`}
        className="h-full w-full object-cover"
        onError={() => {
          setIndex(i => (i < candidates.length - 1 ? i + 1 : i));
        }}
        loading="lazy"
      />
    </div>
  );
}

export default function AboutPage(): React.JSX.Element {
  const [mode, setMode] = useState<'formal' | 'fun'>('formal');
  return (
    <div className="px-4 sm:px-6 lg:px-12 xl:px-20 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Council Members</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">Meet the dedicated team leading the Brock Commons Residence Association.</p>
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => setMode('formal')}
                className={`h-8 px-4 rounded-lg text-xs font-medium tracking-wide border transition ${mode === 'formal' ? 'bg-[#1773cf] text-white border-[#1773cf]' : 'bg-[#f0f2f4] text-[#111418] border-transparent hover:bg-[#e4e7ea]'}`}
              >
                Formal
              </button>
              <button
                type="button"
                onClick={() => setMode('fun')}
                className={`h-8 px-4 rounded-lg text-xs font-medium tracking-wide border transition ${mode === 'fun' ? 'bg-[#1773cf] text-white border-[#1773cf]' : 'bg-[#f0f2f4] text-[#111418] border-transparent hover:bg-[#e4e7ea]'}`}
              >
                Fun
              </button>
            </div>
          </div>
        </div>

        {members.map((m) => {
          const desc = mode === 'fun' ? (m.funDescription || m.description) : (m.formalDescription || m.description);
    return (
          <section key={m.role} className="mb-2">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{m.role}</h2>
            <div className="p-4 @container">
              <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
                <MemberImage member={m} variant={mode} />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">{m.name}</p>
                  <div className="flex items-end gap-3 justify-between">
                    <p className="text-[#637588] text-base font-normal leading-normal">
                      {desc} Contact: {m.contact}
                    </p>
                    <a
                      href={`mailto:${m.contact}`}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#1773cf] text-white text-sm font-medium leading-normal"
                    >
                      <span className="truncate">Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );})}
      </div>
    </div>
  );
}



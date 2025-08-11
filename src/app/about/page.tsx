type Member = {
  role: string;
  name: string;
  contact: string;
  image: string;
  description: string;
};

// Member data (update names/roles/emails here). Images are loaded from /public/members
// using a slug of the member name: e.g. "Akshat Kalra" -> /members/akshat-kalra.jpg.
// Supported extensions (checked in order): .jpg, .png, .webp, .jpeg
const members: Member[] = [
  { role: "President", name: "Tharun Pranav", contact: "president@brockcommons.ca", image: "" , description: "Leads the association, ensuring effective governance and representation of residents' interests." },
  { role: "VP Internal", name: "Akshat Kalra", contact: "vp.internal@brockcommons.ca", image: "", description: "Manages internal affairs, including meetings, communications, and member engagement." },
  { role: "VP External", name: "Shikha Rajesh", contact: "vp.external@brockcommons.ca", image: "", description: "Handles external relations, partnerships, and community outreach." },
  { role: "VP Finance", name: "Stacy", contact: "vp.finance@brockcommons.ca", image: "", description: "Oversees financial matters, budgeting, and resource allocation." },
  { role: "South House President", name: "Rhea Gujral", contact: "south.president@brockcommons.ca", image: "", description: "Represents South House residents, addresses their concerns, and organizes house-specific events." },
  { role: "North House President", name: "Mayank", contact: "north.president@brockcommons.ca", image: "", description: "Represents North House residents, addresses their concerns, and organizes house-specific events." },
  { role: "Tallwood House President", name: "Dikpaal Patel", contact: "tallwood.president@brockcommons.ca", image: "", description: "Represents Tallwood House residents, addresses their concerns, and organizes house-specific events." },
  { role: "Health & Sustainability Rep", name: "Elaina", contact: "health.sustainability@brockcommons.ca", image: "", description: "Promotes health and sustainability initiatives within the residence community." },
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function possibleImagePaths(name: string): string[] {
  const slug = toSlug(name);
  return [".jpg", ".png", ".webp", ".jpeg"].map(ext => `/members/${slug}${ext}`);
}

function pickImage(name: string): string {
  // We can't statically check existence at build without fs; just return first path.
  // User should place appropriately named file in public/members.
  return possibleImagePaths(name)[0];
}

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Council Members</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">Meet the dedicated team leading the Brock Commons Residence Association.</p>
          </div>
        </div>

  {members.map((m) => {
    const img = m.image || pickImage(m.name) || '/member-placeholder.svg';
    return (
          <section key={m.role} className="mb-2">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{m.role}</h2>
            <div className="p-4 @container">
              <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
      style={{ backgroundImage: `url(${img})` }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">{m.name}</p>
                  <div className="flex items-end gap-3 justify-between">
                    <p className="text-[#637588] text-base font-normal leading-normal">
                      {m.description} Contact: {m.contact}
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



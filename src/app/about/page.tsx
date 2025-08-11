import { getMembers } from "../../lib/members";

export default async function AboutPage(): Promise<React.JSX.Element> {
  const members = await getMembers();
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Council Members</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">Meet the dedicated team leading the Brock Commons Residence Association.</p>
          </div>
        </div>

        {members.map((m) => (
          <section key={m.role} className="mb-2">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{m.role}</h2>
            <div className="p-4 @container">
              <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${m.image})` }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">{m.name}</p>
                  <div className="flex items-end gap-3 justify-between">
                    <p className="text-[#637588] text-base font-normal leading-normal">{m.description} {m.contact && <>Contact: {m.contact}</>}</p>
                    {m.contact && (
                      <a
                        href={`mailto:${m.contact}`}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#1773cf] text-white text-sm font-medium leading-normal"
                      >
                        <span className="truncate">Contact</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}



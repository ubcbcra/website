export default function ResourcesPage(): React.JSX.Element {
  return (
  <div className="px-4 sm:px-6 lg:px-12 xl:px-20 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex sm:min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Resources</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">Find important documents, guidelines, and helpful links for residents.</p>
          </div>
        </div>

        {[
          {
            title: "BCRA 2025 Constitution",
            desc: "Official constitution document for the Brock Commons Residence Association 2025.",
            url: "https://docs.google.com/document/d/1QHecId1_PKWbABMpEpKqk-UAElhi_PrB/edit?tab=t.0",
            cta: "View",
          },
          {
            title: "Meeting Minutes Directory",
            desc: "Access all meeting minutes and records from BCRA meetings.",
            url: "https://docs.google.com/document/d/1smYne4BukQk0wVI-upMwhWiVjjsfM-tz2oJCx50jPJ0/edit?tab=t.0",
            cta: "View",
          },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">{item.title}</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">{item.desc}</p>
              </div>
            </div>
            <div className="shrink-0">
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit hover:bg-[#e8eaed] transition-colors"
              >
                <span className="truncate">{item.cta}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



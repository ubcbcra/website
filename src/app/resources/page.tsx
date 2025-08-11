export default function ResourcesPage(): React.JSX.Element {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Resources</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">Find important documents, guidelines, and helpful links for residents.</p>
          </div>
        </div>

        {[
          {
            icon: "File",
            title: "Residence Handbook",
            desc: "Download the comprehensive guide to living at Brock Commons.",
            cta: "Download",
          },
          {
            icon: "File",
            title: "Residence Policies",
            desc: "Review the rules and regulations for residents.",
            cta: "Download",
          },
          {
            icon: "File",
            title: "Procedures Guide",
            desc: "Understand the procedures for handling various situations.",
            cta: "Download",
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
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit">
                <span className="truncate">{item.cta}</span>
              </button>
            </div>
          </div>
        ))}

        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Maintenance Requests</h2>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Submit Maintenance Request</p>
              <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">Submit a request for repairs or maintenance in your room or common areas.</p>
            </div>
          </div>
          <div className="shrink-0">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit">
              <span className="truncate">Submit</span>
            </button>
          </div>
        </div>

        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Frequently Asked Questions (FAQs)</h2>
        <div className="flex flex-col p-4 gap-3">
          {["What are the residence rules?", "How do I report a maintenance issue?", "What events are happening this month?"].map((q) => (
            <details key={q} className="flex flex-col rounded-lg border border-[#dce0e5] bg-white px-[15px] py-[7px] group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#111418] text-sm font-medium leading-normal">{q}</p>
                <div className="text-[#111418] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </summary>
              <p className="text-[#637588] text-sm font-normal leading-normal pb-2">The residence rules are designed to ensure a safe and respectful living environment for all residents.</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}



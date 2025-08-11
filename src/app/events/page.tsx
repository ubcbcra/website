export default function EventsPage(): React.JSX.Element {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Events Calendar</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Stay updated with all the exciting events happening at Brock Commons. Explore our calendar to find activities, workshops, and social gatherings that suit your interests.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
          <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
            <div className="flex items-center p-1 justify-between">
              <button>
                <div className="text-[#111418] flex size-10 items-center justify-center" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </button>
              <p className="text-[#111418] text-base font-bold leading-tight flex-1 text-center">October 2024</p>
              <button>
                <div className="text-[#111418] flex size-10 items-center justify-center" data-icon="CaretRight" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="grid grid-cols-7">
              {"SMTWTFS".split("").map((d) => (
                <p key={d} className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  {d}
                </p>
              ))}
              {Array.from({ length: 30 }).map((_, i) => (
                <button key={i} className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className={`flex size-full items-center justify-center rounded-full ${i + 1 === 5 ? "bg-[#1773cf] text-white" : ""}`}>{i + 1}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Upcoming Events</h3>
      </div>
    </div>
  );
}



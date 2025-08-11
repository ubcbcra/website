export default function ContactPage(): React.JSX.Element {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Contact Us</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              We're here to help! Reach out to us with any questions or concerns you may have. Our team is dedicated to providing prompt and helpful assistance to ensure your
              experience at Brock Commons is exceptional.
            </p>
          </div>
        </div>

        {["Name", "Email", "Subject"].map((label) => (
          <div key={label} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">{label}</p>
              <input
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
        ))}

        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111418] text-base font-medium leading-normal pb-2">Message</p>
            <textarea
              placeholder="Enter your message"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div className="flex px-4 py-3 justify-end">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Submit</span>
          </button>
        </div>

        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Additional Contact Methods</h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          For immediate assistance, you can reach us via email or phone. Our team is dedicated to providing prompt and helpful assistance to ensure your
          experience at Brock Commons is exceptional.
        </p>
        {[{ label: "Email", value: "brockcommons@residence.edu" }, { label: "Phone", value: "+1 (604) 123-4567" }].map((m) => (
          <div key={m.label} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" />
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">{m.label}</p>
              <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">{m.value}</p>
            </div>
          </div>
        ))}

        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Frequently Asked Questions</h2>
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



export default function Home(): React.JSX.Element {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-[218px]"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_PDQiIcO9XdrSM2xTB7rVmoo7oaZHIqDpd7w53vhiNHeo9o_Q6anhwLxWC84piP2Y4PTE-KB5HeN96HNx-eM9lQ2YYvK60PzAwIzEsJL6_bg6LivFyd1eR070qYm2GD3ApCCGMj5rSY9JNY-pb4qwAFo2AqeRnv-_mzxQrzRp9SIoQhrw3phLc8KQudr8bpaJpPGbZr8iOZkUzNAEDOnXQFRtqAImoIJhaUnEXsKmChz7MMudXQO8LMsyN-xseBs5aMUFd2lhN3)",
              }}
            >
              <div className="flex p-4">
                <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                  Welcome to Brock Commons
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          The Brock Commons Residence Association (BCRA) is dedicated to enhancing the living experience for residents of Brock Commons at the University of British Columbia. We
          organize events, provide resources, and represent the interests of our community.
        </p>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Quick Links
        </h2>
        <div className="pb-3">
          <div className="flex border-b border-[#dce0e5] px-4 gap-8">
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] gap-1 pb-[7px] pt-2.5"
              href="/events"
            >
              <div className="text-[#111418]" data-icon="Calendar" data-size="24px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z"></path>
                </svg>
              </div>
              <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">Events</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] gap-1 pb-[7px] pt-2.5"
              href="/resources"
            >
              <div className="text-[#637588]" data-icon="BookOpen" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path>
                </svg>
              </div>
              <p className="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">Resources</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] gap-1 pb-[7px] pt-2.5"
              href="/about"
            >
              <div className="text-[#637588]" data-icon="Users" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                </svg>
              </div>
              <p className="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">Community</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] gap-1 pb-[7px] pt-2.5"
              href="/contact"
            >
              <div className="text-[#637588]" data-icon="Envelope" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
              </div>
              <p className="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">Contact Us</p>
            </a>
          </div>
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          News &amp; Announcements
        </h2>
      </div>
    </div>
  );
}

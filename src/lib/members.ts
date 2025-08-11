export interface MemberItem {
  role: string;
  name: string;
  contact: string;
  image: string;
  description: string;
  order?: number; // optional ordering field
}

// Fallback dataset (update values as needed)
const fallbackMembers: MemberItem[] = [
  { role: 'President', name: 'Ethan Carter', contact: 'president@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw7enDBzSirLN_ha07mCbv6F6EX01aOkQy-kcMq8wftaZx1G6FcQ5se4dTMk-xnaD2ZCqAIuAUIh0S4XUVpVsKgzHOrIoKB4avvpmqWGgxs8u-8WuIcxjDPly5HvR5BawCRCEYBvW5bbIG7t1WITSY_xMgUP7QJn4DvzvMTKnxs1-JBrW_CvMZ_lmn8k15JV1KNRgFEXrK35dulqIUUzOwiPZu1Zl_TML4S8fkajKclVTXnlrKe8WNqPxJkMtKMTygAMUscrkBXoLh', description: "Leads the association, ensuring effective governance and representation of residents' interests." },
  { role: 'VP Internal', name: 'Olivia Bennett', contact: 'vp.internal@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuZP6bYCucyTOeSWNyHwvDkyJRq5iejpFmpKX0LwqPo_IEgJlT0uRvlcuaF_ZMzbrgXbH5fmSpBrusBPmBFc2d-7hfSwIlk_1YIbWY48oV43QUu65VNImYg_emRIqR4J19xjLodDTNZrpKHPfY1wRGJAgkuptuCP4UV--ODim3uTJBRu6Zt2b-Nb-hpp9njWVE7D_v6ulLZjFSV8cZiQRCjazu-u1VT25wjTEnqNQVGnky6rY3nEz2OXHQArfFtFN76g1Fv41yZTc', description: 'Manages internal affairs, including meetings, communications, and member engagement.' },
  { role: 'VP External', name: 'Noah Thompson', contact: 'vp.external@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs7Ha4FvL3hkeK6rztWM8B65qAidpIDQNYWF4-SQOSN60sUYcZvzPR8XxNUd3Q3LBcvcmWuSIdWfMWhAOACVqEYNEcsfzIy-Q580Lwggx5Y9gfCaAFYNrnW2zi8f2AB4DEcQJ4LQ1GTK2U1LdNYWg-OSj8myGpDnAN-1hVUaebn2M8927WOrCFCwOI_RbxEYHf06C_yikbsgowVZ9mJ773omCJNd42ZKMCWSDmY8LPWG8DDAZVxntQT7xSbKYvb7_pivGAWAQyyHLX5', description: 'Handles external relations, partnerships, and community outreach.' },
  { role: 'VP Finance', name: 'Sophia Clark', contact: 'vp.finance@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASSFKp5fKI0L0tUuVgi4w3hSw-ukTic4n7HDVUX1da_8weT7uL2pCu-RlLqLXcSvcRVI8jgddW_L5lrNZjhMNZqiwTkSrQA0fzuumqQm_2yoqbYcLY2qlcL6R2zwFvUHMC5O39FScbjSWQa-KDs7hK3D8MNx6zKnTZ8jt8IzmMai918WRrzFE3fBiCdVr1qEnSuPP0_Ar3ir2ZYZNFWCMY4PT-2a_QuT92yl583g85K1JN3UpaJUeH3R_KmrmwGDY3a-jkgTYJT4zn', description: 'Oversees financial matters, budgeting, and resource allocation.' },
  { role: 'South House President', name: 'Liam Walker', contact: 'south.president@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCanS5GvE8Z6EPa5I1Nd2pth0GdQZDQQiaqcI2qEkL41TgLkk3i5hdlJO3Zr9urbXgDV6nrXrVsE5NX9Wj5WTHM6LyvjL_ConWhhqPTuTP7TpaYctDqjAcaAk6bnz5LQYnzSCsBKUecixqB-EQwbvyIgiDOqr9lXpUneOwqCvrE27cxLpkjVAfbTkNRcEaaUVAM5X09vJunvFvj2qCOAzMTyhltXUmBa7tifWSc0F37wf5BFnHHcou-KyHbGbfZJnFla24Rd_yLEru8', description: 'Represents South House residents, addresses their concerns, and organizes house-specific events.' },
  { role: 'North House President', name: 'Ava Martinez', contact: 'north.president@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnE3eFcz-Rr6rpckuzNsm_6jh3fNT6AGnQiPupoybZ2gnueUufp57sphX31i-Y4me0yBrjxBo_MLvUX4yrtN72-Yved1GsYnawx7EUKIwAV5DRy_Wfw3cRnCC4u7fTZfq12imoQsOO2R_gAYFOx-BgdW5e6Xc1VZdjg7Zr5XsGtqL4cLf3GxielxgmXCM7DIMJ-uP0uJo8mZvpUfxvlOXqwxAtpuQeCZfN6R130CjM1ljrHho2BXiR0lC98NLr7ZjPBA4GX_3LyAV5', description: 'Represents North House residents, addresses their concerns, and organizes house-specific events.' },
  { role: 'Tallwood House President', name: 'Caleb Harris', contact: 'tallwood.president@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyoTUV69jPsqCisX0X5Bc8VPskHEnwHRyPW1tuVqSFwh-grI3aNejz9SE9ZHIa4NZlM6zu_U8oiJ6EWuEkEJBkSyqOLIPWoNOo5YXdwhq4PMRFUOD9a5_3g4-K1oYPe8E2L7zpzZ9YPni7YGNjUo4VjT232YWn49A_5JyebrHkSs1DAqZ6pU1e9k6H63aOZaUR_5xmmlHTTT2QzVbAjb8z4E_kxLW4ydDwrC31muOzqH0-QIa9npd4aV6-0wLkN855FeCF6i8ZHR_J', description: 'Represents Tallwood House residents, addresses their concerns, and organizes house-specific events.' },
  { role: 'Health & Sustainability Rep', name: 'Isabella Lewis', contact: 'health.sustainability@brockcommons.ca', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR-IBAOZ9MM_QfJ2pxbf6_ANFLlkSWF2fxipBVCnlH7ySI2DctCRdcvZlnFUx_jmzC2XZdUJai9e95Ey1A_nYpn-hLOg5skxdnABtKtXKRWgmW7NdCnrTVP_xTvETAuDi1omJDVDOUF_EEvlfmvTDcshTQvwnFhLiBdJ28OFtcg0wXzjkJaqsKVXLelo5MEH5Kc8Ke8I3y_wxeG0-gb6GWUuuk2aCBScO861Mp_QMB2kJ8jeQBd1U42Jy9DPXckyzpY9rXsZMTBYa', description: 'Promotes health and sustainability initiatives within the residence community.' },
];

let membersCache: { ts: number; data: MemberItem[] } | null = null;
const MEMBERS_TTL_MS = 5 * 60 * 1000;

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split(/\r?\n/);
  if (!lines.length) return [];
  const headers = lines[0].split(',').map((h) => h.trim());
  return lines.slice(1).filter(Boolean).map((line) => {
    const cols: string[] = [];
    let cur = ''; let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQ && line[i + 1] === '"') { cur += '"'; i++; } else { inQ = !inQ; }
      } else if (ch === ',' && !inQ) { cols.push(cur.trim()); cur = ''; }
      else { cur += ch; }
    }
    cols.push(cur.trim());
    const rec: Record<string, string> = {};
    headers.forEach((h, idx) => { rec[h] = (cols[idx] || '').replace(/^"|"$/g, ''); });
    return rec;
  });
}

async function loadMembersFromSheet(): Promise<MemberItem[]> {
  const url = process.env.MEMBERS_SHEET_CSV_URL;
  if (!url) return fallbackMembers;
  if (membersCache && Date.now() - membersCache.ts < MEMBERS_TTL_MS) return membersCache.data;
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error('Failed to fetch members sheet');
    const csv = await res.text();
    const rows = parseCSV(csv);
    const items: MemberItem[] = rows
      .map((r) => ({
        role: r.role,
        name: r.name,
        contact: r.contact || r.email || '',
        image: r.image || r.image_url || '',
        description: r.description || r.desc || '',
        order: r.order ? Number(r.order) : undefined,
      }))
      .filter((m) => m.role && m.name);
    items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
    membersCache = { ts: Date.now(), data: items };
    return items;
  } catch (e) {
    console.warn('Member sheet load failed, using fallback:', e);
    return fallbackMembers;
  }
}

export async function getMembers(): Promise<MemberItem[]> {
  return loadMembersFromSheet();
}

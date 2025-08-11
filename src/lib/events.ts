export interface EventItem {
  slug: string;
  title: string;
  date: string; // ISO date
  category?: string;
  excerpt: string;
  content: string; // markdown-like content
  image: string;
}

// Fallback in-repo dataset used when no Google Sheet CSV is configured or fetch fails.
export const fallbackEvents: EventItem[] = [
  {
    slug: "upcoming-residence-meeting",
    title: "Upcoming Residence Meeting",
    date: "2024-10-15",
    category: "Latest News",
    excerpt:
      "Join us for our next residence meeting on October 15th at 7 PM in the common room. We'll be discussing upcoming events and addressing any concerns.",
    content: `## Upcoming Residence Meeting\n\nJoin us for our next residence meeting on **October 15th at 7 PM** in the common room.\n\nWe'll be covering:\n- Upcoming social and academic events\n- Budget updates\n- Feedback & concerns from residents\n- Q&A with the executive team\n\nBring your ideas and a friend! Snacks will be provided.`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIUbwIzIOdH886IKgjVbAQqtZfrO5hqLJsZe8CnK6lVpLXpRQhbOMxcXTwfaXgsWyY8EGLhL223t5hkk-3R7lrsEqJcLxs70UXuPox2VSnybz6MCLOPTGXLvXojy1T24dzE09DWNCnz8y66vsLz-OAMAqDaKMfsJTucZO46Slpd7joZEcUcSOQCY5jP2rOewNJb-z39xuD93qvkE5JF5vCCxzGlVPEeZXk4Uuvuun0NvGK1XUiKTSM47Cd0NAiDfb3FXmw_7eZwHuS",
  },
  {
    slug: "new-study-room-hours",
    title: "New Study Room Hours",
    date: "2024-10-10",
    category: "Announcement",
    excerpt:
      "The study rooms on floors 2 and 3 will now be open 24/7 to accommodate all study schedules. Please be mindful of noise levels during late hours.",
    content: `## New Study Room Hours\n\nGreat news! Study rooms on **floors 2 and 3 are now open 24/7**.\n\nGuidelines:\n- Keep noise to a minimum after 10 PM\n- Clean up your space when you leave\n- Do not leave personal belongings unattended for more than 30 minutes\n\nHappy studying!`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwCukkrcQiTOFEO-xFT5aFzwj4e5RdYxOrKT7S4ANKUK9OIhvshtkFjQMGR-gdVFjgBus0vg56IXBGJLqZUWIJZjzbiTrBalJ4AmH02byWF1-69fIKSdk8lYyDgj6XsgMFygdiG11kV5-oeEaJgZ61hyaPeOt2FIpEQFNIJ3u0AuRXPrfhhfNwBbHgncww3lz5u59bo8PWsSplwRkkyHH6hVqaJEbtILs0rJE_V-Nixr01gq2GFpMl3nJsAA_9DjmWT7BeX1g0Hqux",
  },
  {
    slug: "halloween-costume-contest",
    title: "Halloween Costume Contest",
    date: "2024-10-31",
    category: "Event Reminder",
    excerpt:
      "Get ready for our annual Halloween costume contest on October 31st! Prizes will be awarded for the most creative and scariest costumes.",
    content: `## Halloween Costume Contest 🎃\n\nOur annual costume contest is back on **October 31st at 8 PM** in the main lounge.\n\nCategories & Prizes:\n- Most Creative\n- Funniest\n- Scariest\n\nJudging starts at 8:30 PM. Light refreshments provided. Come early to mingle!`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfKa1fUYmzRM4N-vTg2D_grL0zFo5Torlaf1JiK2UBknz0bft0Y84qYrFVVeDKRigpThhHXSlAERFbhviG0Ade0IuBZEjjDukesvtR6eireLzzYnzqke5jYzr2ctQV2ZiZ3K8iqCBRG2bXQ_SKLyHY8kan2hLIMftvEyvn9t988HkxS2VJlFf6nDgV5iwOiD10qMSm2N0_aI_jwbX9thrQGNyWsEag7AAE11pEAOLxuUBOyKd0p0sCS_ick4_QvGs4rKRXXdsGp75A",
  },
  {
    slug: "study-group-session",
    title: "Study Group Session",
    date: "2024-10-15",
    category: "Upcoming Event",
    excerpt: "Join us for a collaborative study session in the common area. Bring your notes and questions!",
    content: `## Study Group Session\n\nNeed motivation? Join the community **study group** on October 15th at 6 PM in the 2nd floor common area.\n\nWe'll provide:\n- Whiteboards & markers\n- Quiet + collaboration zones\n- Snacks after 7 PM\n\nOpen to all subjects—just show up!`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCAxC9qE-Sy82u85Nf-WlEL9k9E7R8NXNa1ppYSWKVyF2rrX5Zg_uhM4ImRbKb8ozAcYmA2L1yi5g5Oho6E1aw1x0i84lyO3HZjJnT0S9Vkg57ONOlSMI9Iz6V9mYUntWcmF7l60K_TyEFksALH4E3wdcvBDUUTGIuWE92C7Ju4aDcThMyfxWMvhgENTnCrqHOHQRxUVuZcSOGdYIP8sRXGLhugd5JZRNehXne31tDXDuM1dn1y01hd_NMDY9KPmLVM-DWU5mOUQzc",
  },
  {
    slug: "movie-night",
    title: "Movie Night",
    date: "2024-10-20",
    category: "Upcoming Event",
    excerpt: "Relax and enjoy a movie with your fellow residents. We'll be screening a popular comedy.",
    content: `## Movie Night 🍿\n\nTake a break and come to Movie Night on **October 20th at 8 PM** in the lounge.\n\nIncludes:\n- Free popcorn\n- Soft drinks\n- Vote for next week's film\n\nBring a pillow or blanket for max comfort!`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5-T8LaBtXLWG62A_J68Se2uwDqFTGxx8daPXBGza_w2bVoP-WM5Yk838vJEwLMWbpBSd_U7jZ3RYi2EXWsz-iAGFoaRLfoR5DD8I2GzVEnNEYpzha8o_ZzODUq53dPvEXJGZbcZi0aSbUjxhwqkF8FBx6Uwsfo9a6X1sjfYH2-HpU0Nto9YVL0-y-FMa5GF7KgKOaxPizh0wis1zNP5hsEjh7GaJTUcnwuF8mU4YL1vjJ0kw9uKPWb9gOk9O8F3l0MCcaFArer2Mw",
  },
  {
    slug: "halloween-party",
    title: "Halloween Party",
    date: "2024-10-25",
    category: "Upcoming Event",
    excerpt: "Get ready for a spooky night of costumes, games, and treats! Prizes for the best costumes.",
    content: `## Halloween Party 👻\n\nSpooky season is here! Join us on **October 25th at 9 PM** for the annual Halloween Bash.\n\nWhat to expect:\n- DJ + dance floor\n- Costume contest (10 PM)\n- Games & photo booth\n- Candy + themed snacks\n\nAll residents welcome—see you there!`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgwQ1wfnvzyuBNx6PGjCQwHFIW_ki0u3uuGLQeBxrcbyOCedXfDPjJqgfyNe0_E8K1qrm1-Oa4QuXPzniQsUS2IsTdpfGkny1NMNHREDKQThwTYcKk_XI3qQdp40JuGJBQBjS4Nbr0Xqxny0DkRP90unoIuSgkwItsPdBrseWPT8mWp4R-1CZInT-tQYC12nNSshLbcniBUgOlUA_fm3O89ywJAX5db4ALsU81x15xPnhrJ4_cH_9MzI23iUuwkJf49TTZklYJegc",
  },
];

let eventCache: { ts: number; data: EventItem[] } | null = null;
const EVENT_TTL_MS = 5 * 60 * 1000; // 5 minutes

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split(/\r?\n/);
  if (!lines.length) return [];
  const headers = lines[0].split(',').map((h) => h.trim());
  return lines.slice(1).filter(Boolean).map((line) => {
    const cols: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        cols.push(cur.trim());
        cur = '';
      } else {
        cur += ch;
      }
    }
    cols.push(cur.trim());
    const rec: Record<string, string> = {};
    headers.forEach((h, idx) => {
      const raw = cols[idx] || '';
      rec[h] = raw.replace(/^"|"$/g, '');
    });
    return rec;
  });
}

async function loadEventsFromSheet(): Promise<EventItem[]> {
  const url = process.env.EVENTS_SHEET_CSV_URL;
  if (!url) return fallbackEvents;
  if (eventCache && Date.now() - eventCache.ts < EVENT_TTL_MS) return eventCache.data;
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error('Failed to fetch events sheet');
    const csv = await res.text();
    const rows = parseCSV(csv);
    const items: EventItem[] = rows
      .map((r) => ({
        slug: r.slug,
        title: r.title,
        date: r.date,
        category: r.category,
        excerpt: r.excerpt,
        content: r.body || r.content || '',
        image: r.image || r.image_url || '',
      }))
      .filter((e) => e.slug && e.title && e.date);
    items.sort((a, b) => (a.date < b.date ? 1 : -1));
    eventCache = { ts: Date.now(), data: items };
    return items;
  } catch (e) {
    console.warn('Event sheet load failed, using fallback:', e);
    return fallbackEvents;
  }
}

export async function getEventBySlug(slug: string): Promise<EventItem | undefined> {
  const data = await loadEventsFromSheet();
  return data.find((e) => e.slug === slug);
}

export async function getSortedEvents(): Promise<EventItem[]> {
  return loadEventsFromSheet();
}


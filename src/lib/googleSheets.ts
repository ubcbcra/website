import { google } from 'googleapis';
import { EventItem } from './events';

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID;
const RANGE = 'Events!A2:G'; // Assuming headers in row 1, data starts from row 2

// Initialize Google Sheets API
const getGoogleSheetsClient = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
};

export async function fetchEventsFromGoogleSheets(): Promise<EventItem[]> {
  if (!SPREADSHEET_ID) {
    console.warn('Google Sheets ID not configured, using static events');
    return [];
  }

  try {
    const sheets = getGoogleSheetsClient();
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values || [];
    
    const events: EventItem[] = [];
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const [slug, title, date, category, excerpt, content, image] = row;
      
      if (!slug || !title || !date) {
        console.warn(`Skipping row ${i + 2}: missing required fields`);
        continue;
      }

      events.push({
        slug: slug.trim(),
        title: title.trim(),
        date: date.trim(),
        category: category?.trim() || '',
        excerpt: excerpt?.trim() || '',
        content: content?.trim() || '',
        image: image?.trim() || '/event-placeholder.svg',
      });
    }
    
    return events;
    
  } catch (error) {
    console.error('Error fetching events from Google Sheets:', error);
    return [];
  }
}

// Cache for events to avoid hitting the API too frequently
let eventsCache: EventItem[] | null = null;
let lastCacheTime = 0;
const CACHE_DURATION = 0; // 1 minute

export async function getCachedEventsFromSheets(): Promise<EventItem[]> {
  const now = Date.now();
  
  if (eventsCache && (now - lastCacheTime) < CACHE_DURATION) {
    return eventsCache;
  }
  
  const events = await fetchEventsFromGoogleSheets();
  eventsCache = events;
  lastCacheTime = now;
  
  return events;
}

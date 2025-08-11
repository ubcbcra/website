# Events Management with Google Sheets

## Overview

This implementation allows non-technical council members to manage events through Google Sheets while maintaining a fallback to static events.

## Features

- ✅ **Easy editing**: Council members can add/edit events in Google Sheets
- ✅ **Real-time updates**: Changes appear on the website within 5 minutes
- ✅ **Fallback system**: If Google Sheets is unavailable, static events are used
- ✅ **Caching**: Reduces API calls with 5-minute cache
- ✅ **Type safety**: Full TypeScript support
- ✅ **Admin panel**: `/admin` page to verify integration status

## Files Added/Modified

- `src/lib/googleSheets.ts` - Google Sheets API integration
- `src/lib/events.ts` - Updated to use Google Sheets as primary source
- `src/app/admin/page.tsx` - Admin panel for testing
- `.env.example` - Environment variables template
- `GOOGLE_SHEETS_SETUP.md` - Detailed setup guide
- `GOOGLE_SHEETS_TEMPLATE.md` - Template for council members

## Setup Process

1. **Install dependencies** ✅ (Already done)
2. **Create Google Sheet** (Follow GOOGLE_SHEETS_SETUP.md)
3. **Set up Google Service Account** (Follow GOOGLE_SHEETS_SETUP.md)
4. **Configure environment variables** (Copy .env.example to .env.local)
5. **Share sheet with service account**
6. **Test the integration** (Visit /admin)

## For Council Members

Once set up, council members can:
- Add new events by adding rows to the Google Sheet
- Edit existing events by modifying cells
- Remove events by deleting rows
- See changes on the website within 5 minutes

## Next Steps

1. Complete the Google Sheets setup following `GOOGLE_SHEETS_SETUP.md`
2. Test with the admin panel at `/admin`
3. Share the sheet with council members
4. Provide them with `GOOGLE_SHEETS_TEMPLATE.md` as a guide
5. Remove the `/admin` page before deploying to production

## Benefits

- **No technical knowledge required** for council members
- **Familiar interface** (everyone knows spreadsheets)
- **Collaborative** (multiple people can edit)
- **Version history** (Google Sheets tracks changes)
- **Mobile friendly** (Google Sheets mobile app)
- **Reliable fallback** (static events if sheets unavailable)

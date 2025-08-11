# Google Sheets Events Setup

This guide will help you set up Google Sheets integration for managing events.

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BCRA Events" or similar
4. Create a sheet called "Events"

## 2. Set up the Sheet Structure

In the "Events" sheet, add these column headers in row 1:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| slug | title | date | category | excerpt | content | image |

### Column Descriptions:
- **slug**: URL-friendly identifier (e.g., "halloween-party-2024")
- **title**: Event title (e.g., "Halloween Party")
- **date**: Date in YYYY-MM-DD format (e.g., "2024-10-31")
- **category**: Event category (e.g., "Upcoming Event", "Announcement")
- **excerpt**: Short description for event previews
- **content**: Full event description (supports basic markdown)
- **image**: Image URL or leave empty for placeholder

## 3. Create Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Fill in service account details and create
6. Click on the created service account
7. Go to "Keys" tab → "Add Key" → "Create New Key" → "JSON"
8. Download the JSON file

## 4. Share the Sheet

1. Open your Google Sheet
2. Click "Share" in the top right
3. Add the service account email (from the JSON file) as an editor
4. Make sure "Notify people" is unchecked

## 5. Configure Environment Variables

1. Copy `.env.example` to `.env.local`
2. Fill in the values:
   - `GOOGLE_SHEETS_ID`: Get from the sheet URL
   - `GOOGLE_CLIENT_EMAIL`: From the JSON file (`client_email`)
   - `GOOGLE_PRIVATE_KEY`: From the JSON file (`private_key`)

## 6. Test the Integration

1. Add some test events to your sheet
2. Run `npm run dev`
3. Visit your events page to see if they load

## For Council Members

### Adding a New Event
1. Open the BCRA Events Google Sheet
2. Add a new row with all the required information
3. Make sure the date is in YYYY-MM-DD format
4. Save the sheet
5. Changes will appear on the website within 5 minutes

### Editing an Event
1. Find the event row in the sheet
2. Edit the desired fields
3. Save the sheet
4. Changes will appear on the website within 5 minutes

### Removing an Event
1. Delete the entire row for the event
2. Save the sheet
3. The event will disappear from the website within 5 minutes

## Tips for Council Members

- **Slug**: Use lowercase letters, numbers, and hyphens only (e.g., "study-group-march-2025")
- **Date**: Always use YYYY-MM-DD format (e.g., 2025-03-15)
- **Images**: You can use image URLs from Google Drive, Imgur, or other hosting services
- **Content**: Keep it simple - basic text works best, you can use **bold** and *italics*
- **Categories**: Try to be consistent (e.g., "Upcoming Event", "Announcement", "Latest News")

## Troubleshooting

- If events don't appear, check that the sheet is shared with the service account
- Make sure all required fields (slug, title, date) are filled
- Verify the date format is correct
- Check that there are no extra spaces in the data

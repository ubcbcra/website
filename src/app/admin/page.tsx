import { getCachedEventsFromSheets } from '@/lib/googleSheets';
import { getSortedEvents, EventItem } from '@/lib/events';

export default async function AdminPage() {
  let sheetsEvents: EventItem[] = [];
  let staticEvents: EventItem[] = [];
  let error: string | null = null;

  try {
    sheetsEvents = await getCachedEventsFromSheets();
    staticEvents = await getSortedEvents();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error';
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Events Admin</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Google Sheets Events ({sheetsEvents.length})
          </h2>
          {sheetsEvents.length === 0 ? (
            <p className="text-gray-600">
              No events found in Google Sheets. Check your configuration or add events to the sheet.
            </p>
          ) : (
            <div className="space-y-4">
              {sheetsEvents.map((event, index) => (
                <div key={index} className="border rounded p-4">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date} • {event.category}</p>
                  <p className="text-sm">{event.excerpt}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Static Events ({staticEvents.length})
          </h2>
          <div className="space-y-4">
            {staticEvents.slice(0, 3).map((event, index) => (
              <div key={index} className="border rounded p-4">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date} • {event.category}</p>
                <p className="text-sm">{event.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded">
        <h3 className="font-semibold mb-2">Status</h3>
        <p>
          {sheetsEvents.length > 0 
            ? "✅ Google Sheets integration is working! Events are being loaded from the sheet."
            : "⚠️ Using fallback static events. Configure Google Sheets to enable dynamic updates."
          }
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Next Steps</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Share the Google Sheet with council members</li>
          <li>Provide them with the setup guide</li>
          <li>Test adding/editing events</li>
          <li>Remove this admin page in production</li>
        </ul>
      </div>
    </div>
  );
}

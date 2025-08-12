# BCRA Website

This is the official website for the Brock Commons Residence Association (BCRA), built with [Next.js](https://nextjs.org) and TypeScript.

## Features

- **Home Page**: Welcome message and introduction to BCRA
- **About Page**: Information about the residence association and team members
- **Events Page**: Display of upcoming and past BCRA events
- **Resources Page**: Links to important documents including the BCRA Constitution and Meeting Minutes
- **Contact Page**: Contact information and inquiry forms
- **Admin Panel**: Administrative tools for managing content

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install && yarn dev
# or
pnpm install && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying files in the `src/app/` directory. The page auto-updates as you edit the file.

## Content Management

### Managing Events

Events are stored as a static array in `src/lib/events.ts`. To add or edit an event:

1. Open `src/lib/events.ts`
2. Duplicate an existing event object in the `events` array
3. Update the following fields:
   - `slug`: URL-friendly identifier
   - `title`: Event name
   - `date`: Format as YYYY-MM-DD
   - `excerpt`: Brief description
   - `content`: Full event details
   - `image`: Path to event image
4. Save the file - changes will hot-reload in development

**Note**: Events are automatically sorted by date (newest first).

### Managing Members

Team members are stored in `src/lib/members.ts`. To update member information:

1. Open `src/lib/members.ts`
2. Edit existing entries or add new ones
3. Include member photos in `/public/members/` directory
4. Save and redeploy for production

### Managing Resources

The resources page displays important BCRA documents and links. Currently includes:

- **BCRA 2025 Constitution**: Official constitution document
- **Meeting Minutes Directory**: Access to all meeting records

To update resources, modify the array in `src/app/resources/page.tsx`.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── admin/             # Admin panel
│   ├── contact/           # Contact page
│   ├── events/            # Events pages
│   └── resources/         # Resources page
├── components/            # Reusable React components
└── lib/                   # Utility functions and data
    ├── events.ts          # Events data
    ├── members.ts         # Team members data
    └── googleSheets.ts    # Google Sheets integration
```

## Development

### Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and formatting

### Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Deployment

The website is deployed on Vercel. Any pushes to the main branch will automatically trigger a new deployment.

For manual deployment:
1. Build the project: `npm run build`
2. Deploy to your preferred hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit changes: `git commit -m 'Add some feature'`
5. Push to branch: `git push origin feature-name`
6. Submit a pull request

## Support

For technical issues or questions about the website, please contact the BCRA tech team or create an issue in this repository.

---

*This website represents the Brock Commons Residence Association at UBC.*

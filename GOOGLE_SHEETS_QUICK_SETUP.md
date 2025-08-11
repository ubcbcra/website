# Google Sheets Setup - Sample Data

## Row 1 (Headers):
Copy and paste these headers exactly into cells A1 through G1:

```
A1: slug
B1: title  
C1: date
D1: category
E1: excerpt
F1: content
G1: image
```

## Row 2 (Sample Event):
Copy and paste this sample data into row 2:

```
A2: winter-study-night
B2: Winter Study Night
C2: 2025-08-20
D2: Academic
E2: Join fellow residents for a collaborative study session with snacks and good vibes.
F2: ## Winter Study Night

Join us for an evening of focused studying on **August 20th at 7 PM** in the main study room.

What we provide:
- Quiet study zones
- Group collaboration areas  
- Coffee and snacks
- Whiteboards and supplies

All subjects welcome! Bring your textbooks and let's ace those exams together.
G2: /event-placeholder.svg
```

## Row 3 (Another Sample):
```
A3: pizza-social
B3: Pizza Social Night
C3: 2025-08-25
D3: Social
E3: Come hang out, meet new friends, and enjoy free pizza in the common room.
F3: ## Pizza Social Night 🍕

Hungry? Want to meet new people? Join us on **August 25th at 6 PM** in the common room.

We'll have:
- Free pizza (multiple varieties)
- Soft drinks
- Games and music
- Photo booth

Perfect for new residents to meet everyone and for returning residents to catch up!
G3: /event-placeholder.svg
```

## Important Notes:

- **Column A (slug)**: Use lowercase, hyphens only, no spaces
- **Column C (date)**: Must be YYYY-MM-DD format
- **Column F (content)**: You can use simple markdown like **bold** and *italics*
- **Column G (image)**: Use `/event-placeholder.svg` or paste image URLs

## Quick Copy-Paste Method:

1. Select cell A1 and paste: `slug`
2. Press Tab, paste: `title`  
3. Press Tab, paste: `date`
4. Continue for all headers...

Or copy this entire row and paste into A1:
```
slug	title	date	category	excerpt	content	image
```

Once you have the headers and sample data, your sheet is ready for the API integration!

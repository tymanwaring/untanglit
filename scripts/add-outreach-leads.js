const { google } = require('googleapis');
const fs = require('fs');
const keys = JSON.parse(fs.readFileSync('C:/Users/atman/Documents/Cursor_MCPs/untanglit-keys.json'));
const auth = new google.auth.GoogleAuth({ credentials: keys, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });

auth.getClient().then(async client => {
  const sheets = google.sheets({ version: 'v4', auth: client });
  const sheetId = 2047436240;
  const spreadsheetId = '1Me3cAVvy_8lB4yDs2mWx9sRJdk_7KxhEvQ5aAzz9wDI';

  const rows = [
    [
      'Wrenn Grey', 'Tattoo Artist', 'tattoosbywrenn@gmail.com', 'wrenngrey.com',
      'Not Contacted', '', '', 'Gmail address + Acuity scheduling, no custom site',
      'Dark art/fineline, Spokane Valley, tattooing since 2019', '',
      'Hi Wrenn,\n\nI\'m Tyler from Untanglit, a web studio in Spokane. I came across your work and it\'s really impressive — the dark art and fine line stuff especially.\n\nI noticed you\'re running bookings through Acuity and directing people to a Gmail for inquiries. A custom site that actually matches your aesthetic — dark, editorial, uniquely you — could go a long way in setting you apart and pulling in clients who find you on Google instead of just through Instagram.\n\nI\'d love to put together a free mockup for you — no commitment needed. Worth a quick chat?\n\nTyler\nUntanglit'
    ],
    [
      'Joe Clark (Aeterna Tattoo)', 'Tattoo Artist', 'joeclarktattoos.com (contact form)', 'joeclarktattoos.com',
      'Not Contacted', '', '', 'Very minimal portfolio site, relies on Instagram traffic',
      'Private studio, one client/day, 20 years exp, Spokane', '',
      'Hi Joe,\n\nI\'m Tyler from Untanglit, a web studio in Spokane. I came across your work at Aeterna — the ornamental and realism pieces are incredible.\n\nYour site is clean but very minimal, and with a private studio booking one client a day, a stronger web presence could ensure your calendar stays full from Google search alone — not just word of mouth or Instagram.\n\nI\'d love to put together a free mockup. No commitment needed. Worth a quick chat?\n\nTyler\nUntanglit'
    ],
    [
      'Konner Tattoos', 'Tattoo Artist', 'konnertattoos.com/contact', 'konnertattoos.com',
      'Not Contacted', '', '', 'Instagram-first, site exists but underdeveloped',
      'Traditional style, located at Main Ave Tattoo, Spokane', '',
      'Hi Konner,\n\nI\'m Tyler from Untanglit, a web studio in Spokane. Love the traditional work — really clean lines.\n\nI noticed your site points people straight to Instagram to book, which means you\'re leaving Google traffic on the table. A better site with a real booking flow and some local SEO could bring in clients who aren\'t already following you.\n\nI\'d love to put together a free mockup — no strings attached. Open to a quick chat?\n\nTyler\nUntanglit'
    ],
    [
      'Andrew Edlin (Monroe Street Tattoo)', 'Tattoo Artist', 'monroestreettattoo.com (contact form)', 'monroestreettattoo.com',
      'Not Contacted', '', '', 'WordPress site, outdated feel, private studio since 2018',
      'Japanese/traditional specialist, Spokane since 2011', '',
      'Hi Andrew,\n\nI\'m Tyler from Untanglit, a web studio in Spokane. Your Japanese traditional work is seriously impressive — the large-scale pieces especially.\n\nYour site does the job but feels a bit dated for the caliber of work you\'re producing. A redesign that actually reflects your craft and ranks better on Google for searches like "Japanese tattoo Spokane" could keep your waitlist consistently full.\n\nI\'d love to put together a free mockup — no commitment needed. Worth a chat?\n\nTyler\nUntanglit'
    ],
    [
      'La Mort Tattoo (Sara)', 'Tattoo Artist', 'lalunetattoo.com (contact form)', 'lalunetattoo.com',
      'Not Contacted', '', '', 'Basic Wix site, portfolio relies on Instagram',
      'Private studio, client-centric storytelling brand, Spokane', '',
      'Hi Sara,\n\nI\'m Tyler from Untanglit, a web studio in Spokane. I came across La Mort and love the concept — the idea of tattooing as storytelling is a really compelling brand angle.\n\nYour current Wix site doesn\'t quite do that story justice. A custom site that reflects the atmosphere and intentionality of your studio could really set you apart and pull in clients searching for a meaningful tattoo experience in Spokane.\n\nI\'d love to put together a free mockup — no strings attached. Open to a quick chat?\n\nTyler\nUntanglit'
    ],
    [
      "Tim's Plumbing (Tim)", 'Plumbing', 'ourfavoriteplumber@gmail.com', 'timsplumbingservice.com',
      'Not Contacted', '', '', 'Wix site, Gmail address, solo 20+ years, CdA area',
      "Solo operator, Coeur d'Alene (Spokane metro), 20+ yrs exp", '',
      "Hi Tim,\n\nI'm Tyler from Untanglit, a web studio based in Spokane. I came across your site and noticed it's a pretty simple Wix build — which means you're likely not showing up for searches like \"plumber Coeur d'Alene\" or \"water heater repair near me.\"\n\nWith 20+ years of experience and running your own shop, a stronger web presence could keep your schedule full without relying on word of mouth alone. I'd love to put together a free mockup — no commitment needed.\n\nWorth a quick chat?\n\nTyler\nUntanglit"
    ],
    [
      '32 Done Contracting (Robert)', 'Plumbing', '32donecontracting.com (contact form)', '32donecontracting.com',
      'Not Contacted', '', '', 'Wix site, solo operator, great reviews',
      'Family-owned, Spokane, residential + emergency plumbing', '',
      "Hi Robert,\n\nI'm Tyler from Untanglit, a web studio in Spokane. I came across 32 Done Contracting and noticed your site is on Wix — which limits how well you show up on Google for searches like \"emergency plumber Spokane\" or \"residential plumbing near me.\"\n\nYou've got great reviews and clearly do quality work. A faster, better-optimized site could make sure new customers find you before they find someone else.\n\nI'd love to put together a free mockup — no commitment needed. Worth a quick chat?\n\nTyler\nUntanglit"
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Email Outreach!A17',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows }
  });

  const formatRequests = rows.map((_, i) => ({
    repeatCell: {
      range: { sheetId, startRowIndex: 16 + i, endRowIndex: 17 + i, startColumnIndex: 0, endColumnIndex: 11 },
      cell: {
        userEnteredFormat: {
          backgroundColor: (16 + i) % 2 === 0 ? { red: 1, green: 1, blue: 1 } : { red: 0.949, green: 0.953, blue: 0.957 },
          verticalAlignment: 'TOP',
          wrapStrategy: 'WRAP'
        }
      },
      fields: 'userEnteredFormat'
    }
  }));

  await sheets.spreadsheets.batchUpdate({ spreadsheetId, requestBody: { requests: formatRequests } });
  console.log('Done — 7 new rows added and formatted');
});

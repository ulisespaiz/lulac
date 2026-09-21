# Salinas LULAC Council #2055 website

Static HTML site for the Salinas, California council of the League of United Latin American Citizens. No build step: edit the HTML, upload the folder.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: meetings, recent activity, issue areas, about LULAC |
| `officers.html` | Council officers |
| `issues.html` | The six LULAC issue areas |
| `politics.html` | Elected-official links |
| `sponsors-donors.html` | Sponsor logos and silent-auction donors |
| `contact.html` | Phone, email, donate, Human Rights Complaint Form, referral agencies |
| `youth.html` | Youth Council #2087 |
| `black-white-ball-2023.html` | 50th anniversary gala photos |
| `photos.html` | Photo gallery |
| `videos.html` | History of LULAC video |
| `help.html` | Referral agencies (legal, consumer, civil rights, social services, housing) |
| `coronavirus-resources.html` | Pandemic food-distribution photo record |

Root files: `robots.txt`, `sitemap.xml`, `llms.txt`. Assets live in `assets/` (css, js, img, docs, video).

## Common edits

**Next meeting.** In `index.html`, find the `meeting-card` block and replace the paragraph text with the date, time, and place. Also update the "Meetings" line in `llms.txt`.

**Add an event.** Copy the `<article class="event-card">` block in `index.html`, change the image, date label, title, text, and link. For a full page, copy `black-white-ball-2023.html`, keep the header and footer, replace the `<main>` content.

**Add photos.** Drop JPGs into `assets/img/`, then add `<figure><img loading="lazy" src="assets/img/NAME.jpg" alt="what is in the photo"></figure>` inside the page's `photo-grid`.

**Donate link.** The Donate button currently points to `contact.html#donate`. When there is a payment page, replace it everywhere in one command:

```sh
sed -i 's#href="contact.html\#donate"#href="https://YOUR-DONATE-URL" target="_blank" rel="noopener"#g' *.html
```

**Officers.** Edit the `officer-grid` in `officers.html`. Portraits should be roughly 4:5. If there is no portrait, keep `class="officer-photo is-placeholder"` and the shield logo.

**Sitemap.** After adding or removing a page, add or remove its `<url>` in `sitemap.xml` and its line in `llms.txt`.

## Design

Modeled on lulac.org.

- Display type: Fraunces (headings, pull quotes). Body, nav, buttons: Montserrat. Both from Google Fonts.
- Colors: ink `#1a1536`, blue `#125fa6`, hero and deep blue `#0b2577`, red `#ed142e`, yellow highlight `#ffe138`, light blue surface `#e0ecf8`.
- 4px corners everywhere. No shadows, gradients, animations, or icon fonts. Three inline SVG glyphs (phone, envelope, external link) are pasted where needed.
- All tokens and components are in `assets/css/style.css`. `assets/js/script.js` only handles the More dropdown, the mobile menu, and the footer year.

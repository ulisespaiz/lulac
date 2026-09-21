# Salinas LULAC Council #2055 — Visual Redesign 1.0.16

This build is a visual redesign of the current Council #2055 website. It keeps the current navigation hierarchy and creates a local HTML page for every current menu destination.

## Local pages
- index.html
- contact.html
- officers.html
- coronavirus-resources.html
- black-white-ball-2023.html
- help.html
- politics.html
- issues.html
- youth.html
- sponsors-donors.html
- photos.html
- videos.html

## Current-site sources used
- https://lulacsalinas2055.org/
- https://lulacsalinas2055.org/complaint-forms-contact-information
- https://lulacsalinas2055.org/officers
- https://lulacsalinas2055.org/coronavirus-resources
- https://lulacsalinas2055.org/black-white-ball-2023
- https://lulacsalinas2055.org/help
- https://lulacsalinas2055.org/politics
- https://lulacsalinas2055.org/issues
- https://lulacsalinas2055.org/youth
- https://lulacsalinas2055.org/sponsors
- https://lulacsalinas2055.org/donors
- https://lulacsalinas2055.org/photos
- https://lulacsalinas2055.org/videos

## Media recovery
Where the crawler could not expose a direct original image URL, the `<img>` uses an an `<img>` tag with the `src` attribute intentionally omitted and includes a `data-original-source` attribute plus an HTML comment identifying which original image belongs there. Add a normal `src="assets/img/..."` value when the image is downloaded. No unrelated replacement photography is used.

Pages whose text was only partially recoverable: Coronavirus Resources, Help, Sponsors, Photos, Videos. Their local pages preserve the known titles/content and reserve structured space for the original media/text rather than inventing material.

## Visual rules
- Roboto
- Blue / red / white
- Full-width sections with centered containers
- Responsive desktop / tablet / mobile layouts
- Flaticon UIcons
- No gradients
- No box shadows
- No decorative borders
- No pseudo-element decoration


## 1.0.5 refinements
- Restored a full-width red call-to-action section directly above the blue footer on every page.
- Removed the outdated June 15, 2024 next-meeting block from Home.
- Increased shared section-title sizing slightly.
- Changed light-surface section headings to the LULAC brand blue.
- Replaced gray background surfaces with white or very light brand-blue surfaces.
- Refined selected descriptions using only information already present on the current Council #2055 website.


## 1.0.6 refinements
- Reorganized primary navigation: Politics and Sponsors & Donors are now main-menu items.
- Moved Coronavirus Resources and Black & White Ball 2023 under More.
- Consolidated the previous Sponsors and Donors pages into sponsors-donors.html while preserving both original content groups and media placeholders.
- Fixed desktop More-menu hover behavior by eliminating the hover gap and adding a short close delay.
- Increased main navigation size and contrast; active primary items now use the brand blue.
- Restyled badges from pill shapes to compact rounded labels for a cleaner hierarchy.


## 1.0.8 navigation refinements
- Added a red top notice banner above the primary navigation.
- Desktop More dropdown now initializes closed and uses delayed hover open/close handling.
- Mobile navigation is now a white panel over a dark-blue overlay.
- Mobile More submenu is collapsed by default and expands on demand.


## 1.0.8 visual refinements
- Blue/default badges now use the brand blue background with white text, matching the red badge treatment.
- Full-width content sections no longer use `--color-surface-soft`; those sections are white.
- Desktop `.nav-link` text uses `--color-brand`.
- Added a moving red star ticker directly below every hero using the supplied `assets/img/white-star.png`.
- The ticker respects `prefers-reduced-motion`.


## 1.0.9
- Extended the existing reveal micro-animations across every local page through shared JavaScript selectors and staggered timing.
- Rebuilt the star ticker as two identical measured groups, with explicit star spacing and an exact group-width animation distance for a seamless infinite loop.
- Preserves reduced-motion behavior.


## 1.0.11
- Removed the website contact form from Complaint Forms & Contact.
- Kept the original Council phone, email, membership, address, and complaint-form download information.
- Removed the now-unused contact-form JavaScript and CSS hooks.


## 1.0.11 changes
- Black & White Ball 2023 hero now uses the standard brand-blue hero background.
- Help hero includes a short supporting description.
- Navigation link corner radius reduced through the shared `--radius-nav` token.


## Version 1.0.15
- Contact page renamed and repositioned after Sponsors & Donors in all navigation.
- Mobile menu flattened and expanded to fill the available viewport.
- Hero entrance micro-animations standardized across every page.
- Added concise descriptions to the six Issues areas.


## 1.0.15
- Mobile top banner now shortens “Contact the Council” to “Contact”; desktop wording is unchanged.


## 1.0.15 media pass
- Only the Home page retains a hero image.
- Interior-page hero content is centered with compact vertical spacing.
- Supplied officer portraits are normalized to a consistent 4:5 crop with `object-fit: cover`.
- Supplied sponsor artwork is displayed in equal-size logo cells with `object-fit: contain` so logos are never cropped.
- Home uses the supplied `hero-photo.jpg`.


## 1.0.16
- Sponsor cards now use white backgrounds with centered artwork.
- Sponsor section renamed to “2016 Black & White Ball Sponsors.”
- Added the seven supplied vertical donor/sponsor images in a three-column desktop gallery under “2016 Black & White Ball Silent Auction Donors and Sponsors.”
- Removed the historical note from Politics.
- Added the supplied complaint-form preview image and downloadable Council #2055 Human Rights Complaint Form PDF to Contact.


## 1.0.18
- Rebuilt Coronavirus Resources as a 29-photo gallery using the supplied `corona-*` images.
- Rebuilt Black & White Ball 2023 with the original poster in the hero, gallery link/code, and eight supplied event photos.
- Added six original Help-page resource logos to Contact while retaining contact details and the downloadable complaint form.
- Rebuilt Photos using the four supplied `photos-*` images.
- Embedded the supplied YouTube video on Videos.


## 1.0.19
- Replaced the embedded YouTube player on `videos.html` with the supplied local H.264 MP4 for reliable playback.
- Kept the external **Watch on YouTube** button linking to `https://www.youtube.com/watch?v=OtKpIY6-EXo`.
- Video asset: `assets/video/history-of-lulac.mp4` (640x360, approximately 24m32s).

# Thai mirror overlay for MJMT

This ZIP is intended to be unzipped over the existing MJMT repository.

It adds:

- `th/index.html`
- `th/training.html`
- `th/coaches.html`
- `th/gallery.html`
- `th/overseas.html`
- `th/enquire.html`

It replaces:

- `script.js`

The replacement `script.js` keeps the existing mobile menu, form handling and smooth scrolling behaviour, but adds English ↔ Thai page routing for the language selector.

Notes:

- Thai copy is review-ready and should be checked by a native Thai speaker before publication.
- Images are reused from the existing `images/` folder through relative paths such as `../images/...`.
- WhatsApp links still use the existing `placeholder` number but include the requested pre-filled message.
- Prices have been converted from £500 and £750 into approximate Thai Baht values and rounded for display: ฿22,000 and ฿33,000.
- Thai `training.html` maps back to the English home-page `#packages` section.
- Thai `enquire.html` maps back to the English home-page `#inquiry-form` section.

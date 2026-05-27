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


## Update: Thai coach profile pages

This overlay now also adds Thai versions of the six individual coach profile pages:

- `th/coach-master-jud.html`
- `th/coach-adam.html`
- `th/coach-nawaphon.html`
- `th/coach-nin.html`
- `th/coach-noi.html`
- `th/coach-susun.html`

`th/coaches.html` and `th/index.html` have been updated so coach links remain inside the Thai `/th/` section. `script.js` has also been updated so the language selector maps each English coach profile to its Thai equivalent, and each Thai coach profile back to the English equivalent.

The Thai copy is intended as review-ready draft copy and should be checked by a native Thai speaker before client presentation.

Note: coach boxing names have been kept in their existing romanised form from the English files rather than guessing Thai spellings. A native Thai reviewer can replace these with exact Thai spellings where appropriate.

# Codex implementation brief: Master Jud focused MJMT prototype

**Target:** existing static prototype at <https://jsmith-tid.github.io/MJMT/index.html>  
**Goal:** produce a working, reviewable weekend prototype focused on training with Master Jud (MJ). Keep it unpublished or in an isolated preview branch until Alan and the investor approve release. Do not deploy changes to the public GitHub Pages site without that approval.

## Context and priorities

Some coaches may no longer work with MJ. Remove promises tied to the roster and make MJ's actual coaching the main proposition. The prototype must offer a genuine enquiry route **without collecting payment or pretending to confirm availability**. Preserve the site's straightforward Muay Thai character, responsive layout, and useful travel information. Do not invent credentials, testimonials, schedules, prices, availability, or relationships with other named people.

Work in this order: (1) accurate offer and navigation, (2) safe, working enquiry flow, (3) images and presentation, (4) supporting pages and translations. Prefer a cohesive, small site to carrying over inaccurate sections.

## Proposed homepage message

Use this as draft copy, subject to MJ confirming that he personally coaches customers who respond to this offer:

> # Train with Master Jud in Phuket
>
> **Decades of Muay Thai experience. Coaching shaped around what you need to improve.**
>
> Work on your technique with Master Jud in a real training environment. Tell us your experience, goals and preferred dates, and we'll discuss a training plan with you.
>
> **Enquire about training**

Do not imply that every session is exclusively with MJ or that a place is guaranteed. If the first proposition is still under discussion, mark it in project notes and use more cautious public facing wording such as “Enquire about training with Master Jud.” Avoid “world class,” “unparalleled,” or named champion claims until checked with MJ.

## Page and content changes

1. **Home (`index.html`):** Replace the generic hero and package cards with an MJ led hero, a compact explanation of his coaching, clear training formats, a short “His story” section, selected photographs, concise Phuket practicalities, and an enquiry action repeated after the key sections. Suggested training formats are private coaching, a focused training visit, and a tailored longer stay, but label specifics as subject to discussion until MJ confirms them. A short section about his approach is more useful than a long list of unsourced superlatives.
2. **MJ profile (`coach-master-jud.html`):** Keep and refine the career story; lead with what students learn from him. Verify his personal name, boxing name, chronology, named fighters, awards, and claimed international work with MJ. The current page labels him “Banluesak Chuenyim” and “Surachai Chanmanee”; confirm the intended relationship between these names before changing or repeating them. Replace the “Personal reviews ... go here” placeholder. Correct any typos only where the intended meaning is certain. Replace the CTA naming the Elite Coaching Week with an enquiry CTA.
3. **Coaches and packages:** Remove the “Coaches” navigation item and the multi-coach homepage section. Remove the old Standard and Elite seven-day offers (£500/£750), their session counts, “Most Popular,” and any coach-dependent promises until the offer and staffing are agreed. Do not silently leave discoverable old coach pages linked through footers or translated menus. For the prototype, old profile URLs can remain inaccessible from navigation; decide redirects or removal before public release after checking historical links.
4. **Other pages:** Review `overseas.html`, `gallery.html`, footer, sticky buttons, metadata, and every language variant for old programme, roster, and booking claims. Keep accurate travel guidance, but flag operational statements (opening days, transport, accommodation assistance, medical support) for confirmation. Preserve `noindex` on the review prototype; revisit indexing only as part of an approved public launch.
5. **Testimonials:** Remove the current homepage's unattributed or unverified review copy unless the business can verify permission, author and wording. Use a labelled content slot in the development brief, not a fabricated testimonial on the rendered site.

## Existing photography

The MJ profile currently offers a portrait `images/Master-Jud-3040879388.jpg` and thirteen numbered career images.

- Use `images/13. Master Jud.png` as the temporary homepage hero, with **text beside the image** on a solid background. It is a clear, square gym photo of MJ holding pads (1080 × 1080). Check the crop on mobile.
- Use `images/Master-Jud-3040879388.jpg` as a small portrait where useful. At 450 × 900, it is unsuitable as a wide hero.
- Use `images/02. Master Jud.jpg` in the history section, with a caption only after MJ confirms the setting/date. Images 07 and 09 may support his career story if identities and context can be confirmed.
- Treat images 01, 04–06, 08, 10–12 as optional archive material. Avoid enlarging grainy pictures or presenting historical scenes as current coaching. Image 03 lacks an obvious focal point for this purpose.
- Add a clearly identified future asset slot in project notes for a landscape and portrait photo of MJ actively correcting a student. Keep the live page attractive with existing images; do not show an empty placeholder to visitors unless needed for internal review.

The Japanese video at <https://www.youtube.com/watch?v=4F0NS3QPW_w> can be considered as a **small, optional “lighter side of MJ” link or normal YouTube embed** below the serious credentials, after MJ approves its context. Do not download, edit, rehost, make clips, use its thumbnail as a local asset, or place it in ads without appropriate rights. It is not the hero media.

## Enquiry flow: no payment

Replace the present `book.html` experience rather than lightly editing its final step. Its `booking.js` currently simulates availability, offers a roster of coaches, collects card details, and displays completion/confirmation messages; none of those behaviors fit this offer.

- Prefer a simple `Enquire` or `Request training` route. Collect name, email, optional WhatsApp/phone with country code, preferred start and end dates or flexible dates, experience level, personal training goals, number of people, and optional practical questions. Make only essential fields required; add a short privacy explanation. Avoid requesting detailed medical information in a general enquiry field.
- Choose either an already working form endpoint or a properly configured new endpoint. Inspect and verify the existing Formspree integration and its recipient/ownership before using it. Never commit secret keys. If delivery cannot be configured or independently tested, provide a working email fallback and clearly identify the configuration needed before launch; do not show a success state on an unverified submission.
- On verified submission say: **“Thanks. We've received your training enquiry. We'll reply to discuss availability and the details. Your training is not confirmed yet.”** Provide actionable error and retry states. Prevent duplicate submissions where practical.
- All date and time language should make Phuket/Thailand time explicit when relevant. Do not display fake slots, simulated reference numbers, payment amounts, card fields, “booking complete,” or “your session is confirmed.”
- Replace all `wa.me/placeholder` links with a verified number or hide those CTAs until supplied. Do not substitute an invented number. Check the navigation, footer, floating button and translations.

## Translation and technical implementation

- Inspect the site's actual file structure and translation mechanism before editing. Update English first; then bring all displayed language variants into consistency or temporarily offer only versions with accurate translated content. Do not leave other languages selling retired packages or departed coaches.
- Reuse existing CSS conventions where feasible; remove dead booking logic rather than leaving a payment form hidden by CSS. Ensure keyboard navigation, visible labels and errors, useful alt text, readable contrast, mobile layout and touch targets.
- Keep the existing URLs where helpful, but rename visible “Book now” actions to “Enquire about training” or “Request training.” Find and update every navigation, footer, CTA, schema/metadata and JavaScript reference to outdated offers.
- Create a compact README or change note listing content awaiting confirmation: MJ's offer and actual involvement, names and achievements, prices if any, response owner and address, WhatsApp number, opening/scheduling arrangements, permission for photos/testimonials and the optional video.

## Verification and handoff

1. Run a local static preview. Review desktop and narrow mobile widths for homepage, profile, travel page and enquiry page.
2. Follow every visible CTA and link; check for broken images and `wa.me/placeholder`, obsolete coach/programme copy, and payment UI across all accessible language versions.
3. Submit a test enquiry only to an endpoint under the team's control, verify actual delivery, and test validation and an error state. Do not submit personal data to an unverified destination.
4. Provide Alan an isolated preview, a short summary of changed files and outstanding factual confirmations. **Do not push or publish to the public GitHub Pages deployment without explicit approval.**

### Acceptance criteria

- A newcomer can tell within seconds who MJ is, what kind of training they can enquire about, where it takes place and how to contact the business.
- No visible page claims a departed coach is available or offers an unconfirmed fixed package.
- The enquiry flow receives a real request or honestly falls back to verified contact details, and never implies payment or confirmed availability.
- The existing MJ photos are used in roles suited to their quality, with no invented captions.
- The prototype is reviewable on mobile and desktop without changing the approved public site.

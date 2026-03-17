# Bydgoszcz City Game Playbook

## Purpose

Use this document as the shortcut brief for any future rebuild, redesign, or extension of the
Bydgoszcz family city game. It captures what the client consistently liked, what usually needed
fixing, and the design/UX rules that made each iteration stronger.

## Core Product Vision

- Build an English-language, family-friendly web walking game around central Bydgoszcz.
- Keep the experience warm, visual, polished, and distinctly local.
- Design for mixed ages, including children as young as four.
- Make the route feel like a real outing, not just a list of facts on a page.
- Keep everything inside the browser as much as possible instead of sending users away.

## What The Client Likes

- Strong Bydgoszcz identity rather than generic travel-app styling.
- Blue, white, and red visual language used intentionally across the interface.
- A beautiful, premium-feeling layout with personality.
- Local specificity: real landmarks, real route flow, local coffee and ice-cream picks.
- Child and adult content both present in the same experience.
- Built-in deeper facts that expand inside the app instead of relying on external links.
- More imagery, especially when it helps break long sections of text.
- A route that feels like a coherent walk through the city, not disconnected points.

## Non-Negotiables

- Everything should be in English.
- The app must open reliably from root `index.html` through `file://` in Chrome.
- Navigation must feel easy on mobile.
- The active stop must feel like the main focus immediately after navigation.
- The route atlas must feel like actual Bydgoszcz, not a generic abstract diagram.
- Final-stop imagery must be unique and specific to each place.
- Child-oriented bridges should be added whenever a stretch becomes too adult-heavy.

## Preferred Visual Direction

- Use Bydgoszcz-first branding, not generic tourism branding.
- Favor a premium editorial feel over a generic SaaS dashboard feel.
- Keep the interface airy, readable, and scenic.
- Put the active stop image high in the reading order, directly under the stop title.
- Use maps, photos, and visual dividers to break up text-heavy sections.
- Preserve a sense of place: river, mills, bridges, parks, music district, brick, water, facades.

## Navigation Lessons

- Too many navigation surfaces at once feel confusing.
- A sticky top chrome with a hamburger menu is preferred.
- Menu-based route jumps should land directly on the chosen stop, not on a parent container.
- Mobile scroll offsets must account for the sticky chrome.
- The active stop should read like a single story block from top to bottom.
- Users should not need extra clicks just to understand a stop.

## Fact Presentation Lessons

- Showing child and adult facts behind a mode switch created avoidable friction.
- The better pattern is to show both together by default.
- Keep a simple shared reading mode for the main facts.
- Use in-app expandable deep-dive panels for the more detailed material.
- The deep-dive areas should enrich the experience without replacing the main story.

## Map And Route Lessons

- The atlas should show a real map of central Bydgoszcz whenever possible.
- Overlaying route pins and path on a real map works better than a purely stylized diagram.
- The route should visually communicate the real city walk from Old Market Square to the
  Philharmonic area.
- The top map should immediately answer: "What will this walk look like in the city?"

## Stop Content Lessons

- Each stop needs a clear image that matches the actual landmark.
- Reusing one image across multiple late-route stops weakens the experience.
- The final music-district stretch needs especially careful differentiation.
- Stop 8 should use an actual Archer Lady image.
- Stop 9 should use a real Jan Kochanowski Park image.
- Stop 10 should use a real Philharmonic image.
- If a stop leans very adult, add a playful child bridge nearby.

## Child-Friendly Content Rules

- Every stop should offer at least one child-friendly angle, not just simplified history.
- Play, imitation, spotting, music, movement, and small challenges work well.
- When the route becomes culturally dense, add a reset moment for children.
- Jan Kochanowski Park should include the musical playground angle as a real child-energy bridge.
- Playgrounds, sound-making elements, and movement pauses are not side notes; they are route glue.

## Food And Pause Rules

- Pauses should feel local and intentional, not filler.
- Cafe Primo is the preferred ice-cream recommendation.
- Bromberg Coffee remains the adult coffee recommendation.
- Rother's Mills and terrace are strong midpoint pause anchors.
- Jan Kochanowski Park should include `Muzyczny Plac Zabaw` as a children-focused pause.

## Memory And Interaction Rules

- Feedback should be quick first, detailed second.
- Rating should be immediate and visible.
- Note/photo capture should stay optional and lightweight.
- Memory features should support later keepsake-making.
- Keep the tone playful and low-friction rather than form-heavy.

## Technical Lessons

- Avoid builds that depend on a dev server for basic viewing.
- Do not assume module-based output will behave well under `file://`.
- Root standalone HTML/CSS/JS is the most reliable delivery format here.
- External maps and images are acceptable, but remember they depend on internet access.
- If external media is used, document the dependency and attribution clearly.

## Research Lessons

- Research should be done headlessly rather than relying on a shared browser port.
- Prefer official Bydgoszcz tourism sources for route and city facts.
- Supplement with reliable map/community data when useful for place-level details.
- Verify child-oriented additions carefully so they feel specific, not invented.

## Common Things That Usually Need Fixing

- Navigation feels good on desktop but jumps incorrectly on mobile.
- Images are too low in the layout or not visible quickly enough.
- Too many toggles add friction.
- The atlas feels too abstract and not local enough.
- Final stops share repeated imagery.
- Late-route content becomes too adult unless a child bridge is added.
- Text blocks get too long unless broken up by imagery and clear visual sections.

## Rebuild Checklist

- Confirm the route order and pacing first.
- Make the top atlas a real Bydgoszcz map, not just a decorative route graphic.
- Put the active stop image directly under the stop name.
- Show both child and adult fact layers by default.
- Keep expandable deeper facts inside the app.
- Test hamburger navigation and stop-jump behavior on mobile logic.
- Check that each stop has distinct, correct imagery.
- Add at least one child-energy bridge in the late route.
- Verify `file://` opening in Chrome.
- Run a headless smoke test before handoff.

## Starter Prompt For Future Builds

Use or adapt this:

"Create an English-language, family-friendly Bydgoszcz city game web app that opens directly from
root `index.html` via `file://` in Chrome. Keep the design strongly Bydgoszcz-specific with blue,
white, and red branding, a premium editorial feel, real-map route atlas, and image-led stop
layout. Show child and adult facts together by default, keep deeper facts inside the app, make
mobile navigation effortless with a hamburger menu, ensure menu jumps land directly on the active
stop, use distinct stop imagery, and add child-energy bridges whenever the route becomes too
adult-heavy."

## Final Reminder

When in doubt, optimize for:

- more Bydgoszcz
- fewer unnecessary clicks
- clearer mobile navigation
- stronger imagery
- more real family rhythm

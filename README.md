# Tiny Search Fixer — CIS 376

## Tagline
**Fix tiny mobile search boxes — fewer taps, faster edits.**

---

## Purpose
This project is a UX improvement case study that redesigns the extremely small,
difficult-to-edit search boxes found in many mobile browsers and shopping apps.
Long text inside a tiny input field is frustrating to edit, especially when the
user must place the cursor precisely, correct typos, or toggle specific words.

The goal of this app is to demonstrate a **clear, measurable improvement** by
converting search terms into **tappable bubbles** and tracking the
effectiveness (clicks + time).

---

## User Story
> **As a mobile user,**  
> I want a larger, smarter search box  
> **so that** I can edit my search terms with fewer taps and less time.

---

## Problem Summary (Before)
Mobile search bars often:
- Use extremely small input boxes
- Make long phrases hard to read and edit
- Require multiple taps/long-presses to select or delete text
- Have tiny cursor targets that are difficult to use
- Hide text when it overflows the input field

These issues add **friction** and slow down simple tasks.

---

## Solution Summary (After)
This prototype improves the interface by:
- Using a full-width, tall search field
- Breaking search terms into visual **bubbles/chips**
- Allowing each bubble to be activated, deactivated, or removed with a single tap
- Providing a clear UI state without needing cursor placement
- Logging **click count** and **elapsed time** to show measurable improvement

Users can now edit long searches much faster and with lower cognitive load.

---

## Test Case (Required)
**Scenario:**  
Edit a long search phrase where the user must remove or modify multiple terms.

Examples:
- “used delica van diesel awd”
- “cheap hotel near airport free breakfast”

### **Baseline (Bad UI)**
Editing inside tiny text boxes often requires:
- long-press → drag → adjust cursor → delete → retype  
- multiple taps  
- multiple seconds to find & fix the right words  

### **Prototype (Improved UI)**
- Search terms become selectable **bubbles**
- Toggle a bubble = 1 tap  
- Delete a term = 1 tap  
- Remove the need for precise cursor placement  

---

## Metric for Success
The app records:
- Total **click count**
- Total **elapsed time** (ms → seconds)

Metrics print in the DevTools console, for example:

```text
Run 3 — 9 clicks in 11.2s (active terms: "used, delica, diesel")
```

Check the console after each run to compare click count and time.

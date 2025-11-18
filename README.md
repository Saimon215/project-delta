# Tiny Search Fixer — CIS 376

## Tagline
**Fix tiny mobile search boxes — fewer taps, faster edits.**

---

## Purpose
This project fixes a common bad design: very small mobile search bars that are hard to edit.  
My improved design turns each word into a bubble you can tap, remove, or toggle.  
This makes editing long search phrases much faster and easier.

---

## User Story
As a mobile user,  
I want a bigger and smarter search box  
so I can edit my search terms with fewer taps and less time.

---

## Before (Bad Design)
Many apps use a tiny search bar that:

- Is too small  
- Cuts off long text  
- Is hard to click in the right spot  
- Takes many taps to fix mistakes  

**Screenshot:**  
I used `bad-ux.png` to show the tiny mobile search box.

---

## After (Improved Design)
My improved design:

- Uses a big, easy-to-tap search box  
- Turns each word into a bubble  
- You can tap a bubble to activate or deactivate it  
- You can press × to delete a bubble  
- No cursor placement needed  
- Tracks clicks and time to prove improvement  

This design is faster, clearer, and easier to use.

---

## Test Case
**Scenario:** Edit a long phrase like:  
`used delica van diesel awd`

### Bad UI:
- You must long-press  
- Move cursor  
- Delete manually  
- Takes many taps  

### Improved UI:
- Tap bubble = ON/OFF  
- Click × to delete  
- Much faster  

---

## Metric for Success
The app shows:

- How many clicks you used  
- How long it took
## Metrics Outpu Example 
It prints results to the browser console like this:
--
Run 1 — 7 clicks in 6.4s (active terms: "used, delica")
Run 2 — 5 clicks in 4.9s (active terms: "diesel")


## GitHub Pages Link
`https://saimon215.github.io/project-delta/`


---

## Validation Links
https://saimon215.github.io/project-delta/

**Nu HTML Validator:**  
https://validator.w3.org/nu/?doc=https://saimon215.github.io/project-delta/

**WAVE Accessibility:**  
https://wave.webaim.org/report#/https://saimon215.github.io/project-delta/

---

## Tech Used
- HTML  
- CSS  
- JavaScript  
- ES Module (metrics.js)  
- Bootstrap 5  
- Bootstrap Icons  
- Google Fonts  


---
## Architecture
- index.html — main UI + before/after explanation  
- styles.css — custom styles for layout & bubbles  
- app.js — UI logic, bubble creation, interactions  
- metrics.js — ES module for logging metrics (with try/catch)  
- asset/ — bad UX screenshot + favicon

 ---

## Attribution
- **Author:** Saimon Hasan  
- Used Bootstrap docs and MDN for references  
- **AI Help:** ChatGPT (GPT-5.1) helped with planning, code ideas, and README writing  
- All final code was checked and edited by me
  

---
## Repo Structure
index.html
styles.css
app.js
metrics.js
README.md
asset/
   bad-ux.png
   favicon.png

---
## Bonus Items (Required to Get Bonus Points)
I completed these and closed GitHub Issues for each:

- **Text-based App (+5)**
- **Click + Time Metrics (+5)**
- **Module Export (metrics.js) (+3)**
- **try/catch around localStorage (+3)**
- **Favicon added, no 404 error (+3)**

Total bonus: **+19 points**

## How to Run
1. Open the GitHub Pages link: https://saimon215.github.io/project-delta/
2. Type a search phrase into the big input.
3. Click "Create Bubbles".
4. Tap bubbles or delete them.
5. Press "Run Search".
6. Open DevTools → Console to see click/time metrics.
   
## Final Notes
This project shows:

- UX redesign  
- Before/after improvement  
- JavaScript interactivity  
- Clean layout  
- Performance measurement  

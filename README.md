# LeetCode Old Test Case UI – Chrome Extension

Restore LeetCode's old test-case pass/fail UI (the small "dots" style) after the recent UI update.  
This lightweight content-script extension injects CSS/JS to bring back the previous visual style for easier scanning of test case results.

---

## 🔍 Overview

- **Purpose:** Restore the classic LeetCode test-case pass/fail UI so results are easier to read at a glance.  
- **Platform:** Chrome (Manifest V3) — should work in Chromium-based browsers that support MV3.  
- **Scope:** Client-side UI change only. Does **not** modify LeetCode data or interact with your account.

---

## 📸 Screenshots

> Replace the placeholders with your real images (`screenshots/old-ui.png`, `screenshots/new-ui.png`, `screenshots/extension-in-action.png`).

Old UI vs New UI:


*Old / restored look*
<br>
<img width="220" height="74" alt="after" src="https://github.com/user-attachments/assets/8509f3c5-5950-4c9c-a285-9a19c1edbc84" />
<br>
<br>

*LeetCode updated UI*
<br>
<img width="220" height="74" alt="before" src="https://github.com/user-attachments/assets/0ec1d239-505e-4391-92de-c02d800e1131" />
<br>
<br>

---

## 🚀 Quick Install (Local / Developer install)

1. **Clone this repository**
   ```bash
   git clone https://github.com/hiteshkuber/Leetcode-Old-UI-dots.git
   cd Leetcode-Old-UI-dots
   ```

2. **Open Chrome Extensions page**
  - Go to chrome://extensions/
  - Enable Developer mode (toggle, top-right)

3. Load the extension
  - Click Load unpacked
  - Select the project folder (the repository root)

4. Reload LeetCode
  - Open or refresh a LeetCode problem page — the old test-case UI should be restored.

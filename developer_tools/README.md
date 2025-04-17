# Developer Tools

## Project Badge
**Level:** Novice
**Author:** David Dias, Senior Software Engineer at HomeX
**Project Weight:** 1

---

## 📌 Description

In this project, you will explore the Developer Tools available in modern browsers to analyze and manipulate a live website:
️ **[https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/)**

The tasks require using Google Chrome DevTools to inspect elements, modify styles, understand network activity, audit performance, and explore browser storage mechanisms.

---

## 📚 Resources

- [Chrome DevTools | Tools for Web Developers](https://developer.chrome.com/docs/devtools/)
- [Introduction | Down and Dirty with Chrome Developer Tools](https://www.codecademy.com/articles/f1-u4-devtools)
- [Firefox Developer Tools | MDN](https://developer.mozilla.org/en-US/docs/Tools)
- [Dev Tips - Developer Tips by Umar Hansa](https://umaar.com/dev-tips/)
- [Get Started With Viewing And Changing CSS | Chrome DevTools](https://developer.chrome.com/docs/devtools/css/)
- [Keeping it simple with the JavaScript console - LogRocket Blog](https://blog.logrocket.com/keeping-simple-javascript-console/)
- [Inspect Network Activity - Chrome DevTools 101](https://developer.chrome.com/docs/devtools/network/)

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Explain what Developer Tools are in browsers
- Open DevTools in Chrome, Firefox, Safari, and Edge
- Use the **Elements tab** to edit HTML and CSS live
- Run **Lighthouse audits** for performance, accessibility, SEO, and best practices
- Use the **Console tab** for running JavaScript and debugging
- Extract style information and block specific network requests
- Measure JS/CSS usage and analyze file sizes and network requests
- Manipulate webpage structure visually (move/remove elements)
- Understand **service workers**, **session storage**, and **application data**
- Run custom **JavaScript snippets** directly in the browser

---

## ✅ Requirements

- You **must** use **Google Chrome (version 78.0.3904.70 or later)**.
- Screenshots can be captured using the OS screen capture tool.
- All tasks must be submitted in the correct file as per the instructions.
- A `README.md` file at the root of the project is **mandatory**.

---

## 📁 Project Structure

```
developer_tools/
├── 0-responsive_device.png
├── 1-change_bg_color.png
├── 2-pathways_menu.png
├── 3-button_styles
├── 4-new_buttons.png
├── 5-deleted_elements.png
├── 6-declaration_file
├── 7-number_of_listeners
├── 8-hsl
├── 9-max_width
├── 10-moved_around.png
├── 11-coverage
├── 12-print_version.png
├── 13-logo_dollar0
├── 14-doc_title
├── 15-hbtn_framework
├── 16-weight.png
├── 17-requests.png
├── 18-css_loaded
├── 19-images_loaded
├── 20-favicon_type
├── 21-hbtn_font_lib
├── 22-xhr_calls
├── 23-performance_audit.png
├── 24-static_assets_audit.png
├── 25-contrast_issue
├── 26-no_alt
├── 27-missing_attr
├── 28-unclear_desc.png
├── 29-how_many_colors.png
├── 30-no_css.png
├── 31-session_storage_key
├── 32-service_workers
├── 33-ssl_cert
├── 34-ssl_expiration.png
└── README.md
```

---

## 🚀 Usage Instructions

To complete and validate this project:

1. Open the website [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/) in **Google Chrome**.
2. Open **DevTools** (`F12` or `Ctrl+Shift+I` or right-click → *Inspect*).
3. Complete each task by using the correct DevTools tab: **Elements**, **Console**, **Sources**, **Network**, **Application**, **Performance**, **Lighthouse**, etc.
4. For each task:
   - Take the required screenshot OR
   - Copy the requested code/data into the required file.
5. Save each result with the correct filename in the folder `developer_tools/`.

---

## 🧠 Tips

- Use **Device Toolbar** for mobile/responsive view (top-left toggle icon in DevTools).
- Use **Styles panel** under **Elements tab** to tweak CSS properties.
- Use **Console** to test JS code or inspect `$0` (selected element).
- Use **Lighthouse** tab for automated audits.
- Use **Network** tab to inspect loaded resources and XHR calls.
- Use **Application** tab to view local/session storage, cookies, service workers.
- Use **Coverage tool** in Command Menu (`Ctrl+Shift+P → Show Coverage`) to analyze code usage.

---

## 🏁 Final Notes

- Ensure all files are correctly named and placed in the `developer_tools` directory.
- Double-check all screenshots clearly show the result asked in each task.
- Request a **manual review** when you're done with all the tasks.

---

# Developer Tools - Task Explanations

This document provides detailed explanations for each task in the Developer Tools project.

---

### 0. Responsive device
**Goal:** Use the device toolbar to emulate an iPhone X.
**Why:** To test how the site behaves on mobile devices.
**How:** Open DevTools → Toggle Device Toolbar → Choose iPhone X → Take screenshot.

---

### 1. Change the background color
**Goal:** Change the body background to `#4233bd`.
**Why:** To explore live CSS editing in the Elements tab.
**How:** Inspect `body` → Add/edit CSS property `background-color: #4233bd;` → Screenshot.

---

### 2. Force element state
**Goal:** Force hover on the “cake” block.
**Why:** To preview styles applied on hover without using the mouse.
**How:** Inspect cake element → Right-click → Force State → `:hover` → Screenshot.

---

### 3. Copy all the styles of the button
**Goal:** Extract full CSS for the “Download me!” button.
**Why:** To understand how styles cascade and are inherited.
**How:** Inspect button → Styles pane → Right-click each rule → Copy and list all properties.

---

### 4. Change button styles
**Goal:** Change `.btn-primary` and `.btn-outline-light` colors.
**Why:** To manipulate and observe class-specific styles.
**How:** Find these classes in stylesheets or override them in Elements tab → Screenshot.

---

### 5. Remove part of the website
**Goal:** Remove the “cake” block.
**Why:** To test DOM manipulation.
**How:** Inspect element → Right-click → Delete node → Screenshot.

---

### 6. Where is it coming from?
**Goal:** Find source of `margin-bottom` on `h2` ABOUT.
**Why:** To trace CSS property origins.
**How:** Inspect h2 → Computed tab → Find margin-bottom → Note file/line number.

---

### 7. How many listeners
**Goal:** Count JS click event listeners.
**Why:** To understand how JS interactivity is wired.
**How:** DevTools → Event Listeners tab → Filter by `click` or search JS files.

---

### 8. What is the HSL code
**Goal:** Convert a button's background color from hex to HSL.
**Why:** To interpret color values in different formats.
**How:** Inspect button → Styles → Convert color using DevTools or external tool.

---

### 9. The max-width of the container
**Goal:** Measure the max-width of `.container` in “About” section.
**Why:** To verify responsive layout rules.
**How:** Inspect container → Computed styles → Find `max-width` value.

---

### 10. Moving around
**Goal:** Reorder “About” and “Portfolio” sections.
**Why:** To explore reordering elements visually.
**How:** Drag and drop HTML nodes in DevTools → Screenshot.

---

### 11. Coverage
**Goal:** Check `freelancer.css` file size in bytes.
**Why:** To analyze load impact of CSS files.
**How:** DevTools → Network tab → Reload → Locate file → Size column.

---

### 12. Emulate the print version of the webpage
**Goal:** Preview the page with print CSS rules.
**Why:** To check print styles.
**How:** DevTools → Rendering tab → Emulate CSS media type: `print` → Screenshot.

---

### 13. Using the console
**Goal:** Understand what `$0` returns.
**Why:** `$0` returns the currently selected element in DevTools.
**How:** Select Avatar → Console → Type `$0` → Observe output.

---

### 14. Write code in the console
**Goal:** Get the page title via JavaScript.
**Why:** Practice using console commands.
**How:** Open Console → Type `console.log(document.title)` → Observe return.

---

### 15. Holberton web framework
**Goal:** Identify front-end framework used.
**Why:** Learn to recognize frameworks by DOM classes, structure, or file names.
**How:** Check stylesheets, elements, or layout clues.

---

### 16. Homepage weight
**Goal:** Measure total page weight.
**Why:** To assess load performance.
**How:** DevTools → Network tab → Look for “Transferred” or “Finish” values → Screenshot.

---

### 17. Number of requests
**Goal:** Count how many resources the site loads.
**Why:** To analyze page performance.
**How:** DevTools → Network → Reload → Count total requests (bottom bar).

---

### 18. Number of CSS files
**Goal:** Count loaded CSS resources.
**Why:** Understand how stylesheets are organized.
**How:** Network → Filter by CSS → Count.

---

### 19. Number of images
**Goal:** Count loaded image files.
**Why:** To review visual asset impact.
**How:** Network → Filter by IMG → Count.

---

### 20. Favicon image type
**Goal:** Identify favicon MIME type.
**Why:** Understand how browsers display favicons.
**How:** Network tab → Find `favicon.ico` → Check Type.

---

### 21. Font library
**Goal:** Identify font library used for icons.
**Why:** Fonts impact design and load times.
**How:** Inspect icon → Check class or Network requests.

---

### 22. XHR calls
**Goal:** Find resource making an XHR call.
**Why:** Learn to identify dynamic data loading.
**How:** Network → Filter XHR → Note file name.

---

### 23. Audits panel
**Goal:** Get Lighthouse performance score.
**Why:** Gauge site optimization.
**How:** DevTools → Lighthouse tab → Run audit → Screenshot.

---

### 24. Static assets
**Goal:** Find how many assets lack proper caching.
**Why:** Improper cache control slows pages.
**How:** Lighthouse audit → Screenshot.

---

### 25. Accessibility
**Goal:** Identify color contrast issue.
**Why:** Accessibility ensures usability for all.
**How:** Lighthouse audit → Look for contrast warnings.

---

### 26. No alt
**Goal:** List classes of images missing `alt` attributes.
**Why:** Alt text is essential for screen readers and SEO.
**How:** Elements tab → Search `img:not([alt])` → Note class names.

---

### 27. Best practices
**Goal:** Identify missing attributes on links with `target="_blank"`.
**Why:** `rel="noopener noreferrer"` improves security.
**How:** Inspect all such links → Check `rel` attribute.

---

### 28. SEO
**Goal:** Detect links lacking descriptive text.
**Why:** Descriptive links help users and bots understand content.
**How:** Lighthouse SEO audit → Screenshot result.

---

### 29. Sources
**Goal:** Create and run a snippet in the Sources panel.
**Why:** Snippets are useful for reusable JavaScript.
**How:** Sources → Snippets → New → Paste code → Run → Screenshot console output.

---

### 30. Block CSS files
**Goal:** Block all CSS from loading.
**Why:** Observe the effect of CSS on layout.
**How:** Network tab → Right-click each CSS → Block request → Reload → Screenshot.

---

### 31. Application panel
**Goal:** Get the session storage key.
**Why:** To view storage data managed by the app.
**How:** DevTools → Application tab → Session Storage → Expand key.

---

### 32. Service workers
**Goal:** Check for service workers.
**Why:** Service workers affect offline capabilities.
**How:** DevTools → Application tab → Service Workers section.

---

### 33. Security
**Goal:** Identify SSL certificate issuer.
**Why:** To verify HTTPS certificate authority.
**How:** Security tab → View certificate → Check issuer.

---

### 34. Expiration date
**Goal:** Find when the SSL certificate expires.
**Why:** SSL expiration can cause access errors.
**How:** Security tab → View certificate → Check expiration date → Screenshot.

---


## 👨‍💻 Author

**Stéphane Dinahet**
[GitHub Portfolio](https://github.com/SDINAHET) | [LinkedIn](https://www.linkedin.com/in/st%C3%A9phane-dinahet-3b363189/)

---

<h1 align="center">🤩 Accessibility Master</h1>
<p align="center">
  <strong>Improving Web Accessibility with HTML & CSS</strong><br>
  <em>By David Dias — Holberton School</em>
</p>

---

## 🎯 Project Description

This project is a **crash course on Web Accessibility (a11y)**.
It teaches how to build websites that are inclusive and accessible to everyone, including users relying on assistive technologies like screen readers or keyboard navigation.

> ✨ “Accessibility is not a feature.” — *Ethan Marcotte*

---

## 📚 Learning Objectives

By completing this project, you will be able to:

* Explain the purpose of **ARIA (Accessible Rich Internet Applications)**
* Understand **WCAG conformance levels**: A, AA, and AAA
* Explain the **importance of Web Accessibility**
* Use tools such as **Lighthouse**, **Axe**, and **screen readers** to test a11y

---

## 🛠️ Technologies Used

| Tool / Technology                | Purpose                         |
| -------------------------------- | ------------------------------- |
| HTML5 / CSS3                     | Page structure and styling      |
| Chrome DevTools                  | Accessibility inspection        |
| Axe DevTools                     | Detect accessibility violations |
| Lighthouse                       | Accessibility audits            |
| Screen readers (NVDA, VoiceOver) | Manual a11y testing             |

---

## 📁 Project Structure

```text
accessibility/
├── keyboard/
│   ├── 01-index.html
│   └── 01-styles.css
├── skip-links/
│   ├── 01-index.html
│   ├── 01-article.html
│   └── 01-styles.css
└── fix-a11y/
    ├── 00-index.html
    ├── 01-index.html
    ├── ...
    └── 10-index.html
```

---

## ✅ Task Checklist

| Task # | Description                                       | Points | Status |
| ------ | ------------------------------------------------- | ------ | ------ |
| 0      | Make the "works" card focus visible               | 10     | 🔲     |
| 1      | Add skip links                                    | 47     | 🔲     |
| 2      | Ensure sufficient color contrast                  | 1      | 🔲     |
| 3      | Add a meaningful `<title>`                        | 1      | 🔲     |
| 4      | Add `lang="en"` to `<html>`                       | 1      | 🔲     |
| 5      | Add `alt` attributes to images                    | 2      | 🔲     |
| 6      | Add accessible form labels and improve usability  | 8      | 🔲     |
| 7      | Ensure all links have discernible text            | 2      | 🔲     |
| 8      | Allow zooming & scaling in the viewport           | 1      | 🔲     |
| 9      | Correct heading levels and use semantic landmarks | 18     | 🔲     |
| 10     | Ensure the document has one `<main>` landmark     | 7      | 🔲     |
| 11     | Convert repeated elements into lists              | 6      | 🔲     |



---

## 🔗 Useful Resources

* [📘 WCAG Quickref Guide](https://www.w3.org/WAI/WCAG21/quickref/)
* [🎨 A11Y Style Guide](https://a11y-style-guide.com/)
* [🇬🇧 GOV.UK Accessibility Testing](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies)
* [🧠 Accessibility Myths - Color Contrast](https://www.boia.org/blog/the-myths-of-color-contrast-accessibility)
* [🛠️ Section508.gov](https://www.section508.gov/)

---

## 💬 Author’s Note

> Accessibility is about **people**, not just compliance.
> By enhancing accessibility, we build experiences that **work for everyone**, regardless of ability or technology.

---

## 📄 License

This project is part of the Holberton School curriculum.
All content is for educational use only.

> 💡 “The power of the web is in its universality. Access by everyone regardless of disability is an essential aspect.”
> — *Tim Berners-Lee*


## Task #	Title	Goal
0	make the "works" card focus visible	Improve keyboard focus visibility for .card-work titles using TAB navigation.
1	add the skip-links	Add skip links to allow keyboard users to jump to main content and navigation easily.
2	Elements must have sufficient color contrast	Improve text/background contrast to meet WCAG AA standards using tools like Axe.
3	Documents must have <title>	Ensure every HTML document has a meaningful <title> tag for screen readers and browser navigation.
4	<html> element must have a lang attribute	Add lang="en" to the <html> tag to help assistive tech determine the language.
5	Images must have alternate text	Add alt attributes to all images for screen reader support (descriptive or empty if decorative).
6	Form elements must have labels	Provide accessible form inputs using <label> elements and aria-required.
7	Links must have discernible text	Ensure links (especially icons) have text or aria-label attributes for clarity.
8	Zooming and scaling must not be disabled	Allow users to zoom by removing user-scalable=no in meta viewport.
9	Heading levels and landmarks	Fix heading hierarchy (e.g. h1 → h2 → h3) and wrap content in appropriate landmarks like <main>.
10	Document must have one main landmark	Ensure the document uses at least one <main> element and properly structured <header>, <nav>, <section>, etc.
11	More than 2 elements become list	Convert visual groupings of elements into semantic lists (<ul>, <li>) for structure and navigation clarity.





## 📌 Task Overview
| Task # | Title                                        | Goal                                                                                         |
| ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 0      | make the "works" card focus visible          | Improve keyboard focus visibility for `.card-work` titles using TAB navigation.              |
| 1      | add the skip-links                           | Add skip links to allow keyboard users to jump to main content and navigation easily.        |
| 2      | Elements must have sufficient color contrast | Improve text/background contrast to meet WCAG AA standards using tools like Axe.             |
| 3      | Documents must have `<title>`                | Ensure every HTML document has a meaningful `<title>` tag for screen readers and navigation. |
| 4      | `<html>` element must have a lang attribute  | Add `lang="en"` to the `<html>` tag to help assistive tech determine the language.           |
| 5      | Images must have alternate text              | Add `alt` attributes to all images for screen reader support (descriptive or decorative).    |
| 6      | Form elements must have labels               | Provide accessible form inputs using `<label>` elements and `aria-required`.                 |
| 7      | Links must have discernible text             | Ensure links (especially icons) have text or `aria-label` attributes for clarity.            |
| 8      | Zooming and scaling must not be disabled     | Allow users to zoom by removing `user-scalable=no` in the meta viewport.                     |
| 9      | Heading levels and landmarks                 | Fix heading hierarchy (e.g. `h1 → h2 → h3`) and use appropriate landmarks like `<main>`.     |
| 10     | Document must have one main landmark         | Ensure the document uses at least one `<main>` element and proper `<header>`, `<nav>`, etc.  |
| 11     | More than 2 elements become list             | Convert visual groupings into semantic lists (`<ul>`, `<li>`) for structure and clarity.     |

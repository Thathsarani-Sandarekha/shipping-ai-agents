# Shipping AI Agents: a visual notebook

A Head First style notebook about taking AI agents from prototype to production on AWS, Microsoft Azure and Google Cloud.
Written by Nimesha Jinarajadasa. Built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Put it online (one time)

1. Create a new repository on GitHub, for example `shipping-ai-agents`.
2. Open `astro.config.mjs` and change two lines:
   - `site: 'https://YOUR-USERNAME.github.io'`
   - `base: '/shipping-ai-agents'` (your repository name)
3. Upload this folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "First edition"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/shipping-ai-agents.git
   git push -u origin main
   ```
4. On GitHub, open **Settings > Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for the green tick (about a minute).
   Your site is now at `https://YOUR-USERNAME.github.io/shipping-ai-agents/`.

From now on, every push to `main` updates the live site automatically.

### Using your own domain

Add a file called `public/CNAME` that contains only your domain (for example `agents.example.com`),
set `site` to `https://agents.example.com` and `base` to `'/'` in `astro.config.mjs`,
then add the domain under **Settings > Pages > Custom domain** and follow GitHub's DNS steps.

## Work on it on your computer

You need Node.js 22 or newer.

```bash
npm install
npm run dev        # opens a live preview at http://localhost:4321/shipping-ai-agents/
npm run build      # makes the final site in the dist folder
```

## Where things live

| What | Where |
|---|---|
| Chapters | `src/content/chapters/*.mdx` (one file per chapter) |
| Drawings | `src/sketches/*.svg` |
| Box components (Careful!, Your turn and so on) | `src/components/` |
| Page layout, sidebar, Previous and Next | `src/layouts/Base.astro` |
| Colors, fonts, light and dark mode | `src/styles/notebook.css` and `src/styles/site.css` |
| The PDF | `public/shipping-ai-agents.pdf` |

## Edit a chapter

Open its file in `src/content/chapters/`. Normal text is Markdown: `**bold**`, `*italic*`, `## Heading`, lists and tables.
The front matter at the top sets the number, title, subtitle, the character's speech bubble and the date the facts were last checked.

## Add a new chapter

1. Copy an existing file, for example `08-what-happens-to-a-conversation.mdx`, and give it a new name such as `14-agents-talking-to-agents.mdx`.
2. Change `number`, `title`, `kicker`, `subtitle`, `question`, `part` and `quote` at the top.
3. Write the content. The sidebar, chapter list, page numbers in the URL, and Previous and Next links update by themselves.

`part` decides which group the chapter appears in on the sidebar (for example "The basics" or "Under the hood").
Use a new `part` name to start a new group.

## Use the Head First boxes

```mdx
<Careful>
**Never let users choose a session ID.** Create it on the server.
</Careful>

<Think>Guess the answer before you read on.</Think>

<YourTurn>
1. Which home would you choose? <Blank />
</YourTurn>

<NoSillyQuestions>
<QA q="Is a session the same as being logged in?">
No. Logging in proves who you are. A session is one conversation.
</QA>
</NoSillyQuestions>

<Sticky color="blue" tilt="right">A short note in handwriting.</Sticky>

<Columns>
<div>

Left column

</div>
<div>

Right column

</div>
</Columns>

<Sketch name="ch08-1" caption="The caption under the drawing." />

<Takeaways>

- First point
- Second point

</Takeaways>
```

Leave an empty line after an opening tag and before a closing tag when the inside has Markdown (lists, bold text and so on).

## Add a drawing

Draw it as an SVG (by hand in a tool such as Excalidraw, Figma or Inkscape, or in code), save it in `src/sketches/`,
and show it with `<Sketch name="file-name-without-.svg" />`.
To match the notebook look, use these text classes inside the SVG: `h` (blue handwriting), `hb` (bold handwriting), `hk` (black handwriting).

## Keep it accurate

Cloud services change often. Each chapter has a `lastChecked` date in its front matter, shown at the bottom of the page.
Re-check the facts and the commands in chapter 12 every few months, then update the date.

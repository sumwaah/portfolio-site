# Sumier Phalake — Portfolio Site

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output goes to `dist/` folder.

---

## Deploying to Cloudflare Pages

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `portfolio`)
2. In your terminal:
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. Select **Pages** → **Connect to Git**
3. Authorize Cloudflare to access your GitHub
4. Select your `portfolio` repository
5. Configure build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**

Your site will be live at `your-project.pages.dev` in a few minutes.

### Step 3: Add Password Protection with Cloudflare Access

1. In the Cloudflare Dashboard, go to **Zero Trust** (left sidebar)
   - If first time, you'll need to set up a Cloudflare Zero Trust account (free tier is sufficient)
2. Go to **Access** → **Applications** → **Add an application**
3. Select **Self-hosted**
4. Configure:
   - **Application name:** Portfolio
   - **Session duration:** 24 hours (or your preference)
   - **Application domain:** `your-project.pages.dev` (or your custom domain)
5. Add a policy:
   - **Policy name:** Password access
   - **Action:** Allow
   - **Include rule:** Select "Emails" and add the email addresses of people you want to grant access
   - OR select "Everyone" and use a **Service Auth** one-time PIN method
6. For simple password protection:
   - Under **Authentication**, you can configure a one-time PIN that gets sent to allowed email addresses
   - OR use the **Login methods** to add a simple identity provider

#### Simpler Alternative: Cloudflare Access with One-Time PIN
The easiest setup is:
1. Set the policy to allow **Emails ending in** specific domains (e.g., `@gmail.com`) or list specific emails
2. When someone visits your site, they enter their email
3. Cloudflare sends them a one-time PIN
4. They enter the PIN and get access for the session duration

This way you control exactly who can view your portfolio by managing the email list.

### Step 4: Custom Domain (Optional)

1. In Cloudflare Pages project settings → **Custom domains**
2. Add your domain (e.g., `sumier.design`)
3. Follow the DNS configuration instructions

---

## Editing Content

All page content lives in `src/pages/`. Open any file in VS Code to edit text.

### File → Page mapping:
| File | Page | URL |
|------|------|-----|
| `Home.jsx` | Homepage | `/` |
| `CsGemini.jsx` | Gemini India case study | `/strategic-design/gemini-india` |
| `CsSearch.jsx` | Search/DMA case study | `/strategic-design/search-regulation` |
| `CsEcosystem.jsx` | iOS Ecosystem case study | `/strategic-design/ecosystem` |
| `CsFiles.jsx` | Files by Google case study | `/strategic-design/files` |
| `CsStation.jsx` | Google Station case study | `/strategic-design/station` |
| `Leadership.jsx` | Design Leadership chapter | `/leadership` |
| `Foundation.jsx` | How I Think (Foundation) | `/foundation` |

### Tips for editing:
- **Text** is plain English inside JSX tags — just find and change it
- **Be careful with** quotes (`"` and `'`), curly braces (`{` and `}`), and angle brackets (`<` and `>`)
- **Use VS Code's search** (Cmd+Shift+F) to find text across all files
- **If something breaks**, undo with Cmd+Z and look for a missing character
- **After editing**, push to GitHub and Cloudflare auto-deploys:
  ```bash
  git add .
  git commit -m "Update content"
  git push
  ```

---

## Project Structure

```
portfolio-site/
├── index.html          # Entry point (fonts, base styles)
├── package.json        # Dependencies
├── vite.config.js      # Build config
├── public/
│   └── _redirects      # SPA routing for Cloudflare
└── src/
    ├── main.jsx        # Router setup
    └── pages/          # All page components
        ├── Home.jsx
        ├── CsGemini.jsx
        ├── CsSearch.jsx
        ├── CsEcosystem.jsx
        ├── CsFiles.jsx
        ├── CsStation.jsx
        ├── Leadership.jsx
        └── Foundation.jsx
```

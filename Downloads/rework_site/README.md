# Hack Club Rework Website

A SvelteKit website for Hack Club's Rework program - where students get $75 + free filament to mod their 3D printers.

## Features

- Clean, hacker-aesthetic design with orange accents
- FAQ section with G-code themed headers
- Example mods gallery that pulls from GitHub
- Individual mod detail pages

## Running Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Adding Mods

Mods are loaded from a GitHub repository. To set this up:

1. Create a GitHub repo for your mods
2. Add a `mods.json` file to the root with this structure:

```json
{
  "mods": [
    {
      "id": "unique-mod-id",
      "title": "Mod Title",
      "author": "github_username",
      "printer": "Printer Model",
      "description": "Description of what you built and how it works.",
      "cost": "$XX",
      "image": "https://url-to-image.jpg"
    }
  ]
}
```

3. Update `GITHUB_MODS_URL` in `src/lib/mods-data.js` to point to your repo:

```javascript
export const GITHUB_MODS_URL = 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/mods.json';
```

### Mod Schema

Each mod needs:
- **id**: Unique identifier (used in URL, lowercase-with-dashes)
- **title**: Name of your mod
- **author**: Your name/username
- **printer**: What printer you modded
- **description**: What you built and how
- **cost**: Total cost (e.g., "$45")
- **image**: URL to an image (or `null` for placeholder)

### Contributing Mods

To add your mod:
1. Fork the mods repository
2. Add your entry to `mods.json`
3. Submit a pull request

## Deployment

Build for production:

```bash
npm run build
npm run preview
```

Deploy to Vercel, Netlify, or your platform of choice.

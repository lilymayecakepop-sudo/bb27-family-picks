# Big Brother 27 - Family Picks Website

A simple website to track family predictions for Big Brother 27 contestants.

## Setup

### Option 1: Direct Image Links (Recommended)
1. Visit one of these sites with CBS Big Brother 27 photos:
   - https://www.goldderby.com/gallery/big-brother-27-cast/
   - https://variety.com/gallery/big-brother-27-cast-photos/
   - https://www.cosmopolitan.com/entertainment/tv/g65338511/big-brother-season-27-cast-eliminations/

2. For each contestant, right-click their photo and "Copy image address"

3. Edit `script.js` and replace the URLs in the `imageUrls` object:
   ```javascript
   const imageUrls = {
       "vince": "https://actual-image-url.jpg", // Paste the copied URL here
       "morgan": "https://actual-image-url.jpg",
       // ... etc
   };
   ```

4. Open `index.html` in your web browser

### Option 2: Local Images (Alternative)
If you prefer to download images locally, save them in the `images/` folder with these exact names:
`vince.jpg`, `morgan.jpg`, `adrian.jpg`, `jimmy.jpg`, `keanu.jpg`, `lauren.jpg`, `ashley.jpg`, `ava.jpg`, `riley.jpg`, `katherine.jpg`, `will.jpg`

## Family Picks

- **Dad**: Vince, Morgan, Adrian
- **Mom**: Jimmy, Keanu, Lauren
- **Emma**: Ashley, Ava
- **Lily**: Riley, Katherine, Will

## Updating Eliminations

When a contestant is eliminated:

1. Open browser developer console (F12)
2. Type: `addElimination("name")` (replace "name" with contestant)
3. Red X will appear over their photo

Or edit `script.js` and add the name to the `eliminated` array:
```javascript
const eliminated = ["vince", "ashley"]; // Add eliminated contestants here
```

## Files

- `index.html` - Main page
- `styles.css` - All styling
- `script.js` - Data and logic
- `images/` - Contestant photos
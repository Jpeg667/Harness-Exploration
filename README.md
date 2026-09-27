# Harness-Exploration
Having Claude design build a  detailed presentation of how harnesses work. Then maybe dipping my toes into building or forking my own.

## Running the deck

The deck lives in `deck/`. It loads its JS/CSS with relative paths, so serve the folder over HTTP rather than double-clicking the file:

```bash
cd deck
python3 -m http.server 8000
# then open http://localhost:8000/AI%20Harness%20Deep-Dive.dc.html
```

Needs internet access: React is loaded from unpkg.com and fonts from Google Fonts.
Arrow keys move between slides; `R` resets stepped animations.

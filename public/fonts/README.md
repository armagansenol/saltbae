# Local Fonts Directory

Place your local font files in this directory with the following structure:

```
public/fonts/
├── YourFontName/
│   ├── YourFontName-Regular.woff2
│   ├── YourFontName-Bold.woff2
│   ├── YourFontName-Light.woff2
│   └── YourFontName-Medium.woff2
└── AnotherFont/
    ├── AnotherFont-Regular.woff2
    └── AnotherFont-Bold.woff2
```

## Supported Font Formats (in order of preference):

1. `.woff2` - Best compression and support
2. `.woff` - Good fallback
3. `.ttf` - Larger file size but widely supported
4. `.otf` - OpenType format

## Font Weight Values:

- Thin: 100
- Light: 300
- Regular: 400
- Medium: 500
- Bold: 700
- Black: 900

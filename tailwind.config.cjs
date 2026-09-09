/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline": "#6e7881",
        "surface-mist": "rgba(255, 255, 255, 0.7)",
        "on-primary": "#ffffff",
        "surface-dim": "#dadada",
        "primary": "#00658d",
        "on-secondary-fixed": "#380c00",
        "secondary-fixed-dim": "#ffb59c",
        "surface-bright": "#f9f9f9",
        "on-surface": "#1a1c1c",
        "on-primary-fixed-variant": "#004c6b",
        "deep-ocean": "#004560",
        "inverse-primary": "#82cfff",
        "on-secondary-container": "#6b1f00",
        "on-error": "#ffffff",
        "tertiary": "#705d00",
        "surface": "#f9f9f9",
        "on-tertiary-fixed": "#221b00",
        "tertiary-fixed": "#ffe16d",
        "surface-container-high": "#e8e8e8",
        "surface-container-low": "#f3f3f4",
        "on-tertiary-container": "#453800",
        "inverse-on-surface": "#f0f1f1",
        "on-secondary": "#ffffff",
        "primary-fixed": "#c6e7ff",
        "surface-tint": "#00658d",
        "surface-container": "#eeeeee",
        "on-tertiary-fixed-variant": "#544600",
        "inverse-surface": "#2f3131",
        "on-primary-fixed": "#001e2d",
        "ink-black": "#111111",
        "secondary-container": "#fe7e4f",
        "primary-container": "#00aeef",
        "on-surface-variant": "#3e4850",
        "secondary": "#a43c12",
        "on-background": "#1a1c1c",
        "error": "#ba1a1a",
        "surface-variant": "#e2e2e2",
        "tertiary-fixed-dim": "#e9c400",
        "background": "#f9f9f9",
        "surface-container-highest": "#e2e2e2",
        "on-error-container": "#93000a",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#82cfff",
        "outline-variant": "#bdc8d1",
        "error-container": "#ffdad6",
        "on-primary-container": "#003e58",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#822800",
        "tertiary-container": "#bfa100",
        "secondary-fixed": "#ffdbcf"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "section-gap-mobile": "64px",
        "section-gap-desktop": "120px",
        "gutter": "24px",
        "base": "8px",
        "container-max": "1280px"
      },
      fontFamily: {
        "body-lg": ["Noto Sans"],
        "body-md": ["Noto Sans"],
        "headline-md": ["Montserrat"],
        "label-sm": ["Inter"],
        "display-lg-mobile": ["Montserrat"],
        "display-lg": ["Montserrat"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "display-lg-mobile": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out forwards',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

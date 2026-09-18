# Project Overview

## Summary
`min-portfolio` is a minimal, responsive portfolio website for a fullstack developer seeking opportunities (Soker LIA / Mid-level / Junior role starting January 2027). The site showcases skills in Javascript, TypeScript, PHP, React, Node, Next, React Native, SQL, and modern CSS.

## Key Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | ^19.2.6 | UI Framework (uses `createRoot` API) |
| [TypeScript](https://typescript.org/) | ~6.0.2 | Type Safety & Compilation |
| [Vite](https://vite.dev/) | ^8.0.12 | Fast ESM Bundler / Dev Server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.3.0 | Utility-first CSS Framework |
| [framer-motion](https://framer-motion.com/) | ^12.38.0 | Lightweight Animations |
| [lucide-react](https://lucide.dev/) | ^1.14.0 | Icon Library (SVG icons) |

## High-Level Architecture
- **Single-Pattern SPA**: All sections are composed in `App.tsx` and rendered as a single root component tree.
- **Section-Based Layout**: Independent section components (`Hero`, `Portfolio`, `About`, `Contact`) for modularity.
- **Utility-first Styling**: Tailwind CSS classes handle all visual styling with no separate CSS files (except `index.css`).
- **Animated Components**: framer-motion powers scroll-triggered animations on the Hero section and other elements.

---

# Getting Started

## Prerequisites
1. [Node.js](https://nodejs.org/) v20+ required
2. [npm](https://npm.com/) v9+ installed
3. A web browser (Chrome, Firefox, Safari, Edge) for previewing the site

## Installation
```bash
# Install all dependencies
npm install

# Start the development server
npm run dev
```

## Basic Usage
1. Run `npm run dev` to start Vite's development server
2. Open the browser at the URL printed in the terminal (typically `http://localhost:5430`)
3. Press **Ctrl+Shift+F** for DevTools and enable React StrictMode logging
4. Navigate sections using anchor links or by scrolling

## Running Other Scripts
| Script | Command | Description |
|--------|---------|-------------|
| Build | `npm run build` | Runs TypeScript build + Vite production bundle |
| Lint | `npm run lint` | Runs ESLint over the entire codebase |
| Preview | `npm run preview` | Opens a static preview of the built files |

---

# Project Structure

```
/
├── .continue/rules/          # Continue documentation (this file)
│   └── CONTINUE.md
├── public/assets/            # Public assets (logos, images)
├── src/
│   ├── App.tsx               # Main application component (composes sections)
│   ├── main.tsx             # Entry point (createRoot + StrictMode)
│   ├── index.css             # Global styles / Tailwind directives
│   └── components/
│       ├── Navbar.tsx        # Sticky/fixed navigation bar
│       ├── Footer.tsx        # Site footer with links and copyright
│       ├── sections/
│         │   ├── Hero.tsx    # Hero section (animated intro)
│         │   ├── Portfolio.tsx  # Projects/projects showcase
│         │   ├── About.tsx   # About / bio section
│         │   └── Contact.tsx # Contact info + newsletter/form
├── vite.config.ts           # Vite configuration (plugins, config)
├── tsconfig.json            # Root TypeScript config (extends app/node configs)
├── tsconfig.app.json         # App-specific TS compiler options
├── tsconfig.node.json        # Node.js script TS config
├── eslint.config.js          # ESLint configuration
├── package.json             # Dependencies & scripts
└── README.md               # Project template documentation
```

## Key Files

### `src/App.tsx`
The main component that composes the entire page:
```tsx
export default function App() {
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen relative">
      {/* Fade-to-black overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,var(--fade-opacity))))' } />
      
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
```

### `src/components/sections/Hero.tsx`
Example of the animation pattern used in sections:
- Defines `containerVariants` and `itemVariants` for staggered fade-in
- Wraps content in `<motion.div>` with `initial="hidden"` and `animate="visible"`
- Each child element gets its own variant to animate independently

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### `tsconfig.app.json`
Key compiler options for the app:
- `"target": "es2023"` — Modern ES2023 features
- `"moduleResolution": "bundler"` — Bundler-style module resolution
- `"allowImportingTsExtensions": true` — Allows importing `.tsx` files directly
- `"noUnusedLocals": true` / `"noUnusedParameters": true` — Strict unused checks

---

# Development Workflow

## Coding Standards
1. **TypeScript Strict**: All variables, function arguments, and return values must be typed.
2. **ESM Imports Only**: Use `import` statements (not `require`).
3. **Component Files**: Each component is in a single `.tsx` file with a default export.
4. **No Emojis in Code Comments**: Keep comments concise and professional.
5. **English in All Code**: Comments, variables, and documentation should be in English.

## Testing Approach
- **Manual/Integration**: No dedicated testing framework is currently configured. Tests are run manually via the dev server or by manual verification.
- **Linting**: ESLint ensures code quality and adherence to best practices.
  - Run `npm run lint` for a full check.
  - The ESLint config uses `typescript-eslint` with recommended rules.

## Build & Deployment Process
1. **Development**: Run `npm run dev` (Vite HMR + live update)
2. **Build**: Run `npm run build` which executes:
   - `tsc -b` — TypeScript compilation/bundling check
   - `vite build` — Vite bundles the app into optimized, minified output in `/dist`
3. **Deploy**: The `/dist` folder is static and can be deployed to any web server (NetFix, Vercir, GCP, etc.)

## Contribution Guidelines
1. Write a clear commit message explaining your change.
2. Ensure all code passes `npm run lint`.
3. Test manually in the browser before committing.
4. Keep commits atomic — one logical change at a time.

---

# Key Concepts

## React 19 Patterns Used
- **`createRoot`**: The new API replacing `ReactDOM.render`, defined in `react-dom/client`.
- **`StrictMode` wrapper**: Enables double-rendering for debugging and strict prop checking.
- **Fragment** (`<></>`): Non-root elements that don't render anything but maintain DOM structure.

## Tailwind CSS v4
- Uses the new `@tailwindcss/vite` plugin (no longer requires PostCSS configuration).
- Utility classes are available via `className` attributes.
- Custom design tokens are defined in `index.css`.

## framer-motion Animation System
- **Variants**: Objects describing start and end states of an animation.
- **`initial` prop**: Sets the initial variant to apply.
- **`animate` prop**: Transitions from/to a specified variant.
- **`staggerChildren`**: Animates children with staggered timing.

## Lucide React Icons
- Tree-bropped SVG icons imported as components: `import { ArrowRight } from 'lucide-react'`.
- Size prop for responsive sizing: `<ArrowRight size={20} />`.

---

# Common Tasks

## Add a New Section Component
1. Create a new file, e.g., `src/components/sections/[SectionName].tsx`
2. Export a default function component with appropriate semantic tags (`<section>`, `<h2>` etc.)
3. Add Tailwind classes for responsive layout and spacing
4. Optionally add framer-motion animations using the same pattern as existing sections
5. Import and place it in `src/App.tsx` at the desired location

## Update Color Theme
1. Edit `src/index.css` to adjust CSS custom variables (e.g., `--fade-opacity`)
2. Replace Tailwind utility classes with new color tokens if needed
3. Ensure contrast/accessibility requirements are met for WCAG compliance

## Add a New Dependency
1. Run `npm install <package-name>`
2. Update `vite.config.ts` only if the package requires a Vite plugin
3. Update TypeScript types: add to `tsconfig.app.json` or create a separate types file
4. Commit with a clear message explaining why the dependency was added

## Configure ESLint for Production
Refer to [README.md](./README.md) for instructions on enabling type-aware lint rules and adding `eslint-plugin-react-x` / `eslint-plugin-react-dom`.

---

# Troubleshooting

| Issue | Solution |
|-------|-----------|
| **Vite not starting** | Run `npm install` first, then restart. If persists: delete `node_modules`, clear cache (`rm -rf .cache/`), reinstall. |
| **"Module not resolved"** | Ensure the file is within the correct directory and use relative imports with `../` or `./`. |
| **Tailwind classes missing** | Verify that Tailwind CSS directives are in `index.css`: `@tailwindcss { ... }` (v4 syntax). |
| **Type errors on function calls** | Ensure TypeScript is configured correctly. Reset via `npx tsc --force` if needed. |
| **Build fails with TS errors** | Run `npm run build` in the terminal to see full error output. Fix all reported errors before committing. |
| **Slow builds** | Install [React Compiler](https://react.dev/learn/react-compiler/installation) as noted in README.md for improved performance. |

---

# References

- [Vite Documentation](https://vite.dev/docs/)
- [Tailwind CSS v4 Guide](https://tailwindcss.com/v4)
- [React 19 Docs](https://react.dev/reference/api/create-root)
- [framer-motion API](https://framer-motion.com/api/)
- [TypeScript Configuration Guide](https://typescript.org/docs/configuration/)

---

## Notes for Future Maintenance
- Consider adding a testing framework (Vitest, Jest) when the project grows beyond component showcase.
- The `README.md` contains advanced ESLint configuration options that may be useful at scale.
- All sections are currently hardcoded in `App.tsx`. A data-driven CMS or dynamic section loading would simplify long-term maintenance.


# Project Worklog

---
## Task ID: 1 - Split Screen Navigation Rewrite
### Work Task
Completely rewrite the navigation logic for the Michele Faccoli portfolio website, implementing a split-screen layout with animated panels for "Agenzie" and "Aziende" content paths.

### Work Summary
Successfully implemented the new navigation system with the following components:

1. **Store Updates (`src/store/useStore.ts`)**:
   - Changed `PathType` from `null | 'agenzie' | 'aziende'` to just `'agenzie' | 'aziende'` (defaults to 'agenzie')
   - Added `togglePath()` function for switching between paths
   - Added `expandedWidth` and `collapsedWidth` configurations (85%/15% desktop, 90%/10% mobile)
   - Added scroll position tracking for each section

2. **SplitScreenLayout Component (`src/components/layout/SplitScreenLayout.tsx`)**:
   - Created two-column animated layout using Framer Motion
   - Panels expand/collapse with smooth 0.6s cubic-bezier easing
   - Collapsed panels show as sidebars with vertical text
   - Click on collapsed sidebar swaps the layout (no X button needed)
   - Responsive design with different widths for mobile/desktop

3. **AgencyView Component (`src/components/views/AgencyView.tsx`)**:
   - Technical focus content for agencies
   - Four sections: Digitalizzazione, Portfolio Tecnico, Workflow, Concretizzazione
   - Cyan color theme (#00d4ff)
   - Portfolio shows wireframe specs, polycount, texture resolution
   - 6 mock technical projects with Blender, ZBrush, Three.js tags

4. **BusinessView Component (`src/components/views/BusinessView.tsx`)**:
   - Business/marketing focus content for companies
   - Four sections: Digitalizzazione, Portfolio Marketing, Concretizzazione, Workflow
   - Orange/Green color theme (#ff6b35 / #39ff14)
   - Portfolio shows client deliverables, marketing visuals
   - 6 mock marketing projects with social media, video content
   - Highlights Creality K2 3D printer for prototyping

5. **ParticleField Update (`src/components/three/ParticleField.tsx`)**:
   - Now accepts `activePath` prop for dynamic color changes
   - Smooth 800ms color transition between Cyan and Orange
   - Particles change color based on selected path

6. **Header Update (`src/components/layout/Header.tsx`)**:
   - Added path switcher buttons for Agenzie/Aziende
   - Logo color changes based on active path
   - Animated active state indicators with layoutId
   - Mobile menu includes path selection

7. **CSS Updates (`src/app/globals.css`)**:
   - Added vertical text classes for sidebar
   - Added path-specific color utilities
   - Added glow effects for each path theme
   - Added smooth transition utilities

8. **Page Integration (`src/app/page.tsx`)**:
   - Simplified to use SplitScreenLayout
   - Header and Footer surround the main content
   - ParticleField background responds to path changes

All code passes ESLint validation. The application compiles and runs successfully.

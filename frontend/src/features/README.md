Features folder - Add domain specific feature modules here.

Recommended structure:

src/features/[featureName]/
  ├─ components/
  ├─ hooks/
  ├─ services/
  ├─ pages/
  └─ types.ts

Each feature should export a public module index for integration into the main router.

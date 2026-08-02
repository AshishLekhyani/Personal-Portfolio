// Snapshot of public GitHub repo data, not a live build-time fetch — a
// network call during SSG turned out to crash the Windows build (Node/undici
// leaves a dangling handle that trips a libuv assertion after the build
// otherwise completes successfully, corrupting the exit code Vercel checks).
// Same tradeoff vaibhavacharya.com's own site makes for its activity graph:
// refresh by hand occasionally rather than fetch on every deploy.
//
// Regenerate with:
//   curl -s "https://api.github.com/users/AshishLekhyani/repos?per_page=100"
// then recompute mostRecentPush (latest pushed_at, non-fork) and languages
// (share of non-fork repos by primary language).

export const mostRecentPush = '2026-08-01T14:09:17Z';

export const languages = [
  { name: 'TypeScript', pct: 45 },
  { name: 'JavaScript', pct: 36 },
  { name: 'HTML', pct: 19 },
];

// Builds a link that works both locally and on GitHub Pages (where the site lives in a sub-folder).
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (base + '/' + path.replace(/^\//, '')).replace(/\/{2,}/g, '/');
}

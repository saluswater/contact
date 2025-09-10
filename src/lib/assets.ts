/**
 * Utility function to get asset paths with proper basePath handling
 * for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/salus-new-lps' : '';
  return `${basePath}${path}`;
}
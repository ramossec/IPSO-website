/**
 * Prefixa um caminho relativo de asset com o base path do Vite.
 * Em dev:   asset("images/logo.png") → "/images/logo.png"
 * No Pages: asset("images/logo.png") → "/ipso-site/images/logo.png"
 *
 * Imports remotos (https://...) são devolvidos intactos.
 */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : import.meta.env.BASE_URL + "/";
  return base + path.replace(/^\/+/, "");
}
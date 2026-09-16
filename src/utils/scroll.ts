/** Faz scroll suave até um elemento pela id. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
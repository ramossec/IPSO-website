import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// A base vem do output "base_path" do actions/configure-pages:
// - sem domínio customizado: "/nome-do-repositorio/"
// - com domínio customizado: "/" (raiz)
const baseOverride = process.env.BASE_URL_OVERRIDE;
const base = baseOverride
  ? baseOverride.endsWith("/")
    ? baseOverride
    : `${baseOverride}/`
  : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
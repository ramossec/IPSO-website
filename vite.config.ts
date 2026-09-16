import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// No GitHub Pages (repo do usuário), o site fica sob /nome-do-repositorio/.
// O workflow de deploy injeta BASE_URL_OVERRIDE com o nome real do repositório.
export default defineConfig({
  base: process.env.BASE_URL_OVERRIDE || "/",
  plugins: [react(), tailwindcss()],
});
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import ESocial from "./pages/ESocial";
import Blog from "./pages/Blog";
import ClienteArea from "./pages/ClienteArea";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (!redirect) return;
    sessionStorage.removeItem("redirect");

    // Remove o prefixo do repositório (ex: "/ipso-site/blog" → "/blog").
    const base = import.meta.env.BASE_URL;
    const path = redirect.startsWith(base)
      ? redirect.slice(base.length - 1)
      : redirect;
    navigate(path.replace(/\/{2,}/g, "/") || "/", { replace: true });
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <RedirectHandler />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/esocial" element={<ESocial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/area-do-cliente" element={<ClienteArea />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
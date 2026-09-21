import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../data/site";
import { asset } from "../utils/asset";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Quem Somos", to: "/#sobre" },
  { label: "Serviços", to: "/#servicos" },
  { label: "eSocial", to: "/esocial" },
  { label: "Contato", to: "/#contato" },
  { label: "Blog", to: "/blog" },
];

const isAnchor = (to: string) => to.startsWith("/#");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-ipso-teal-light" : "text-white/85 hover:text-ipso-teal-light"
    }`;

  const mobileItemClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-white/10 text-ipso-teal-light"
        : "text-white/85 hover:bg-white/5 hover:text-ipso-teal-light"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ipso-dark/95 shadow-lg backdrop-blur"
          : "bg-gradient-to-b from-ipso-dark/90 to-transparent"
      }`}
    >
      <div className="container-ipso flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={asset("images/logo.png")}
            alt="IPSO"
            className="h-14 w-auto drop-shadow"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            isAnchor(link.to) ? (
              // Âncoras da Home não têm estado "ativo" (NavLink compara só o pathname).
              <Link
                key={link.label}
                to="/"
                className={navItemClass({ isActive: false })}
                state={{ scrollTo: link.to.slice(2) }}
              >
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.label} to={link.to} className={navItemClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            )
          )}
          <a
            href={siteConfig.areaCliente}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-ipso-teal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ipso-teal-light"
          >
            Área do cliente
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ipso-dark/95 backdrop-blur lg:hidden">
          <nav className="container-ipso flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              isAnchor(link.to) ? (
                <Link
                  key={link.label}
                  to="/"
                  state={{ scrollTo: link.to.slice(2) }}
                  className={mobileItemClass({ isActive: false })}
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={mobileItemClass}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <a
              href={siteConfig.areaCliente}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-md bg-ipso-teal px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Área do cliente
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
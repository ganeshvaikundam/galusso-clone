import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import LoginModal from "@/components/modals/LoginModal";

type MenuItem = { label: string; to?: string; children?: { label: string; to: string }[] };

const menus: MenuItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Products",
    children: [
      { label: "WordPress Themes", to: "/wordpress-themes" },
      { label: "Joomla Templates", to: "/joomla-templates" },
    ],
  },
  {
    label: "Memberships",
    children: [
      { label: "WordPress Club", to: "/membership" },
      { label: "Joomla! Club", to: "/membership" },
    ],
  },
  {
    label: "Help",
    children: [
      { label: "FAQs", to: "/faqs" },
      { label: "Quick Guides", to: "/faqs" },
      { label: "Documentation", to: "/faqs" },
      { label: "Contact", to: "/contact" },
      { label: "Ticket Support", to: "/contact" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "WordPress", to: "/blog" },
      { label: "Elementor", to: "/blog" },
      { label: "WooCommerce", to: "/blog" },
    ],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpenMobile(false), [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-[hsl(var(--navy))] text-white transition-shadow ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[hsl(var(--orange))] text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Galusso<span className="text-[hsl(var(--orange))]">Themes</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {menus.map((m) =>
              m.children ? (
                <div key={m.label} className="group relative">
                  <button className="nav-link inline-flex items-center gap-1 px-3 py-2">
                    {m.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <div className="invisible absolute left-0 top-full min-w-[220px] translate-y-1 rounded-md border border-white/10 bg-[hsl(var(--navy))] py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {m.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="block px-4 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-[hsl(var(--orange))]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={m.label}
                  to={m.to!}
                  end
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 ${isActive ? "text-[hsl(var(--orange))]" : ""}`
                  }
                >
                  {m.label}
                </NavLink>
              )
            )}
            <button
              onClick={() => setOpenLogin(true)}
              className="ml-2 inline-flex items-center rounded-md bg-[hsl(var(--orange))] px-4 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--orange-hover))]"
            >
              Customer Login
            </button>
          </nav>

          <button
            className="lg:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setOpenMobile((s) => !s)}
          >
            {openMobile ? <X /> : <Menu />}
          </button>
        </div>

        {openMobile && (
          <div className="lg:hidden border-t border-white/10 bg-[hsl(var(--navy))] pb-4">
            <div className="container-page flex flex-col gap-1 pt-2">
              {menus.map((m) => (
                <div key={m.label} className="py-1">
                  {m.to ? (
                    <Link to={m.to} className="nav-link block py-2">
                      {m.label}
                    </Link>
                  ) : (
                    <details>
                      <summary className="nav-link cursor-pointer list-none py-2 flex items-center justify-between">
                        {m.label} <ChevronDown className="h-4 w-4" />
                      </summary>
                      <div className="pl-3">
                        {m.children?.map((c) => (
                          <Link key={c.label} to={c.to} className="block py-1.5 text-sm text-white/80">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
              <button
                onClick={() => setOpenLogin(true)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[hsl(var(--orange))] px-4 py-2 text-sm font-semibold text-white"
              >
                Customer Login
              </button>
            </div>
          </div>
        )}
      </header>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
};

export default Header;

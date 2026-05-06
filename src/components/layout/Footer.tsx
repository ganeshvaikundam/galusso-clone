import { Link } from "react-router-dom";
import { Twitter, Facebook } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[hsl(var(--navy))] text-white/80 mt-20">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-white font-semibold mb-4">Galussothemes</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Term of Use", "Privacy Policy", "Contact", "Partners", "Blog", "Refund"].map((l) => (
              <li key={l}><Link to="/contact" className="hover:text-[hsl(var(--orange))]">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">WordPress Themes</h4>
          <ul className="space-y-2 text-sm">
            {["Blogging", "Business", "Portfolio", "E-commerce", "Magazine"].map((l) => (
              <li key={l}><Link to="/wordpress-themes" className="hover:text-[hsl(var(--orange))]">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Joomla Templates</h4>
          <ul className="space-y-2 text-sm">
            {["Business", "Portfolio", "News", "Blog"].map((l) => (
              <li key={l}><Link to="/joomla-templates" className="hover:text-[hsl(var(--orange))]">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-3 mb-5">
            <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-md bg-white/10 hover:bg-[hsl(var(--orange))] grid place-items-center transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-md bg-white/10 hover:bg-[hsl(var(--orange))] grid place-items-center transition-colors"><Facebook className="h-4 w-4" /></a>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
            className="flex flex-col gap-2"
          >
            <label htmlFor="newsletter" className="text-xs text-white/70">Newsletter</label>
            <div className="flex gap-2">
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-md bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--orange))]"
              />
              <button className="rounded-md bg-[hsl(var(--orange))] px-3 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--orange-hover))]">
                Subscribe
              </button>
            </div>
            {subscribed && <p className="text-xs text-[hsl(var(--orange))]">Thanks for subscribing!</p>}
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2024 GalussoThemes. All rights reserved.</p>
          <p>Built with care for WordPress & Joomla creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

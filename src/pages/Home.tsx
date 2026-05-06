import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Smartphone, Palette, Zap, Globe, Wrench, ShoppingCart, Clock, Briefcase, Star, ChevronLeft, ChevronRight
} from "lucide-react";
import { testimonials } from "@/data/site";

const features = [
  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first designed for all devices." },
  { icon: Palette, title: "Theme Customizer", desc: "Flexible controls for layout & colors." },
  { icon: Zap, title: "Performance & SEO", desc: "Optimized code for speed and SEO." },
  { icon: Globe, title: "Translation Ready", desc: "Compatible with Loco and WPML." },
  { icon: Wrench, title: "Elementor", desc: "#1 page builder for 100% visual design." },
  { icon: ShoppingCart, title: "WooCommerce", desc: "Sell anything with WooCommerce." },
  { icon: Clock, title: "24/7 Support", desc: "Fast and dedicated ticket system." },
  { icon: Briefcase, title: "Custom Work", desc: "Custom development service available." },
];

const Home = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#f0a500" d="M0,160 C320,260 720,60 1440,200 L1440,320 L0,320 Z"/>
          </svg>
        </div>
        <div className="container-page relative py-20 lg:py-28 max-w-3xl">
          <p className="text-[hsl(var(--orange))] font-semibold tracking-wide">@Galusso provides</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Free and Premium WordPress themes and Joomla! templates
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            WordPress themes built for Elementor and WooCommerce, plus Joomla templates with full J4! and J5! support — crafted for performance, SEO and great design.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/wordpress-themes" className="btn-primary">View WordPress Themes</Link>
            <Link to="/joomla-templates" className="btn-outline">Discover Joomla! Templates</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl">Everything you need to build great sites</h2>
          <p className="mt-3 text-muted-foreground">Carefully crafted features that ship in every theme.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-[hsl(var(--accent))] text-[hsl(var(--orange))] grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured theme */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 grid place-items-center shadow-lg">
            <div className="text-center">
              <div className="text-7xl font-bold text-slate-500">GT</div>
              <p className="text-slate-600 mt-2">Portfolio</p>
            </div>
          </div>
          <div>
            <p className="text-[hsl(var(--orange))] font-semibold">Featured Theme</p>
            <h2 className="mt-2 text-3xl md:text-4xl">GT Portfolio</h2>
            <p className="mt-4 text-muted-foreground">
              GT Portfolio is a suitable theme if you want to create an outstanding portfolio website
              for technology, art, or photography. Clean typography, fluid galleries and a focus on
              the work make it a great choice for creatives.
            </p>
            <Link to="/wordpress-themes" className="btn-primary mt-6 inline-flex">More Details</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl">What our members say</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="rounded-2xl border bg-card p-8 md:p-10 shadow-sm text-center min-h-[220px]">
            <div className="flex justify-center gap-1 text-[hsl(var(--orange))]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-lg italic">“{testimonials[idx].text}”</p>
            <p className="mt-5 font-semibold">{testimonials[idx].name}</p>
            <p className="text-xs text-muted-foreground">Member, from WordPress.org</p>
          </div>
          <button onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous"
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border shadow grid place-items-center hover:bg-secondary">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            aria-label="Next"
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border shadow grid place-items-center hover:bg-secondary">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Go to ${i + 1}`} onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-[hsl(var(--orange))]" : "w-2 bg-slate-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="bg-[hsl(var(--navy))] text-white">
        <div className="container-page py-16 text-center">
          <h2 className="text-3xl md:text-4xl">Interested with our themes?</h2>
          <p className="mt-3 text-white/80">Access Membership to download all Premium themes in PRO version.</p>
          <Link to="/membership" className="btn-primary mt-6 inline-flex">Learn more about Membership</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

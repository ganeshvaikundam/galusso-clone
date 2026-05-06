import { useMemo, useState } from "react";
import { blogPosts } from "@/data/site";

const allCats = ["WordPress", "Elementor", "WooCommerce"];
const tags = ["WordPress", "Theme", "Elementor", "SEO", "WooCommerce", "Performance", "UX"];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [cats, setCats] = useState<string[]>([]);
  const [sidebarCat, setSidebarCat] = useState("All");

  const posts = useMemo(() => {
    let list = [...blogPosts];
    if (search) list = list.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    if (cats.length) list = list.filter((p) => cats.includes(p.category));
    if (sidebarCat !== "All") list = list.filter((p) => p.category === sidebarCat);
    return list;
  }, [search, cats, sidebarCat]);

  const toggleCat = (c: string) =>
    setCats((cs) => (cs.includes(c) ? cs.filter((x) => x !== c) : [...cs, c]));

  return (
    <div className="container-page py-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
      <div>
        <h1 className="text-3xl md:text-4xl mb-8">Blog</h1>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="rounded-xl border bg-card overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center">
                  <span className="text-2xl font-bold text-slate-400">{p.category}</span>
                </div>
                <div className="p-5">
                  <span className="inline-block rounded bg-[hsl(var(--accent))] px-2 py-0.5 text-[10px] font-bold uppercase text-[hsl(var(--orange))]">{p.category}</span>
                  <h3 className="mt-2 font-semibold text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-3 text-xs text-muted-foreground">By {p.author} · {p.date}</div>
                  <button className="btn-ghost-orange mt-4 w-full">Read More</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <aside className="space-y-8">
        <div>
          <label className="block text-sm font-medium mb-2">Search</label>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Search articles..." />
        </div>
        <div>
          <h4 className="font-semibold mb-3">Recent Posts</h4>
          <ul className="space-y-2 text-sm">
            {blogPosts.slice(0, 4).map((p) => (
              <li key={p.id}><a href="#" className="hover:text-[hsl(var(--orange))]">{p.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Filter category</h4>
          <select value={sidebarCat} onChange={(e) => setSidebarCat(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            {["All", ...allCats].map((c) => <option key={c}>{c}</option>)}
          </select>
          <div className="mt-3 space-y-2">
            {allCats.map((c) => (
              <label key={c} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={cats.includes(c)} onChange={() => toggleCat(c)} />
                {c}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs hover:bg-[hsl(var(--accent))] cursor-pointer">{t}</span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Blog;

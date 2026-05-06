import { useMemo, useState } from "react";
import ThemeCard from "@/components/themes/ThemeCard";
import { wpThemes } from "@/data/site";

const tabs = ["All Themes", "Free", "Premium", "New Arrivals"] as const;

const WordPressThemes = () => {
  const [tab, setTab] = useState<typeof tabs[number]>("All Themes");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [q, setQ] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = [...wpThemes];
    if (tab === "Free") list = list.filter((t) => !t.premium);
    if (tab === "Premium") list = list.filter((t) => t.premium);
    if (tab === "New Arrivals") list = list.filter((t) => t.isNew);
    if (category !== "All") list = list.filter((t) => t.category === category);
    if (search) list = list.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));
    if (sort === "A-Z") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Free Only") list = list.filter((t) => !t.premium);
    if (sort === "Premium") list = list.filter((t) => t.premium);
    return list;
  }, [tab, category, sort, search]);

  return (
    <div className="container-page py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl">WordPress Themes</h1>
        <p className="text-muted-foreground mt-2">Browse our collection of free and premium WordPress themes.</p>
      </header>

      {/* Filter bar */}
      <div className="rounded-xl border bg-card p-4 grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <label className="block">
          <span className="block text-xs font-medium mb-1">Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            {["All", "Blogging", "Business", "Portfolio", "E-commerce", "Magazine"].map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="block text-xs font-medium mb-1">Sort by</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            {["Newest", "Popular", "A-Z", "Free Only", "Premium"].map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <form onSubmit={(e) => { e.preventDefault(); setSearch(q); }} className="md:col-span-2 flex gap-2 items-end">
          <label className="flex-1">
            <span className="block text-xs font-medium mb-1">Search</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search themes..."
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
          </label>
          <button className="btn-primary">Search</button>
        </form>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === t ? "border-[hsl(var(--orange))] text-[hsl(var(--orange))]" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}>{t}</button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground py-10 text-center">No themes match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-down">
          {filtered.map((t) => <ThemeCard key={t.id} theme={t} />)}
        </div>
      )}
    </div>
  );
};

export default WordPressThemes;

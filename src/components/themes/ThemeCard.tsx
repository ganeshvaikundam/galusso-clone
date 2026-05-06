import { useState } from "react";
import Modal from "@/components/modals/Modal";

export interface ThemeItem {
  id: string;
  name: string;
  desc: string;
  premium: boolean;
  category?: string;
  version?: string;
  isNew?: boolean;
}

const ThemeCard = ({ theme }: { theme: ThemeItem }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const initials = theme.name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <article className="group rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center overflow-hidden">
        <div className="text-5xl font-bold text-slate-400/70 group-hover:scale-105 transition-transform">{initials}</div>
        <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
          theme.premium ? "bg-[hsl(var(--orange))] text-white" : "bg-emerald-500 text-white"
        }`}>{theme.premium ? "Premium" : "Free"}</span>
        {theme.isNew && <span className="absolute top-3 right-3 rounded-full bg-blue-500 px-2.5 py-1 text-[10px] font-bold uppercase text-white">New</span>}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{theme.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{theme.desc}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => setPreviewOpen(true)} className="btn-ghost-orange flex-1">Demo</button>
          <button onClick={() => setDownloadOpen(true)} className="btn-primary flex-1">Download</button>
        </div>
      </div>

      <Modal open={previewOpen} onClose={() => setPreviewOpen(false)} title={`${theme.name} — Preview`} size="xl">
        <div className="aspect-video w-full rounded-md bg-gradient-to-br from-slate-100 to-slate-300 grid place-items-center">
          <div className="text-center">
            <div className="text-7xl font-bold text-slate-400">{initials}</div>
            <p className="mt-2 text-sm text-muted-foreground">Live preview placeholder for {theme.name}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={() => setPreviewOpen(false)} className="rounded-md border px-4 py-2 text-sm">Close</button>
          <button onClick={() => { setPreviewOpen(false); setDownloadOpen(true); }} className="btn-primary">Download</button>
        </div>
      </Modal>

      <Modal open={downloadOpen} onClose={() => setDownloadOpen(false)} title={`Download ${theme.name}`}>
        <p className="text-sm text-muted-foreground">Choose a version to download. You may need to login for premium downloads.</p>
        <div className="mt-4 grid gap-2">
          <button className="btn-ghost-orange">Download Free Version</button>
          <button className="btn-primary">Get Premium</button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Not logged in? Sign in to access premium downloads.</p>
      </Modal>
    </article>
  );
};

export default ThemeCard;

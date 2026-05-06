import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";

const Faqs = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="container-page py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mt-2">Quick answers to the things people ask most.</p>

      <div className="mt-8 divide-y rounded-xl border bg-card">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180 text-[hsl(var(--orange))]" : ""}`} />
              </button>
              {isOpen && <div className="px-5 pb-5 text-sm text-muted-foreground fade-in-down">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;

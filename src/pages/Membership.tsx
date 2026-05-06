import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free", price: "$0", period: "/month", popular: false,
    features: ["5 themes", "Community support", "No premium updates"],
    cta: "Get Started",
  },
  {
    name: "WordPress Club", price: "$39", period: "/year", popular: true,
    features: ["All WordPress themes", "1-year updates", "Ticket support", "Use on unlimited sites"],
    cta: "Join WordPress Club",
  },
  {
    name: "Joomla! Club", price: "$39", period: "/year", popular: false,
    features: ["All Joomla templates", "1-year updates", "Ticket support", "J4! and J5! support"],
    cta: "Join Joomla Club",
  },
];

const Membership = () => (
  <div className="container-page py-16">
    <header className="text-center max-w-2xl mx-auto mb-12">
      <h1 className="text-3xl md:text-4xl">Membership Plans</h1>
      <p className="text-muted-foreground mt-3">Pick a plan that fits your projects. Cancel anytime.</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((t) => (
        <div key={t.name} className={`relative rounded-2xl border bg-card p-7 shadow-sm flex flex-col ${
          t.popular ? "border-[hsl(var(--orange))] shadow-lg ring-1 ring-[hsl(var(--orange))]" : ""
        }`}>
          {t.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[hsl(var(--orange))] px-3 py-1 text-xs font-bold uppercase text-white">
              Most Popular
            </span>
          )}
          <h3 className="text-xl font-semibold">{t.name}</h3>
          <div className="mt-3 flex items-end gap-1">
            <span className="text-4xl font-bold">{t.price}</span>
            <span className="text-muted-foreground">{t.period}</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm flex-1">
            {t.features.map((f) => (
              <li key={f} className="flex gap-2 items-start">
                <Check className="h-4 w-4 mt-0.5 text-[hsl(var(--orange))]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button className={`mt-7 ${t.popular ? "btn-primary" : "btn-ghost-orange"}`}>{t.cta}</button>
        </div>
      ))}
    </div>
  </div>
);

export default Membership;

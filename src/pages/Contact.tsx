import { useState } from "react";
import { Mail, Twitter } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  return (
    <div className="container-page py-16 grid lg:grid-cols-[1fr_320px] gap-12">
      <div>
        <h1 className="text-3xl md:text-4xl">Contact us</h1>
        <p className="text-muted-foreground mt-2">We typically respond within 24 hours on business days.</p>

        <form onSubmit={submit} noValidate className="mt-8 space-y-4 max-w-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
            <select id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {["General", "Support", "Sales", "Partnership"].map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <button disabled={loading} className="btn-primary">
            {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> : "Send Message"}
          </button>
          {sent && <p className="text-sm text-emerald-600">Thanks — we'll be in touch soon.</p>}
        </form>
      </div>

      <aside className="rounded-xl border bg-card p-6 h-fit">
        <h3 className="font-semibold mb-4">Get in touch</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[hsl(var(--orange))]" /> hello@galussothemes.com</li>
          <li className="flex items-center gap-2"><Twitter className="h-4 w-4 text-[hsl(var(--orange))]" /> @galussothemes</li>
        </ul>
      </aside>
    </div>
  );
};

export default Contact;

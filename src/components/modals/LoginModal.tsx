import { useState } from "react";
import Modal from "./Modal";

const LoginModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) return setError("All fields are required.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 900);
  };

  return (
    <Modal open={open} onClose={onClose} title="Customer Login">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="login-email">Email</label>
          <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="login-password">Password</label>
          <input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button disabled={loading} className="btn-primary w-full">
          {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> : "Login"}
        </button>
        <div className="flex justify-between text-sm text-muted-foreground">
          <a href="#" className="hover:text-[hsl(var(--orange))]">Register</a>
          <a href="#" className="hover:text-[hsl(var(--orange))]">Forgot Password?</a>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;

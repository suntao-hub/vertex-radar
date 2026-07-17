"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm font-medium text-[var(--vt-navy)] dark:text-white">
        You&apos;re on the list — we&apos;ll email you at launch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="you@yourstore.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 flex-1 rounded-full border border-black/10 bg-white px-4 text-sm text-[var(--vt-navy)] outline-none focus:border-[var(--vt-accent)] dark:border-white/15 dark:bg-transparent dark:text-white"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-11 rounded-full bg-[var(--vt-navy)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--vt-navy-light)] disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Notify me"}
      </button>
      {status === "error" && (
        <p className="text-xs text-[var(--vt-dead)]">
          Something went wrong — try again.
        </p>
      )}
    </form>
  );
}

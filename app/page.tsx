import SignupForm from "./signup-form";

const TIERS = [
  {
    name: "Fresh",
    color: "bg-[var(--vt-fresh)]",
    range: "0–60 days",
    desc: "Selling normally. No action needed.",
  },
  {
    name: "Aging",
    color: "bg-[var(--vt-aging)]",
    range: "61–120 days",
    desc: "Slowing down. Worth a look this week.",
  },
  {
    name: "Liquidate",
    color: "bg-[var(--vt-liquidate)]",
    range: "121–180 days",
    desc: "Discount or bundle it now, before storage fees eat the margin.",
  },
  {
    name: "Dead",
    color: "bg-[var(--vt-dead)]",
    range: "180+ days",
    desc: "Cut losses. Every extra day costs you in storage fees.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Drop in your inventory",
    desc: "Paste your SKU list — cost, units, and the date it landed — into the Inventory Input tab.",
  },
  {
    step: "2",
    title: "It ages automatically",
    desc: "Every SKU is scored Fresh → Aging → Liquidate → Dead based on days on hand, with the dashboard doing the math.",
  },
  {
    step: "3",
    title: "Get the alert before the P&L does",
    desc: "The connected tier emails you the moment a SKU crosses into Liquidate or Dead — not at month-end close.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans dark:bg-black">
      {/* Nav */}
      <header className="w-full border-b border-black/5 dark:border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight text-[var(--vt-navy)] dark:text-white">
            Vertex Radar{" "}
            <span className="font-normal text-[var(--vt-slate)] dark:text-zinc-500">
              · Inventory Aging
            </span>
          </span>
          <a
            href="#pricing"
            className="text-sm font-medium text-[var(--vt-slate)] hover:text-[var(--vt-navy)] dark:text-zinc-400 dark:hover:text-white"
          >
            Pricing
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20 text-center sm:py-28">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[var(--vt-navy)] sm:text-5xl dark:text-white">
          Stop finding out about dead stock from your P&amp;L
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--vt-slate)] dark:text-zinc-400">
          Vertex Radar flags aging Amazon and e-commerce inventory before it
          becomes a liquidation problem — so you discount on your terms, not
          after storage fees have already eaten the margin.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[var(--vt-navy)] px-6 text-base font-medium text-white transition-colors hover:bg-[var(--vt-navy-light)] sm:w-auto"
          >
            Get the tracker
          </a>
          <a
            href="#how-it-works"
            className="flex h-12 w-full items-center justify-center rounded-full border border-black/10 px-6 text-base font-medium text-[var(--vt-navy)] transition-colors hover:bg-black/[.03] sm:w-auto dark:border-white/15 dark:text-white dark:hover:bg-white/[.06]"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Aging tiers */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-black/5 p-5 dark:border-white/10"
            >
              <div className={`h-2 w-10 rounded-full ${tier.color}`} />
              <div className="mt-4 text-base font-semibold text-[var(--vt-navy)] dark:text-white">
                {tier.name}
              </div>
              <div className="text-sm text-[var(--vt-slate)] dark:text-zinc-500">
                {tier.range}
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--vt-slate)] dark:text-zinc-400">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="w-full bg-zinc-50 py-20 dark:bg-zinc-950"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-[var(--vt-navy)] sm:text-3xl dark:text-white">
            How it works
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--vt-navy)] text-sm font-semibold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-base font-semibold text-[var(--vt-navy)] dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--vt-slate)] dark:text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-[var(--vt-navy)] sm:text-3xl dark:text-white">
          Start with the template. Upgrade when the alerts pay for themselves.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-8 dark:border-white/10">
            <h3 className="text-lg font-semibold text-[var(--vt-navy)] dark:text-white">
              Static Tracker
            </h3>
            <p className="mt-1 text-sm text-[var(--vt-slate)] dark:text-zinc-400">
              One-time purchase, Excel or Google Sheets
            </p>
            <p className="mt-6 text-3xl font-semibold text-[var(--vt-navy)] dark:text-white">
              $15–29
            </p>
            <a
              href="https://etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-11 w-full items-center justify-center rounded-full border border-[var(--vt-navy)] text-sm font-medium text-[var(--vt-navy)] transition-colors hover:bg-black/[.03] dark:border-white dark:text-white dark:hover:bg-white/[.06]"
            >
              Buy on Etsy
            </a>
            <p className="mt-3 text-xs text-[var(--vt-slate)] dark:text-zinc-500">
              Shop link goes live at Etsy launch.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--vt-accent)] bg-[var(--vt-accent)]/[.04] p-8">
            <h3 className="text-lg font-semibold text-[var(--vt-navy)] dark:text-white">
              Connected (coming soon)
            </h3>
            <p className="mt-1 text-sm text-[var(--vt-slate)] dark:text-zinc-400">
              Google Sheets Add-on with daily aging alerts
            </p>
            <p className="mt-6 text-3xl font-semibold text-[var(--vt-navy)] dark:text-white">
              Monthly subscription
            </p>
            <p className="mt-1 text-xs text-[var(--vt-slate)] dark:text-zinc-500">
              Price to be announced
            </p>
            <div className="mt-6">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-black/5 py-8 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-[var(--vt-slate)] dark:text-zinc-500">
          Vertex Radar is a product of Vertex Deal LLC.
        </div>
      </footer>
    </div>
  );
}

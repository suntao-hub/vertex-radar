"use client";

import { useEffect, useRef } from "react";

const TRACKERS = [
  {
    index: "01",
    status: "live" as const,
    title: "Inventory Aging & Dead Stock Tracker",
    desc: "See exactly which SKUs are tying up cash, aged by days since last sale, with a recommended action for each one.",
    link: { href: "#pricing", label: "Get it now →" },
  },
  {
    index: "02",
    status: "dev" as const,
    title: "PPC Performance Tracker",
    desc: "Track spend, ACOS, and RPC against your own targets — not a generic benchmark that doesn't know your margins.",
  },
  {
    index: "03",
    status: "dev" as const,
    title: "FBA Margin & Fee Tracker",
    desc: "Catch size-tier fee overcharges and packaging inefficiencies before they quietly eat your margin.",
  },
  {
    index: "04",
    status: "dev" as const,
    title: "Launch Unit Economics Tracker",
    desc: "Model a new SKU's real margin — base, conservative, and optimistic — before you commit to inventory.",
  },
];

export default function SuiteGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".card");
    if (!cards || !("IntersectionObserver" in window)) {
      cards?.forEach((c) => c.classList.add("reveal"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("reveal"), i * 70);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div className="suite-grid" ref={gridRef}>
      {TRACKERS.map((t) => (
        <div className="card" key={t.index}>
          <div className="card-top">
            <span className={`status ${t.status}`}>
              <span className="status-dot" />
              {t.status === "live" ? "Live" : "In Development"}
            </span>
            <span className="card-index mono">{t.index}</span>
          </div>
          <h3>{t.title}</h3>
          <p>{t.desc}</p>
          {t.link ? (
            <a className="card-link" href={t.link.href}>
              {t.link.label}
            </a>
          ) : (
            <span className="card-link disabled">Coming soon</span>
          )}
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

/** A code block with a copy button. The child is the raw command text. */
export function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard may be blocked */
    }
  }

  return (
    <div className="relative mt-5 group">
      <pre className="data overflow-x-auto rounded-xl border border-line bg-void p-4 pr-16 text-[0.82rem] leading-[1.7] text-ink sm:p-5 sm:pr-16">
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code"
        className={`absolute right-3 top-3 rounded-md border border-line px-2.5 py-1 text-[0.72rem] transition-colors duration-150 ${
          copied
            ? "border-signal/40 text-signal"
            : "bg-surface text-ink-dim hover:text-ink"
        }`}
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

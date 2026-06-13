import { useState } from "react";

export default function SearchHeader() {
  const [query, setQuery] = useState("");

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-cyan-700 ring-1 ring-cyan-100">AI Search</span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Search lost and found items</h1>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">Search by item, color, brand, location, or description. AI can rank the closest matches.</p>
        </div>
      </div>

      <div className="border-t border-slate-200 p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: black wallet near market, iPhone 13, blue school bag..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10"
          />
          <button className="rounded-2xl bg-slate-950 px-6 py-3 font-black text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">Search</button>
        </div>
      </div>
    </div>
  );
}

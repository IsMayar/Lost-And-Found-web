const filters = [
  { label: "Type", options: ["All types", "Lost", "Found"] },
  { label: "Category", options: ["All categories", "Electronics", "Documents", "Bags", "Wallets"] },
  { label: "Location", options: ["Any location", "Kabul", "Herat", "Mazar", "Kandahar"] },
  { label: "Sort by", options: ["Best match", "Newest", "Nearest", "Confidence"] },
];

export default function SearchFilters() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-black text-slate-950">Filters</h2>
          <p className="mt-1 text-sm text-slate-500">Refine results by status, category, and location</p>
        </div>
        <button className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-black text-slate-950 hover:bg-slate-50 sm:inline-flex">Reset</button>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {filters.map((filter) => (
          <label key={filter.label} className="block">
            <span className="text-xs font-black uppercase tracking-wide text-slate-400">{filter.label}</span>
            <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10">
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </div>
  );
}

const stats = [
  { label: "Total reports", value: "1,240", trend: "+12.4%", tone: "text-cyan-700 bg-cyan-50 ring-cyan-100" },
  { label: "Matched items", value: "312", trend: "+8.1%", tone: "text-emerald-700 bg-emerald-50 ring-emerald-100" },
  { label: "Active searches", value: "98", trend: "Live", tone: "text-amber-700 bg-amber-50 ring-amber-100" },
  { label: "Success rate", value: "74%", trend: "+4.3%", tone: "text-violet-700 bg-violet-50 ring-violet-100" },
];

export default function StatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-bold text-slate-500">{stat.label}</p>
            <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${stat.tone}`}>{stat.trend}</span>
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">{stat.value}</h2>
          <p className="mt-2 text-sm text-slate-500">Updated from latest platform activity</p>
        </div>
      ))}
    </div>
  );
}

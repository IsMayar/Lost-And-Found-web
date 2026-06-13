const activities = [
  { title: "John reported a lost wallet", meta: "Shahr-e-Naw Market · 4 min ago", status: "Lost" },
  { title: "AI matched 3 new items", meta: "Average confidence 86% · 12 min ago", status: "AI" },
  { title: "Sara found a phone", meta: "Kabul University · 25 min ago", status: "Found" },
  { title: "New search request created", meta: "Blue school bag · 1 hour ago", status: "Search" },
];

export default function RecentActivity() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-2 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-950">Recent activity</h2>
          <p className="mt-1 text-sm text-slate-500">Latest reports, AI events, and searches</p>
        </div>
        <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-black text-slate-950 hover:bg-slate-50">View all</button>
      </div>

      <div className="divide-y divide-slate-100">
        {activities.map((activity) => (
          <div key={activity.title} className="flex items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-2xl bg-slate-100" />
              <div>
                <p className="font-bold text-slate-950">{activity.title}</p>
                <p className="mt-1 text-sm text-slate-500">{activity.meta}</p>
              </div>
            </div>
            <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600 sm:inline-flex">{activity.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

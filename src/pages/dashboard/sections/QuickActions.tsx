import { Link } from "react-router-dom";

const actions = [
  { title: "Report lost item", desc: "Create a new lost item case", to: "/report-lost", tone: "bg-rose-50 text-rose-700 ring-rose-100" },
  { title: "Report found item", desc: "Help return an item", to: "/report-found", tone: "bg-emerald-50 text-emerald-700 ring-emerald-100" },
  { title: "Run AI search", desc: "Search and compare matches", to: "/search", tone: "bg-cyan-50 text-cyan-700 ring-cyan-100" },
];

export default function QuickActions() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {actions.map((action) => (
        <Link key={action.title} to={action.to} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
          <div className={`mb-5 inline-flex rounded-2xl px-3 py-2 text-sm font-black ring-1 ${action.tone}`}>Action</div>
          <h3 className="text-xl font-black text-slate-950">{action.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">{action.desc}</p>
          <p className="mt-5 text-sm font-black text-slate-950 group-hover:underline">Open flow →</p>
        </Link>
      ))}
    </div>
  );
}

import { Link } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-cyan-700 ring-1 ring-cyan-100">
            Command center
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Dashboard</h1>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">Track lost and found reports, AI match confidence, active searches, and recovery performance.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/report-found" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-black text-slate-950 hover:bg-slate-50">
            Report found
          </Link>
          <Link to="/report-lost" className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-black text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
            Report lost
          </Link>
        </div>
      </div>
    </div>
  );
}

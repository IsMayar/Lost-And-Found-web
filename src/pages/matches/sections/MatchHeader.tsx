import { Link } from "react-router-dom";

export default function MatchHeader() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-violet-700 ring-1 ring-violet-100">AI engine</span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">AI Matches</h1>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">Review suggested matches between lost and found reports with confidence scores and evidence.</p>
        </div>
        <Link to="/search" className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-black text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">Run new search</Link>
      </div>
    </div>
  );
}

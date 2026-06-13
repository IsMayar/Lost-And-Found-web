import { Calendar, Eye, MapPin, ShieldCheck } from "lucide-react";
import type { Report } from "../../features/reports/reportsData";

type ReportCardProps = {
  report: Report;
  onView?: (report: Report) => void;
};

export function ReportCard({ report, onView }: ReportCardProps) {
  const typeLabel = report.type === "lost" ? "Lost" : "Found";
  const typeClass = report.type === "lost" ? "bg-rose-50 text-rose-700 ring-rose-100" : "bg-emerald-50 text-emerald-700 ring-emerald-100";

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
      <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-slate-950" />
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${typeClass}`}>{typeLabel}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{report.category}</span>
              {report.isVerified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  <ShieldCheck className="h-3 w-3" /> Verified
                </span>
              )}
            </div>
            <h3 className="text-lg font-black tracking-tight text-slate-950">{report.title}</h3>
          </div>

          {typeof report.matchScore === "number" && (
            <div className="shrink-0 rounded-2xl bg-slate-950 px-3 py-2 text-center text-white">
              <p className="text-sm font-black">{report.matchScore}%</p>
              <p className="text-[10px] uppercase tracking-wide text-slate-300">AI</p>
            </div>
          )}
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">{report.description}</p>

        <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-400"><MapPin className="h-3.5 w-3.5" /> Location</p>
            <p className="mt-1 font-bold text-slate-800">{report.location}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-400"><Calendar className="h-3.5 w-3.5" /> Date</p>
            <p className="mt-1 font-bold text-slate-800">{report.date}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {report.color && <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">Color: {report.color}</span>}
          {report.brand && <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">Brand: {report.brand}</span>}
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold capitalize text-slate-500">{report.status.replace("_", " ")}</span>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={() => onView?.(report)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800"
          >
            <Eye className="h-4 w-4" /> View details
          </button>
        </div>
      </div>
    </article>
  );
}

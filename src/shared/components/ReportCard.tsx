import type { Report } from "../../features/reports/reportsData";

type ReportCardProps = {
  report: Report;
  onView?: (report: Report) => void;
};

export function ReportCard({ report, onView }: ReportCardProps) {
  const typeLabel = report.type === "lost" ? "Lost" : "Found";

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                report.type === "lost"
                  ? "bg-rose-50 text-rose-700"
                  : "bg-emerald-50 text-emerald-700"
              }`}
            >
              {typeLabel}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {report.category}
            </span>

            {report.isVerified && (
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Verified
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-slate-950">{report.title}</h3>
        </div>

        {typeof report.matchScore === "number" && (
          <div className="rounded-2xl bg-slate-950 px-3 py-2 text-center text-white">
            <p className="text-sm font-bold">{report.matchScore}%</p>
            <p className="text-[10px] text-slate-300">AI Match</p>
          </div>
        )}
      </div>

      <p className="line-clamp-2 text-sm leading-6 text-slate-600">
        {report.description}
      </p>

      <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Location
          </p>
          <p className="mt-1 font-medium text-slate-800">{report.location}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Date
          </p>
          <p className="mt-1 font-medium text-slate-800">{report.date}</p>
        </div>

        {report.color && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Color
            </p>
            <p className="mt-1 font-medium text-slate-800">{report.color}</p>
          </div>
        )}

        {report.brand && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Brand
            </p>
            <p className="mt-1 font-medium text-slate-800">{report.brand}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs font-medium capitalize text-slate-500">
          Status: {report.status}
        </span>

        <button
          type="button"
          onClick={() => onView?.(report)}
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View details
        </button>
      </div>
    </article>
  );
}

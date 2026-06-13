import { ReportCard } from "../../../shared/components";
import { mockReports, type Report } from "../../../features/reports";

type SearchResultsProps = {
  onViewReport?: (report: Report) => void;
};

export function SearchResults({ onViewReport }: SearchResultsProps) {
  return (
    <section className="py-12">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Search results
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Recently reported items
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Browse lost and found reports. AI matching will later rank these
            results based on category, location, date, description, and images.
          </p>
        </div>

        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
          {mockReports.length} reports found
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {mockReports.map((report) => (
          <ReportCard key={report.id} report={report} onView={onViewReport} />
        ))}
      </div>
    </section>
  );
}

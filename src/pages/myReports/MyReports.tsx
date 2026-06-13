import { Link, useNavigate } from "react-router-dom";
import { Edit3, Eye, FileText, Plus, Search, ShieldCheck } from "lucide-react";
import { mockReports, mockSavedSearches } from "../../features/reports";
import { Container, ReportCard } from "../../shared/components";

export default function MyReports() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
                <FileText className="h-4 w-4" /> My reports
              </p>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Manage your lost and found activity.</h1>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">Review reports, edit details, open claims, and keep track of active or matched items.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/report-lost" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800"><Plus className="h-4 w-4" /> Lost report</Link>
              <Link to="/report-found" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50"><Plus className="h-4 w-4" /> Found report</Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
          <section>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black text-slate-950">All reports</h2>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-600 shadow-sm">{mockReports.length} total</span>
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              {mockReports.map((report) => <ReportCard key={report.id} report={report} onView={() => navigate(`/items/${report.id}`)} />)}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Saved searches</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Future backend can use these for notifications and matching alerts.</p>
              <div className="mt-5 space-y-3">
                {mockSavedSearches.map((search) => (
                  <div key={search.id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-start gap-3">
                      <Search className="mt-0.5 h-4 w-4 text-slate-400" />
                      <div>
                        <p className="font-black text-slate-950">{search.query}</p>
                        <p className="mt-1 text-sm text-slate-500">{search.filters}</p>
                        <p className="mt-2 text-xs font-black text-emerald-600">Alerts {search.alerts ? "enabled" : "disabled"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-black">Report quality checklist</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <p className="flex gap-2"><Eye className="mt-0.5 h-4 w-4 shrink-0" /> Public: general description only.</p>
                <p className="flex gap-2"><Edit3 className="mt-0.5 h-4 w-4 shrink-0" /> Private: unique hints for verification.</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

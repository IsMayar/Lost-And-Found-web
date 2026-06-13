import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle2, Clock3, EyeOff, MapPin, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { getClaimByReportId, getReportById, mockMatches } from "../../features/reports";
import { Container, ReportCard } from "../../shared/components";

export function ItemDetails() {
  const { id } = useParams();
  const report = id ? getReportById(id) : null;

  if (!report) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black text-slate-950">Report not found</h1>
          <p className="mt-3 text-slate-600">This item report does not exist or may have been removed.</p>
          <Link to="/search" className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800">Back to search</Link>
        </div>
      </main>
    );
  }

  const claim = getClaimByReportId(report.id);
  const related = mockMatches.filter((item) => item.id !== report.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-8">
          <Link to="/search" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 transition hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" /> Back to search
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-black ${report.type === "lost" ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"}`}>
                  {report.type === "lost" ? "Lost item" : "Found item"}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">{report.category}</span>
                {report.isVerified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                    <ShieldCheck className="h-3.5 w-3.5" /> Verified report
                  </span>
                )}
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{report.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{report.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-black text-slate-500"><MapPin className="h-4 w-4" /> Location</div>
                  <p className="mt-2 font-black text-slate-950">{report.location}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-black text-slate-500"><Calendar className="h-4 w-4" /> Date</div>
                  <p className="mt-2 font-black text-slate-950">{report.date}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-black text-slate-500"><Clock3 className="h-4 w-4" /> Status</div>
                  <p className="mt-2 font-black capitalize text-slate-950">{report.status.replace("_", " ")}</p>
                </div>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
              <p className="text-sm font-black text-slate-300">AI confidence</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-black">{report.matchScore ?? 0}%</span>
                <span className="pb-2 text-sm text-slate-300">match score</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">Confidence is based on category, location, date, color, brand, and description similarity.</p>
              <Link to={`/claim/${report.id}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100">
                <MessageSquare className="h-4 w-4" /> Claim this item
              </Link>
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <div className="flex items-start gap-3">
                  <EyeOff className="mt-0.5 h-5 w-5 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-200">Private hints and contact information are hidden until verification is approved.</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Item information</h2>
            <dl className="mt-6 space-y-4">
              {[
                ["Color", report.color ?? "Not provided"],
                ["Brand", report.brand ?? "Not provided"],
                ["Reporter", report.reporterName ?? "Protected user"],
                ["Visibility", report.visibility ?? "public"],
                ["Report ID", report.id],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-slate-100 pb-3 last:border-b-0">
                  <dt className="text-sm text-slate-500">{label}</dt>
                  <dd className="text-right text-sm font-black capitalize text-slate-950">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-black text-amber-950">Safety and verification</h2>
            <p className="mt-3 leading-7 text-amber-800">Do not share sensitive information publicly. Verification should happen through private questions before contact details are revealed.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {(report.evidence ?? ["Category match", "Location clue", "Date similarity"]).map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-2xl bg-white/70 p-3 text-sm font-bold text-amber-900">
                  <CheckCircle2 className="h-4 w-4" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {claim && (
          <section className="mt-8 rounded-[2rem] border border-cyan-100 bg-cyan-50 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-cyan-950">Related claim request</h2>
                <p className="mt-2 text-sm leading-6 text-cyan-800">{claim.summary}</p>
              </div>
              <Link to={`/claim/${report.id}`} className="inline-flex rounded-full bg-cyan-700 px-5 py-3 text-sm font-black text-white hover:bg-cyan-800">
                Review claim
              </Link>
            </div>
          </section>
        )}

        <section className="mt-10">
          <div className="mb-5 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-600" />
            <h2 className="text-2xl font-black text-slate-950">Related matches</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {related.map((item) => <ReportCard key={item.id} report={item} />)}
          </div>
        </section>
      </Container>
    </main>
  );
}

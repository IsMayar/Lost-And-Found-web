import { Link, useNavigate } from "react-router-dom";
import { BrainCircuit, CheckCircle2, MapPin, ShieldAlert, Sparkles } from "lucide-react";
import { mockMatches } from "../../features/reports";
import { Container, ReportCard } from "../../shared/components";

export default function Matches() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <Container className="grid gap-8 py-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-cyan-200">
              <BrainCircuit className="h-4 w-4" /> AI match center
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Review possible matches with confidence evidence.</h1>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              This screen shows how the future AI matching engine should present confidence, evidence, risk flags, and next actions for each possible recovery.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-bold text-slate-300">Current top match</p>
            <p className="mt-2 text-5xl font-black">{mockMatches[0]?.matchScore}%</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Phone report similarity based on category, color, date, and nearby location.</p>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div className="grid gap-6">
            {mockMatches.map((report) => (
              <div key={report.id} className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
                <ReportCard report={report} onView={() => navigate(`/items/${report.id}`)} />
                <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-3">
                  {(report.evidence ?? []).slice(0, 3).map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-slate-600">
                      <CheckCircle2 className="mb-2 h-4 w-4 text-emerald-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-xl font-black text-slate-950">AI review rules</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" /> Nearby reports should rank higher, but exact addresses should stay private.</p>
              <p className="flex gap-3"><ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" /> High confidence does not prove ownership. Claims still require private verification questions.</p>
            </div>
            <Link to="/search" className="mt-6 inline-flex w-full justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white hover:bg-slate-800">
              Search more reports
            </Link>
          </aside>
        </div>
      </Container>
    </main>
  );
}

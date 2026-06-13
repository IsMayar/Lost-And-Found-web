import { Link, useParams } from "react-router-dom";
import { AlertTriangle, ArrowLeft, CheckCircle2, LockKeyhole, Send, ShieldCheck } from "lucide-react";
import { getClaimByReportId, getReportById } from "../../features/reports";
import { Container } from "../../shared/components";

const questions = [
  "What exact brand/model or item type is it?",
  "What unique mark, case, tag, or private detail can prove ownership?",
  "Where and when did you lose it?",
  "What should the finder/admin check before approving your claim?",
];

export default function ClaimItem() {
  const { id } = useParams();
  const report = id ? getReportById(id) : null;
  const claim = id ? getClaimByReportId(id) : null;

  if (!report) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black text-slate-950">Claim target not found</h1>
          <p className="mt-3 text-slate-600">The report you are trying to claim does not exist.</p>
          <Link to="/search" className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">Back to search</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10">
          <Link to={`/items/${report.id}`} className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" /> Back to item details
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
                <ShieldCheck className="h-4 w-4" /> Secure claim request
              </p>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Verify ownership before contact is revealed.</h1>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Submit clear ownership answers. The finder or admin can compare your answers with private hints before approving contact sharing.
              </p>
            </div>
            <aside className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/20">
              <p className="text-sm font-bold text-slate-300">Claiming</p>
              <h2 className="mt-2 text-xl font-black">{report.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{report.location} · {report.date}</p>
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm leading-6 text-slate-200">Your contact information remains hidden until the claim is reviewed and approved.</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
          <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-700">Full name</span>
                <input placeholder="Your full name" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-700">Email</span>
                <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
              </label>
            </div>

            <div className="mt-6 grid gap-5">
              {questions.map((question, index) => (
                <label key={question} className="block">
                  <span className="text-sm font-black text-slate-700">Question {index + 1}: {question}</span>
                  <textarea rows={3} placeholder="Write a specific answer that only the owner would know." className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
                </label>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-sm leading-6 text-amber-800">Do not send passwords, full document numbers, bank card numbers, or private addresses. Only provide enough information to verify ownership.</p>
              </div>
            </div>

            <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white hover:bg-slate-800">
              <Send className="h-4 w-4" /> Submit claim request
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <LockKeyhole className="h-6 w-6 text-cyan-600" />
              <h2 className="mt-4 text-xl font-black text-slate-950">Claim review status</h2>
              {claim ? (
                <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-black capitalize text-slate-950">{claim.status.replace("_", " ")}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{claim.summary}</p>
                  <p className="mt-3 text-sm font-black text-cyan-700">{claim.confidence}% evidence confidence</p>
                </div>
              ) : (
                <p className="mt-3 text-sm leading-6 text-slate-600">No claim has been submitted for this report in the mock data yet.</p>
              )}
            </div>

            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6">
              <h2 className="text-xl font-black text-emerald-950">Safe release process</h2>
              <div className="mt-4 space-y-3">
                {["Claim answers submitted", "Finder/admin reviews evidence", "Contact revealed only after approval", "Both sides confirm resolution"].map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-bold text-emerald-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

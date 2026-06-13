import { CheckCircle2, HandHeart } from "lucide-react";
import { Container } from "../../shared/components";
import ReportFoundForm from "./sections/ReportFoundForm";

export default function ReportFound() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="grid gap-8 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700"><HandHeart className="h-4 w-4" /> Found report</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Help return a found item.</h1>
            <p className="mt-4 leading-8 text-slate-600">Post enough details for matching, but protect sensitive information until the owner verifies the item.</p>
            <div className="mt-6 space-y-3 rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
              {["Do not show full document numbers publicly.", "Ask claimants private verification questions.", "Use platform messages before sharing contact details."].map((item) => (
                <p key={item} className="flex gap-3 text-sm font-bold text-slate-600"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" /> {item}</p>
              ))}
            </div>
          </div>
          <ReportFoundForm />
        </Container>
      </section>
    </main>
  );
}

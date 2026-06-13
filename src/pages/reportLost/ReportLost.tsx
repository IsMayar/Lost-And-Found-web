import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Container } from "../../shared/components";
import ReportLostForm from "./sections/ReportLostForm";

export default function ReportLost() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="grid gap-8 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-black text-rose-700"><AlertTriangle className="h-4 w-4" /> Lost report</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Report a lost item safely.</h1>
            <p className="mt-4 leading-8 text-slate-600">Create a public report that is useful for search while keeping private proof hidden for claim verification.</p>
            <div className="mt-6 space-y-3 rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
              {["Use a general location, not your home address.", "Add private hints that only the real owner knows.", "Upload clear photos when available."].map((item) => (
                <p key={item} className="flex gap-3 text-sm font-bold text-slate-600"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" /> {item}</p>
              ))}
            </div>
          </div>
          <ReportLostForm />
        </Container>
      </section>
    </main>
  );
}

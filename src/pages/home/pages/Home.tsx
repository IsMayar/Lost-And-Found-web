import { ArrowRight, Bell, Bot, CheckCircle2, FileSearch, LockKeyhole, Search, ShieldCheck, Sparkles, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";
import { mockMatches } from "../../../features/reports";
import { Container, ReportCard } from "../../../shared/components";

const steps = [
  { icon: UploadCloud, title: "Report", text: "Create a lost or found report with category, location, date, images, and private hints." },
  { icon: Bot, title: "AI compares", text: "The matching engine ranks possible matches using descriptions, attributes, and location clues." },
  { icon: ShieldCheck, title: "Verify", text: "Claimants answer private questions before any contact information is revealed." },
];

const features = [
  { icon: Sparkles, title: "AI match scoring", text: "Confidence scores help users focus on the most relevant reports first." },
  { icon: LockKeyhole, title: "Privacy-first claims", text: "Phone numbers, document IDs, and private item hints stay hidden from public pages." },
  { icon: Bell, title: "Smart alerts", text: "Saved searches and item activity can notify users when similar reports appear." },
  { icon: FileSearch, title: "Admin-ready workflow", text: "Reports, claims, and suspicious activity are structured for future moderation." },
];

const stats = [
  { value: "92%", label: "Top AI match confidence" },
  { value: "6", label: "Mock reports connected" },
  { value: "3", label: "Verification claim states" },
  { value: "100%", label: "Responsive UI pages" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-50">
      <section className="relative isolate border-b border-slate-200 bg-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(15,23,42,0.12),transparent_30%)]" />
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
              <Sparkles className="h-4 w-4" /> AI-powered recovery platform
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Find lost items faster with trusted AI matching.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Findly AI helps people report lost and found items, discover smart matches, submit safe claims, and protect private contact details until ownership is verified.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/report-lost" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800">
                Report lost item <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/search" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-800 hover:bg-slate-50">
                <Search className="h-4 w-4" /> Search found items
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Private hints stay hidden", "Claim verification built in", "Mobile-first responsive UI"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/60 via-white to-slate-200 blur-2xl" />
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/80">
              <ReportCard report={mockMatches[0]} />
              <div className="mt-4 rounded-[2rem] bg-slate-950 p-5 text-white">
                <p className="text-sm font-bold text-slate-300">AI suggestion</p>
                <p className="mt-2 text-xl font-black">Ask claimant for case color, wallpaper, and exact lost spot before contact reveal.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-black text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">How it works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">A safer recovery flow from report to return.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white"><step.icon className="h-5 w-5" /></span>
                  <span className="text-sm font-black text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Senior product UI</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Built around trust, not only listings.</h2>
              <p className="mt-4 leading-8 text-slate-300">The interface includes the critical flows required before backend and real AI: item details, claims, reports, notifications, and profile privacy settings.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <feature.icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-4 font-black">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">Live prototype data</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Top AI matches</h2>
            </div>
            <Link to="/matches" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800">
              View all matches <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {mockMatches.slice(0, 3).map((report) => <ReportCard key={report.id} report={report} />)}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to test the full UI flow?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">Start with search, open item details, submit a claim, then review reports and notifications from the dashboard.</p>
            </div>
            <Link to="/search" className="mt-6 inline-flex rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 hover:bg-slate-100 lg:mt-0">
              Explore prototype
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";
import Container from "../../../shared/components/shared/container";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.10),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.14),transparent_30%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI-powered recovery for communities
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Reconnect people with lost items faster.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Findly AI compares descriptions, images, locations, and time patterns to turn lost and found reports into trusted matches.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/report-lost" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800">
                Report lost item
              </Link>
              <Link to="/search" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-950 hover:bg-slate-50">
                Search found items
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["10K+", "Reports"],
                ["92%", "AI accuracy"],
                ["24/7", "Assistant"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-cyan-200/50 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Live AI Match</p>
                    <h2 className="mt-1 text-2xl font-black">Black Samsung Phone</h2>
                  </div>
                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">92%</span>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Lost report</p>
                    <p className="mt-2 font-semibold">Samsung phone, black case, lost near university gate.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 text-slate-950">
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">Found report</p>
                    <p className="mt-2 font-semibold">Galaxy device found at Kabul University entrance.</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-emerald-400/15 p-4 text-sm text-emerald-100 ring-1 ring-emerald-300/30">
                  AI checked item type, brand, color, location distance, and report time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

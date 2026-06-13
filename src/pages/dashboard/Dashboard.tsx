import { Link } from "react-router-dom";
import { Activity, ArrowRight, Bell, CheckCircle2, Clock3, FileText, Plus, ShieldCheck, Sparkles } from "lucide-react";
import { getDashboardStats, mockActivity, mockClaims, mockReports } from "../../features/reports";
import { Container } from "../../shared/components";

const toneClass = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  rose: "bg-rose-50 text-rose-700",
  slate: "bg-slate-100 text-slate-700",
};

export default function Dashboard() {
  const stats = getDashboardStats();
  const cards = [
    { label: "Active reports", value: stats.active, icon: FileText, tone: "bg-blue-50 text-blue-700" },
    { label: "AI matches", value: stats.matched, icon: Sparkles, tone: "bg-cyan-50 text-cyan-700" },
    { label: "Pending claims", value: stats.pendingClaims, icon: Clock3, tone: "bg-amber-50 text-amber-700" },
    { label: "Resolved", value: stats.resolved, icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-700" },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">
                <ShieldCheck className="h-4 w-4" /> User dashboard
              </p>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Recovery command center</h1>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">Track reports, AI suggestions, claim requests, saved searches, and safety notifications from one clean dashboard.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/report-lost" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800">
                <Plus className="h-4 w-4" /> New report
              </Link>
              <Link to="/notifications" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">
                <Bell className="h-4 w-4" /> Notifications
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${card.tone}`}>
                <card.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-4xl font-black text-slate-950">{card.value}</p>
              <p className="mt-1 text-sm font-bold text-slate-500">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_24rem]">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-950">Recent activity</h2>
                <p className="mt-1 text-sm text-slate-500">Latest report, match, and claim actions.</p>
              </div>
              <Activity className="h-5 w-5 text-slate-400" />
            </div>
            <div className="mt-6 space-y-4">
              {mockActivity.map((activity) => (
                <div key={activity.id} className="flex gap-4 rounded-2xl border border-slate-100 p-4">
                  <span className={`mt-1 h-3 w-3 rounded-full ${toneClass[activity.tone]}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-black text-slate-950">{activity.title}</p>
                      <p className="text-xs font-bold text-slate-400">{activity.time}</p>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Quick actions</h2>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "Report lost item", to: "/report-lost" },
                  { label: "Report found item", to: "/report-found" },
                  { label: "Review AI matches", to: "/matches" },
                  { label: "Manage my reports", to: "/my-reports" },
                ].map((item) => (
                  <Link key={item.to} to={item.to} className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">
                    {item.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/20">
              <h2 className="text-xl font-black">Claims needing attention</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{mockClaims.length} sample claim requests are available in the mock dataset.</p>
              <Link to="/claim/report-002" className="mt-5 inline-flex w-full justify-center rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950 hover:bg-slate-100">
                Open claim flow
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">My latest reports</h2>
              <p className="mt-1 text-sm text-slate-500">A compact preview of user reports.</p>
            </div>
            <Link to="/my-reports" className="text-sm font-black text-slate-950 hover:underline">View all reports</Link>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            {mockReports.slice(0, 4).map((report) => (
              <Link key={report.id} to={`/items/${report.id}`} className="grid gap-2 border-b border-slate-100 p-4 last:border-b-0 hover:bg-slate-50 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                <div>
                  <p className="font-black text-slate-950">{report.title}</p>
                  <p className="text-sm text-slate-500">{report.location}</p>
                </div>
                <span className="text-sm font-bold capitalize text-slate-500">{report.type}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black capitalize text-slate-600">{report.status.replace("_", " ")}</span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

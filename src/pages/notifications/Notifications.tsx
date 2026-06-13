import { Bell, CheckCircle2, Circle, ShieldAlert } from "lucide-react";
import { mockNotifications } from "../../features/reports";
import { Container } from "../../shared/components";

const typeClass = {
  match: "bg-cyan-50 text-cyan-700",
  claim: "bg-amber-50 text-amber-700",
  safety: "bg-rose-50 text-rose-700",
  system: "bg-slate-100 text-slate-700",
};

export default function Notifications() {
  const unread = mockNotifications.filter((item) => !item.isRead).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700"><Bell className="h-4 w-4" /> Notifications</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Stay updated on matches, claims, and safety notices.</h1>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">A professional product needs clear notification states before real backend, email, or push integration.</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-950">Inbox</h2>
              <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">{unread} unread</span>
            </div>
            <div className="mt-6 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200">
              {mockNotifications.map((item) => (
                <article key={item.id} className={`p-5 ${item.isRead ? "bg-white" : "bg-cyan-50/40"}`}>
                  <div className="flex gap-4">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${typeClass[item.type]}`}>
                      {item.isRead ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5 fill-current" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-black text-slate-950">{item.title}</h3>
                        <p className="text-xs font-bold text-slate-400">{item.createdAt}</p>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.message}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="h-fit rounded-[2rem] border border-rose-200 bg-rose-50 p-6">
            <ShieldAlert className="h-6 w-6 text-rose-700" />
            <h2 className="mt-4 text-xl font-black text-rose-950">Safety notification policy</h2>
            <p className="mt-3 text-sm leading-6 text-rose-800">Notify users about claim requests, match confidence, rejected reports, and privacy warnings. Do not expose private contact details in notification previews.</p>
          </aside>
        </div>
      </Container>
    </main>
  );
}

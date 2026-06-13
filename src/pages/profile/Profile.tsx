import { Bell, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import { Container } from "../../shared/components";

export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700"><UserRound className="h-4 w-4" /> Profile</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Account and privacy settings.</h1>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">This UI prepares the app for auth, contact preferences, notification settings, and privacy-safe claim communication.</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
          <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-[2rem] bg-slate-950 text-3xl font-black text-white">IM</div>
            <h2 className="mt-5 text-2xl font-black text-slate-950">Ismael Mayar</h2>
            <p className="mt-1 text-sm font-semibold text-slate-500">Verified community member</p>
            <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
              <ShieldCheck className="mx-auto mb-2 h-5 w-5" /> Identity-ready profile
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Personal information</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="text-sm font-black text-slate-700">Full name</span><input defaultValue="Ismael Mayar" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white" /></label>
                <label className="block"><span className="text-sm font-black text-slate-700">Email</span><input defaultValue="ismael@example.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white" /></label>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Mail, title: "Contact reveal", text: "Only after claim approval" },
                { icon: Bell, title: "Match alerts", text: "Enabled for saved searches" },
                { icon: LockKeyhole, title: "Private hints", text: "Hidden from public pages" },
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <item.icon className="h-6 w-6 text-cyan-600" />
                  <h3 className="mt-4 font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Notification preferences</h2>
              <div className="mt-5 grid gap-3">
                {["New AI matches", "Claim request updates", "Report moderation results", "Safety reminders"].map((item) => (
                  <label key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                    <span className="font-bold text-slate-700">{item}</span>
                    <input type="checkbox" defaultChecked className="h-5 w-5" />
                  </label>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

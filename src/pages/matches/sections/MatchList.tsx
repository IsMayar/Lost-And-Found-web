const matches = [
  { id: 1, lost: "Black Wallet", found: "Wallet found in cafe", confidence: "92%", evidence: ["Same item type", "Location within 600m", "Color matched"] },
  { id: 2, lost: "iPhone 13", found: "Phone found near market", confidence: "85%", evidence: ["Brand matched", "Time window close", "Dark case mentioned"] },
  { id: 3, lost: "Student ID Card", found: "ID card found at campus", confidence: "81%", evidence: ["Document type", "Campus location", "Name initials matched"] },
];

export default function MatchList() {
  return (
    <div className="grid gap-4">
      {matches.map((match) => (
        <article key={match.id} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="rounded-3xl bg-rose-50 p-5 ring-1 ring-rose-100">
              <p className="text-xs font-black uppercase tracking-wide text-rose-700">Lost report</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">{match.lost}</h3>
            </div>

            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-900/20">
              <div className="text-center">
                <p className="text-xl font-black">{match.confidence}</p>
                <p className="text-[10px] uppercase tracking-wide text-slate-300">match</p>
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
              <p className="text-xs font-black uppercase tracking-wide text-emerald-700">Found report</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">{match.found}</h3>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {match.evidence.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>
              ))}
            </div>
            <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-black text-slate-950 hover:bg-slate-50">Review match</button>
          </div>
        </article>
      ))}
    </div>
  );
}

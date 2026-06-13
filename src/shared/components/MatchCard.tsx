type MatchCardProps = {
  title: string;
  subtitle: string;
  location: string;
  confidence: string;
  status?: "Lost" | "Found";
};

const MatchCard = ({ title, subtitle, location, confidence, status = "Found" }: MatchCardProps) => {
  const statusClass = status === "Lost" ? "bg-rose-50 text-rose-700 ring-rose-200" : "bg-emerald-50 text-emerald-700 ring-emerald-200";

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusClass}`}>{status}</span>
          <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">{subtitle}</p>
        </div>
        <div className="rounded-2xl bg-slate-950 px-3 py-2 text-center text-white">
          <p className="text-sm font-black">{confidence}</p>
          <p className="text-[10px] uppercase tracking-wide text-slate-300">match</p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
        <p className="font-medium text-slate-500">{location}</p>
        <button className="font-bold text-slate-950 hover:underline">View details</button>
      </div>
    </article>
  );
};

export default MatchCard;

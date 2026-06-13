import MatchCard from "../../../shared/components/MatchCard";

const results = [
  { id: 1, title: "Black leather wallet", type: "Found" as const, location: "Shahr-e-Naw Market", confidence: "91%", subtitle: "Found near a cafe with cards inside. Owner verification required." },
  { id: 2, title: "iPhone 13 Pro", type: "Lost" as const, location: "Macroyan area", confidence: "87%", subtitle: "Lost phone with dark case. Last seen near taxi stand." },
  { id: 3, title: "Blue school bag", type: "Found" as const, location: "University Gate", confidence: "78%", subtitle: "Blue backpack with books and stationery." },
];

export default function SearchResults() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-950">Recommended results</h2>
          <p className="mt-1 text-sm text-slate-500">Sorted by AI confidence score</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{results.length} results</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {results.map((item) => (
          <MatchCard key={item.id} title={item.title} subtitle={item.subtitle} location={item.location} confidence={item.confidence} status={item.type} />
        ))}
      </div>
    </div>
  );
}

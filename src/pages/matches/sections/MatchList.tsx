const matches = [
  {
    id: 1,
    lost: "Black Wallet",
    found: "Wallet found in cafe",
    confidence: "92%",
  },
  {
    id: 2,
    lost: "iPhone 13",
    found: "Phone found near market",
    confidence: "85%",
  },
];

export default function MatchList() {
  return (
    <div className="space-y-3">
      {matches.map((m) => (
        <div key={m.id} className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-bold">{m.lost}</h3>
          <p className="text-sm text-gray-600">{m.found}</p>
          <span className="text-green-600 text-sm">
            Match Confidence: {m.confidence}
          </span>
        </div>
      ))}
    </div>
  );
}

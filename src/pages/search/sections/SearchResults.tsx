const results = [
  {
    id: 1,
    title: "Black Leather Wallet",
    type: "Found",
    location: "Shahr-e-Naw Market",
    confidence: "91%",
  },
  {
    id: 2,
    title: "iPhone 13 Pro",
    type: "Lost",
    location: "Macroyan area",
    confidence: "87%",
  },
  {
    id: 3,
    title: "Blue School Bag",
    type: "Found",
    location: "University Gate",
    confidence: "78%",
  },
];

export default function SearchResults() {
  return (
    <div className="space-y-3">
      {results.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>

          <div className="text-right">
            <span
              className={`text-xs px-2 py-1 rounded ${
                item.type === "Lost"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {item.type}
            </span>

            <p className="text-sm text-green-600 mt-1">
              Match: {item.confidence}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";

export default function SearchHeader() {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Search Lost & Found Items</h1>
      <p className="text-gray-500">
        Use AI-powered search to find matching items faster
      </p>

      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search: wallet, phone, bag..."
          className="w-full border p-3 rounded-lg"
        />

        <button className="bg-black text-white px-5 rounded-lg">Search</button>
      </div>
    </div>
  );
}

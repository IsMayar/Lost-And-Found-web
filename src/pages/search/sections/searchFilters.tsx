export default function SearchFilters() {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <h2 className="font-semibold">Filters</h2>

      <div className="grid md:grid-cols-4 gap-3">
        <select className="border p-2 rounded">
          <option>All Types</option>
          <option>Lost</option>
          <option>Found</option>
        </select>

        <select className="border p-2 rounded">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Documents</option>
          <option>Bags</option>
        </select>

        <select className="border p-2 rounded">
          <option>Any Location</option>
          <option>Kabul</option>
          <option>Dubai</option>
        </select>

        <select className="border p-2 rounded">
          <option>Sort by</option>
          <option>Newest</option>
          <option>Best Match</option>
          <option>Confidence</option>
        </select>
      </div>
    </div>
  );
}

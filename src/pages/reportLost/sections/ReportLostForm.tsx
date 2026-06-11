export default function ReportLostForm() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Report Lost Item</h1>

      <input
        className="w-full border p-2 rounded text-gray-900 placeholder:text-gray-400"
        placeholder="Item name (e.g. Wallet, Phone)"
      />

      <textarea
        className="w-full border p-2 rounded text-gray-900 placeholder:text-gray-400"
        placeholder="Description"
      />

      <input
        className="w-full border p-2 rounded text-gray-900 placeholder:text-gray-400"
        placeholder="Location lost"
      />

      <button className="w-full bg-red-600 text-white p-2 rounded">
        Submit Report
      </button>
    </div>
  );
}

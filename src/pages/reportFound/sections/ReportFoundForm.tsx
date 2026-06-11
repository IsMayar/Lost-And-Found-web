export default function ReportFoundForm() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Report Found Item</h1>

      <input
        className="w-full border p-2 rounded text-gray-900 placeholder:text-gray-400"
        placeholder="Item type"
      />
      <textarea
        className="w-full border p-2 rounded text-gray-900 placeholder:text-gray-400"
        placeholder="Where found?"
      />
      <textarea
        className="w-full border p-2 rounded text-gray-900 placeholder:text-gray-400"
        placeholder="Description"
      />

      <button className="w-full bg-green-600 text-white p-2 rounded">
        Submit Found Item
      </button>
    </div>
  );
}

export default function QuickActions() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <button className="p-4 bg-blue-600 text-white rounded-xl">
        Report Lost Item
      </button>
      <button className="p-4 bg-green-600 text-white rounded-xl">
        Report Found Item
      </button>
      <button className="p-4 bg-purple-600 text-white rounded-xl">
        AI Match Search
      </button>
    </div>
  );
}

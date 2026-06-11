export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Track lost & found items in real time</p>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-lg">
        + Report Item
      </button>
    </div>
  );
}

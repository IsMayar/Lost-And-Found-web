const stats = [
  { label: "Total Reports", value: "1,240" },
  { label: "Matched Items", value: "312" },
  { label: "Active Searches", value: "98" },
  { label: "Success Rate", value: "74%" },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">{s.label}</p>
          <h2 className="text-xl font-bold">{s.value}</h2>
        </div>
      ))}
    </div>
  );
}

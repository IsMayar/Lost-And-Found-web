const activities = [
  "John reported a lost wallet",
  "AI matched 3 new items",
  "Sara found a phone",
  "New search request created",
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-3">Recent Activity</h2>
      <ul className="space-y-2 text-sm text-gray-600">
        {activities.map((a, i) => (
          <li key={i}>• {a}</li>
        ))}
      </ul>
    </div>
  );
}

import DashboardHeader from "./sections/DashboardHeader";
import StatsGrid from "./sections/StatsGrid";
import RecentActivity from "./sections/RecentActivity";
import QuickActions from "./sections/QuickActions";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />
      <StatsGrid />
      <QuickActions />
      <RecentActivity />
    </div>
  );
}

import Container from "../../shared/components/shared/container";
import DashboardHeader from "./sections/DashboardHeader";
import StatsGrid from "./sections/StatsGrid";
import RecentActivity from "./sections/RecentActivity";
import QuickActions from "./sections/QuickActions";

export default function Dashboard() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <Container>
        <div className="space-y-6">
          <DashboardHeader />
          <StatsGrid />
          <QuickActions />
          <RecentActivity />
        </div>
      </Container>
    </section>
  );
}

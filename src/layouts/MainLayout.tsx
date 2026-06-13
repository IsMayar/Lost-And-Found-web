import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import AIChatWidget from "../shared/components/AIChatWidget";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default MainLayout;

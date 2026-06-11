import { Outlet } from "react-router-dom";

import AppNavbar from "../shared/components/layout/AppNavbar";
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <AppNavbar />

      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2026 ShafafHub. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;

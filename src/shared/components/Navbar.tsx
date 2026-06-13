import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "AI Matches", to: "/matches" },
  { label: "Dashboard", to: "/dashboard" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/20">
            <span className="text-lg font-black">F</span>
          </span>
          <span>
            <span className="block text-base font-black tracking-tight text-slate-950">Findly AI</span>
            <span className="block text-xs font-medium text-slate-500">Lost & Found Platform</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/login" className="hidden rounded-full px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 sm:inline-flex">
            Login
          </Link>
          <Link to="/report-lost" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
            Report item
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

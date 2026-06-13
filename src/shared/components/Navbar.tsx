import { Menu, Search, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Search", to: "/search" },
  { label: "AI Matches", to: "/matches" },
  { label: "My Reports", to: "/my-reports" },
  { label: "Dashboard", to: "/dashboard" },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:bg-white/70 hover:text-slate-950"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/20">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-black tracking-tight text-slate-950">Findly AI</span>
            <span className="block text-xs font-medium text-slate-500">Trusted lost & found</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Link to="/notifications" className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
            Alerts
          </Link>
          <Link to="/login" className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
            Login
          </Link>
          <Link to="/report-lost" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
            Report item
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={navClass}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/search" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700">
              <Search className="h-4 w-4" /> Search items
            </Link>
            <Link to="/report-lost" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white">
              Report item
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

import { Link } from "react-router-dom";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-slate-50 px-4 py-16">
      <div className="max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <SearchX className="mx-auto h-10 w-10 text-slate-400" />
        <h1 className="mt-5 text-3xl font-black text-slate-950">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you opened does not exist in this prototype.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800">Back home</Link>
      </div>
    </main>
  );
}

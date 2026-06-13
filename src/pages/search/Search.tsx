import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { mockReports, type ReportCategory, type ReportType } from "../../features/reports";
import { Container, ReportCard } from "../../shared/components";

const categories: (ReportCategory | "All")[] = ["All", "Phone", "Wallet", "Bag", "Keys", "Document", "Laptop", "Pet", "Other"];
const types: (ReportType | "all")[] = ["all", "lost", "found"];

export function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ReportCategory | "All">("All");
  const [type, setType] = useState<ReportType | "all">("all");

  const filteredReports = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return mockReports.filter((report) => {
      const matchesQuery = !normalized || [report.title, report.description, report.location, report.color, report.brand, report.category]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(normalized);
      const matchesCategory = category === "All" || report.category === category;
      const matchesType = type === "all" || report.type === type;
      return matchesQuery && matchesCategory && matchesType;
    });
  }, [query, category, type]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
                <SearchIcon className="h-4 w-4" /> AI Search
              </p>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Search lost and found reports.</h1>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                Use natural keywords like “black phone near university” or filter by item type, category, date, and location. The UI is ready for real backend search later.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4">
              <label className="block">
                <span className="text-sm font-black text-slate-700">Describe what you lost or found</span>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-slate-950 focus-within:ring-4 focus-within:ring-slate-950/10">
                  <SearchIcon className="h-5 w-5 text-slate-400" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="e.g. black iPhone with blue case near Kabul University"
                    className="w-full bg-transparent text-slate-950 outline-none placeholder:text-slate-400"
                  />
                </div>
              </label>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-wrap gap-2">
              {types.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setType(item)}
                  className={`rounded-full px-4 py-2 text-sm font-black capitalize transition ${type === item ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:text-slate-950"}`}
                >
                  {item === "all" ? "All reports" : item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-slate-400" />
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? "bg-cyan-600 text-white" : "border border-slate-200 bg-white text-slate-600 hover:text-slate-950"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
              <Filter className="h-4 w-4" /> Results
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{filteredReports.length} matching reports</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">Results are currently powered by mock data. Later this screen can connect to backend search, saved alerts, and vector similarity.</p>
        </div>

        {filteredReports.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredReports.map((report) => (
              <ReportCard key={report.id} report={report} onView={() => navigate(`/items/${report.id}`)} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
            <h3 className="text-xl font-black text-slate-950">No reports found</h3>
            <p className="mt-2 text-slate-500">Try a broader keyword or reset filters.</p>
          </div>
        )}
      </Container>
    </main>
  );
}

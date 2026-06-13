import { SearchResults } from "./sections";
import SearchFilters from "./sections/SearchFilters";
import SearchHeader from "./sections/SearchHeader";

export function Search() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SearchHeader />
      <SearchFilters />
      <SearchResults
        onViewReport={(report) => {
          console.log("View report:", report.id);
        }}
      />
    </main>
  );
}

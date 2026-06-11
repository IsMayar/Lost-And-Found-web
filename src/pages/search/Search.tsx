import SearchFilters from "./sections/searchFilters";
import SearchHeader from "./sections/searchHeader";
import SearchResults from "./sections/SearchResults";

export default function Search() {
  return (
    <div className="p-6 space-y-6">
      <SearchHeader />
      <SearchFilters />
      <SearchResults />
    </div>
  );
}

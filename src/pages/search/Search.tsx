import Container from "../../shared/components/shared/container";
import SearchFilters from "./sections/searchFilters";
import SearchHeader from "./sections/searchHeader";
import SearchResults from "./sections/SearchResults";

export default function Search() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <Container>
        <div className="space-y-6">
          <SearchHeader />
          <SearchFilters />
          <SearchResults />
        </div>
      </Container>
    </section>
  );
}

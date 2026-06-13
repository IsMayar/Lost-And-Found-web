import Container from "../../shared/components/shared/container";
import MatchHeader from "./sections/MatchHeader";
import MatchList from "./sections/MatchList";

export default function Matches() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <Container>
        <div className="space-y-6">
          <MatchHeader />
          <MatchList />
        </div>
      </Container>
    </section>
  );
}

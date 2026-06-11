import MatchHeader from "./sections/MatchHeader";
import MatchList from "./sections/MatchList";

export default function Matches() {
  return (
    <div className="p-6 space-y-4">
      <MatchHeader />
      <MatchList />
    </div>
  );
}

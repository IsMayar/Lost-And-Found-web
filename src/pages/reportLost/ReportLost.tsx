import Container from "../../shared/components/shared/container";
import ReportLostForm from "./sections/ReportLostForm";

export default function ReportLost() {
  return (
    <section className="bg-slate-50 py-10 sm:py-14">
      <Container>
        <ReportLostForm />
      </Container>
    </section>
  );
}

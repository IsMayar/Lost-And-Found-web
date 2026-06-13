import Container from "../../../shared/components/shared/container";

const steps = [
  { number: "01", title: "Submit a report", desc: "Add item details, photo, category, location, date, and contact preference." },
  { number: "02", title: "AI builds matches", desc: "The engine compares visual clues, keywords, semantic meaning, and location distance." },
  { number: "03", title: "Recover securely", desc: "Possible matches are verified before private contact details are shared." },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-600">Process</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">A simple flow designed for real users</h2>
          <p className="mt-4 text-slate-600">The UI should be easy enough for everyone, but strong enough for AI-powered matching.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70">
              <span className="text-sm font-black text-cyan-600">{step.number}</span>
              <h3 className="mt-5 text-xl font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;

import Container from "../../../shared/components/shared/container";

const faqs = [
  { q: "How does AI matching work?", a: "It compares images, descriptions, categories, locations, and report timing to calculate match confidence." },
  { q: "Are users' details public?", a: "No. Contact details should stay hidden until a match is verified and both sides are ready to connect." },
  { q: "Can people search without an account?", a: "Yes, public search can be supported while reporting and contact flows can require authentication." },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-600">FAQ</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Questions users will ask first</h2>
            <p className="mt-4 leading-7 text-slate-600">Answer privacy, matching, and usage clearly to increase trust.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-black text-slate-950">{faq.q}</p>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;

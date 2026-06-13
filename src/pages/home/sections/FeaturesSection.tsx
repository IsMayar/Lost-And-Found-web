import Container from "../../../shared/components/shared/container";

const features = [
  { title: "Vision AI", desc: "Photo-based item matching for phones, bags, documents, wallets, and more." },
  { title: "Semantic search", desc: "Understands meaning, not only exact keywords, for better discovery." },
  { title: "Location intelligence", desc: "Prioritizes nearby reports and relevant time windows." },
  { title: "Private messaging", desc: "Keeps users anonymous until a recovery is verified." },
  { title: "Admin dashboard", desc: "Track reports, active searches, match quality, and recovery activity." },
  { title: "Multilingual ready", desc: "Designed for English, Dari, and Pashto experiences." },
];

const FeaturesSection = () => {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Features</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight">Built like a real AI product, not a basic form website.</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-300">Professional flows, clean cards, confidence scoring, and clear trust signals make the app feel reliable.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
              <div className="mb-5 h-11 w-11 rounded-2xl bg-cyan-300/15 ring-1 ring-cyan-300/20" />
              <h3 className="text-lg font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;

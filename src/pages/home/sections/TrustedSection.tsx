import Container from "../../../shared/components/shared/container";

const partners = ["Universities", "Transport hubs", "Markets", "Schools", "Hospitals", "Local businesses"];

const TrustedSection = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-400">Trusted spaces</p>
          <div className="flex flex-wrap gap-3">
            {partners.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustedSection;

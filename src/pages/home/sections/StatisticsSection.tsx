import Container from "../../../shared/components/shared/container";

const stats = [
  { value: "10K+", label: "Items reported" },
  { value: "8.4K", label: "Potential matches" },
  { value: "5K+", label: "Active users" },
  { value: "15+", label: "Cities covered" },
];

const StatisticsSection = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-slate-200 p-8 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="text-4xl font-black text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;

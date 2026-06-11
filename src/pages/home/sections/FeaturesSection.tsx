import Container from "../../../shared/components/shared/container";

const FeaturesSection = () => {
  const features = [
    {
      title: "Vision AI",
      desc: "Match images of lost and found items automatically.",
    },
    {
      title: "Voice Input",
      desc: "Describe lost items using voice messages.",
    },
    {
      title: "Smart Matching",
      desc: "Semantic AI matching beyond keywords.",
    },
    {
      title: "Location Awareness",
      desc: "Prioritize nearby lost/found reports.",
    },
    {
      title: "Multilingual",
      desc: "Supports Dari, Pashto, and English.",
    },
    {
      title: "Privacy First",
      desc: "Users remain anonymous until match confirmation.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-16">
          AI-Powered Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;

import Container from "../../../shared/components/shared/container";

const TrustedSection = () => {
  return (
    <section className="py-16 border-y">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-lg font-medium text-gray-400">
            Trusted by communities across regions
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 opacity-70 text-sm">
          <span>Universities</span>
          <span>Markets</span>
          <span>Transport Hubs</span>
          <span>Local Businesses</span>
          <span>Public Services</span>
        </div>
      </Container>
    </section>
  );
};

export default TrustedSection;

import Container from "../../../shared/components/shared/container";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-16">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl bg-white">
            <p className="font-semibold">Phone Recovered</p>
            <p className="text-gray-500 mt-2">
              Found within 2 hours using AI matching.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white">
            <p className="font-semibold">Wallet Returned</p>
            <p className="text-gray-500 mt-2">
              Matched near bus station instantly.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white">
            <p className="font-semibold">Bag Found</p>
            <p className="text-gray-500 mt-2">
              University student recovered lost bag.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;

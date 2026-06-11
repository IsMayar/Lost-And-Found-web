import Container from "../../../shared/components/shared/container";

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-16">
          How Findly AI Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">1. Report</h3>
            <p className="text-gray-500">
              Submit lost or found item details with image or description.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">2. AI Matching</h3>
            <p className="text-gray-500">
              AI analyzes images, text, location, and time similarity.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">3. Reconnect</h3>
            <p className="text-gray-500">
              Verified matches are securely connected between users.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;

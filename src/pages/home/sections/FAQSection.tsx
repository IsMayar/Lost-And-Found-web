import Container from "../../../shared/components/shared/container";

const FAQSection = () => {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="border p-4 rounded-lg">
            <p className="font-semibold">How does AI matching work?</p>
            <p className="text-gray-500 mt-2">
              It compares image features, text descriptions, and location data.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <p className="font-semibold">Is my data private?</p>
            <p className="text-gray-500 mt-2">
              Yes, users remain anonymous until confirmation.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <p className="font-semibold">Is it free?</p>
            <p className="text-gray-500 mt-2">
              Yes, core features are free for all users.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;

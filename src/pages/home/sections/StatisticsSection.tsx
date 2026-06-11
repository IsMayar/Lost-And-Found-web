import Container from "../../../shared/components/shared/container";

const StatisticsSection = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="text-gray-500">Items Reported</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">8K+</h3>
            <p className="text-gray-500">Matches Found</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5K+</h3>
            <p className="text-gray-500">Active Users</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-gray-500">Cities Covered</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;

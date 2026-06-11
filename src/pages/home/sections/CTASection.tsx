import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import Container from "../../../shared/components/shared/container";

const CTASection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">Ready to Find What Matters?</h2>

          <p className="text-gray-400 mt-4">
            Join Findly AI and reconnect lost items faster than ever.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/report-lost">
              <Button variant="primary">Report Lost Item</Button>
            </Link>

            <Link to="/report-found">
              <Button variant="outline">Report Found Item</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;

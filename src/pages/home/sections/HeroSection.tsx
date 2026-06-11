import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import Container from "../../../shared/components/shared/container";

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32">
        {" "}
        <div className="absolute inset-0 -z-10">
          {" "}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />{" "}
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />{" "}
        </div>
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
                AI-Powered Lost & Found Platform
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
                Find Lost Items Faster With AI
              </h1>

              <p className="mt-6 max-w-xl text-lg text-default-600">
                Findly AI intelligently matches lost and found reports using
                descriptions, images, location data, and advanced AI matching
                technology.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/report-lost">
                  <Button variant="primary" size="lg">
                    Report Lost Item
                  </Button>
                </Link>

                <Link to="/report-found">
                  <Button variant="outline" size="lg">
                    Report Found Item
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-3xl font-bold">10K+</h3>
                  <p className="text-default-500">Items Reported</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">92%</h3>
                  <p className="text-default-500">Matching Accuracy</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">24/7</h3>
                  <p className="text-default-500">AI Assistance</p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="rounded-xl border p-4">
                    <p className="font-semibold">Lost Item</p>
                    <p className="text-default-500">Black Samsung Phone</p>
                  </div>

                  <div className="flex justify-center">
                    <span className="rounded-full bg-success/20 px-4 py-2 text-success">
                      92% Match Found
                    </span>
                  </div>

                  <div className="rounded-xl border p-4">
                    <p className="font-semibold">Found Item</p>
                    <p className="text-default-500">
                      Samsung Galaxy Near Kabul University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;

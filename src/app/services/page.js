import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="hero min-h-60 relative">
        <Image
          fill
          src="/f12.jpg"
          className="w-full h-full object-cover z-0"
          alt="construction site"
        />
        <div className="overlay absolute z-10 w-full h-full flex flex-col justify-center items-center sm:items-start sm:pl-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-md text-white ">
              <h2 className="mb-5 text-5xl pt-20  font-bold text-center">
                Our Services
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
              Creativity & innovation
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
              Our Vision
            </h2>
            <p className="mb-5 pt-6 text-lg font-serif leading-relaxed text-zinc-700">
              From minor works to major infrastructure projects, Zander&apos;s
              Construction Company has a proven record of engineering excellence
              in Nigeria. We combine local and international experience to
              deliver cost-effective, tailor-made solutions backed by strong
              financial capacity and robust project management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 lg:flex-row">
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/f13.jpg"
              alt="High-rise building construction"
              className="h-auto w-full max-w-md rounded-xl object-cover shadow-xl"
              width={600}
              height={400}
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
              Excellence in structures
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
              Building Construction
            </h2>
            <p className="mt-6 text-lg font-serif leading-relaxed text-zinc-700">
              We deliver robust residential, commercial, and industrial
              buildings, carefully considering construction costs, lifecycle
              performance, safety regulations, and potential risks. Every
              project is executed with precision and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 lg:flex-row">
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
              Infrastructure & networks
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
              Civil Engineering
            </h2>
            <p className="mt-6 text-lg font-serif leading-relaxed text-zinc-700">
              We design, construct, and maintain critical infrastructure,
              including roads, bridges, canals, airports, water systems, and
              structural components of buildings. Our team ensures durability,
              safety, and long-term performance.
            </p>
          </div>
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/f145.jpg"
              alt="Civil engineering project site"
              className="h-auto w-full max-w-md rounded-xl object-cover shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 lg:flex-row">
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/f13.jpg"
              alt="Construction management meeting"
              className="h-auto w-full max-w-md rounded-xl object-cover shadow-xl"
              width={600}
              height={400}
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
              End-to-end support
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
              Project Management
            </h2>
            <p className="mt-6 text-lg font-serif leading-relaxed text-zinc-700">
              Beyond construction, we provide full project lifecycle management,
              from planning and design coordination to delivery and maintenance,
              ensuring smooth execution and transparent communication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

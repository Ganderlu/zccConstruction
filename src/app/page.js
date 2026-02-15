import Link from "next/link";
import Hero from "./component/Hero";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 lg:flex-row">
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/abb.jpg"
              alt="Engineers reviewing construction plans"
              className="h-auto w-full max-w-md rounded-xl object-cover shadow-xl"
              width={600}
              height={600}
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
              Creativity & innovation
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-700">
              Zander&apos;s Construction Company provides comprehensive services for
              the planning, design, engineering, construction, operation, and
              maintenance of buildings, infrastructure, and industrial projects.
              With over 5 years of experience, we have built a solid reputation
              on professionalism, integrity, and service excellence.
            </p>
            <div className="pt-6">
              <Link
                href="/about"
                className="btn bg-red-800 text-white border-none rounded-full px-8"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl justify-center px-5 py-16">
          <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              className="h-[220px] w-full sm:h-[320px] lg:h-[450px]"
              src="https://www.youtube.com/embed/vRjGVS1FIwk"
              title="Zander's Construction Company overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
            Choose Us
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700">
            We are clear on our vision, values, and purpose, and these guide our
            long-term strategies and day-to-day activities. We are one of the
            fastest growing and most dynamic construction and civil engineering
            companies in Nigeria, committed to delivering exceptional quality,
            innovation, and long-lasting value on every project.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 lg:flex-row">
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
              Excellence in delivery
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-700">
              From minor works to large-scale infrastructure, Zander&apos;s Construction
              Company has a proven record of engineering excellence. We combine
              technical expertise, local knowledge, and meticulous project
              management to deliver projects safely, on time, and to the highest
              quality standards.
            </p>
          </div>
          <div className="order-1 flex justify-center lg:order-2 lg:w-1/2">
            <img
              src="/ser.jpg"
              alt="Construction workers on site"
              className="h-auto w-full max-w-md rounded-xl object-cover shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="bg-red-800">
        <div className="mx-auto flex h-80 max-w-6xl flex-col items-center justify-center px-5 text-center">
          <p className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build the future. Together.
          </p>
          <Link
            href="/contact"
            className="btn mt-7 border-none bg-white px-8 text-red-800 hover:bg-zinc-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;

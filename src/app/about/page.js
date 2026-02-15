import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white">
      <div className="hero min-h-60 relative">
        <Image
          fill
          src="/abbout.jpg"
          className="w-full h-full object-cover z-0"
          alt="construction site"
        />
        <div className="overlay absolute z-10 w-full h-full flex flex-col justify-center items-center sm:items-start sm:pl-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-md text-white ">
              <h2 className="mb-5 text-5xl pt-20  font-bold text-center">
                About Us
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 lg:flex-row">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
              Who we are
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
              Best and Reliable
            </h2>
            <p className="mb-5 pt-6 text-lg font-serif leading-relaxed text-zinc-700">
              Zander&apos;s Construction Company is a world-class engineering and
              construction company with a reputation for technical excellence and
              dependable delivery. We operate across Nigeria and the wider
              African region, bringing together experienced professionals,
              modern technology, and strict safety standards on every project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 text-black md:flex-row">
          <div className="md:w-1/3">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-800">
              Who we are
            </p>
            <p className="text-lg font-serif leading-relaxed">
              We provide quality construction services that drive innovation,
              sustainability, and efficiency in every project.
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-800">
              Our mission
            </p>
            <p className="text-lg font-serif leading-relaxed">
              To build spaces and infrastructure that exceed expectations and
              stand the test of time.
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-800">
              Core values
            </p>
            <p className="text-lg font-serif leading-relaxed">
              Dedication, excellence, professionalism, innovation, social
              responsibility, and trustworthiness.
            </p>
          </div>
        </div>
      </section>

      <div className="hero min-h-screen relative">
        <Image
          fill
          src="/construction.jpg"
          className="w-full h-full object-cover z-0"
          alt="construction site"
        />
        <div className="overlay absolute z-10 w-full h-full flex flex-col justify-center items-center px-4">
          <div className="container flex flex-col gap-8 px-4 lg:flex-row">
            <div className="max-w-xl">
              <h1 className="title text-4xl mb-4 sm:text-5xl lg:text-6xl font-bold text-white">
                We Prepare
                <br />
                For The <span className="text-red-800">Future</span>
              </h1>

              <p className="mb-7 max-w-xl text-sm text-zinc-300 sm:text-base lg:text-lg">
                We provide the best architectural design, construction, and
                building maintenance services for you, combining innovation with
                practical on-site expertise.
              </p>
            </div>
            <div className="flex justify-center lg:w-1/2">
              <Image
                src="/zanda.jpg"
                alt="Construction team at work"
                className="h-auto w-full max-w-md rounded-xl object-cover shadow-xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white">
        <div className="mx-auto flex h-72 max-w-6xl flex-col items-center justify-center px-5 text-center">
          <p className="text-3xl font-bold text-black sm:text-4xl">
            Let&apos;s build the future. Together.
          </p>
          <button className="btn mt-7 bg-red-800 text-white border-none">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

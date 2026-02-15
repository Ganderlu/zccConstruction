const Projects = () => {
  return (
    <>
      <div
        className="min-h-60"
        style={{
          backgroundImage: 'url("/construction.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex min-h-60 items-center justify-center bg-black/70 px-4 py-12">
          <div className="max-w-2xl text-center text-white">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              Our Projects
            </h2>
            <p className="text-sm text-zinc-200 sm:text-base">
              A snapshot of the residential, commercial, and infrastructure
              projects we have successfully delivered.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/ttower.jpg"
                  alt="High-rise office tower"
                  className="h-56 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-black">Urban Office Tower</h3>
                <p className="text-sm text-zinc-700">
                  A modern high-rise office complex featuring efficient space
                  planning and sustainable building systems.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/tower.jpg"
                  alt="Residential estate"
                  className="h-56 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-black">Residential Estate</h3>
                <p className="text-sm text-zinc-700">
                  A serene residential development designed for comfort, safety,
                  and community living.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/f11.jpg"
                  alt="Infrastructure project"
                  className="h-56 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-black">Infrastructure Works</h3>
                <p className="text-sm text-zinc-700">
                  Civil engineering works delivering durable roads and essential
                  public infrastructure for growing communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

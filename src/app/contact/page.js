const Contact = () => {
  return (
    <div className="bg-white">
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
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Contact Us</h2>
            <p className="text-sm sm:text-base text-zinc-200">
              Have a project in mind or need more information? Reach out and
              our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="card lg:card-side gap-8 bg-white text-black shadow-xl">
          <div className="flex flex-1 flex-col gap-3 p-10">
            <p className="font-semibold">Name*</p>
            <label className="input input-bordered flex items-center gap-2 bg-zinc-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Full name" />
          </label>

            <p className="pt-3 font-semibold">Phone number*</p>
            <label className="input input-bordered flex items-center gap-2 bg-zinc-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Phone number" />
          </label>

            <p className="pt-3 font-semibold">Email*</p>
            <label className="input input-bordered flex items-center gap-2 bg-zinc-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email address" />
          </label>

            <p className="pt-3 font-semibold">Message*</p>
            <label className="input input-bordered flex h-40 w-full items-start gap-2 bg-zinc-100 pb-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className=" h-5 w-5 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Your message" />
          </label>

            <button className="btn mt-5 w-40 border-none bg-red-800 text-white sm:btn-sm md:btn-md lg:btn-lg">
              Send
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-2 p-10 text-black">
            <h2 className="text-3xl font-bold">Zander&apos;s Construction Company</h2>
            <p className="pt-4 text-zinc-700">
              72 Campbell Street
              <br />
              Delta State
              <br />
              Delta - Nigeria
            </p>
            <p className="pt-6 text-zinc-700">
              Tel.: +234 (0)902 322 0000
              <br />
              E-mail: zanderconstruction.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

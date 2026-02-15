import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen relative">
        <Image
          fill
          src="/construction.jpg"
          className="w-full h-full object-cover z-0"
          alt="construction site"
        />
        <div className="overlay absolute z-10 w-full h-full flex flex-col justify-center items-center sm:items-start sm:pl-8 px-4 animate-fade-in-soft">
          <div className="container mx-auto">
            <div className="max-w-2xl animate-fade-up">
              <h1 className="title text-white text-4xl mb-4 sm:text-5xl lg:text-6xl font-bold">
                Construct Your
                <br />
                Vision To <span className="text-red-600">Reality</span>
              </h1>

              <p className="mb-7 text-white font-sans text-sm sm:text-base lg:text-lg md:max-w-xl font-normal leading-relaxed">
                We provide the best architectural design,
                construction, and building maintenance services
                for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

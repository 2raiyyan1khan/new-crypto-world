const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center sm:justify-between justify-center py-10">
      <div className="space-y-5 sm:text-left text-center md:w-3/4">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-800">
          Hey, Welcome!
        </h1>
        <p className="dark:text-gray-400 text-gray-600 font-semibold lg:text-2xl md:text-xl">
          Get Real-Time Prices, Latest News, and Historical Insights at Your
          Fingertips
        </p>
      </div>
      <div className="md:w-2/4 sm:block hidden">
        <img src="/hero.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;

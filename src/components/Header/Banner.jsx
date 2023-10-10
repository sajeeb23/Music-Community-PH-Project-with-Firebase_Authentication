const Banner = () => {
    return (
      <div className="py-10 relative">
        <img
          src="https://i.ibb.co/YhRLjS8/aditya-chinchure-Zh-QCZjr9f-Ho-unsplash.jpg" className="w-11/12 mx-4 md:mx-12 lg:mx-16 opacity-30" alt=""
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-7xl rounded-r-3xl rounded-l-3xl p-5 font-semibold bg-opacity-10 bg-slate-950">
            Your Musical Journey Begins Here!
          </h1>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
import React from "react";
import hireMe from "../assets/images/tal.jpeg"; // Update this path to point to your uploaded image.

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I am a passionate and hardworking PHP/ReactJS developer, ready to take on challenging projects and deliver exceptional results. Let’s collaborate and turn your ideas into reality!
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={hireMe}
            alt="Hire Me"
            className="lg:h-[18rem] h-56 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;

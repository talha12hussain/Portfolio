import React from "react";
import aboutImg from "../assets/images/tal.jpeg"; // Use your uploaded image here

const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="flex-1 p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hello! My name is Talha Hussain, and I am a passionate and motivated PHP/ReactJS Developer. With a solid foundation in web development, I specialize in creating dynamic, user-friendly websites and applications.

As a fresher, I am eager to bring my technical knowledge and problem-solving skills to real-world projects. I am always excited to learn and grow, staying up to date with the latest web technologies to deliver efficient and scalable solutions.

In addition to my expertise in ReactJS, HTML, CSS, and JavaScript, I have hands-on experience with PHP for back-end development, ensuring seamless integration between front-end and back-end systems.
              </p>

         

              <a href="./src/assets/talha_cv.pdf" download>
                <button className="btn-primary mt-10">Download CV</button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-80 w-full relative max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt="Talha Hussain"
                className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-cyan-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

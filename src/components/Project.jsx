import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/eshope.png";
import project2 from "../assets/images/agency.png";
import project3 from "../assets/images/multi.png";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/tal.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "EShope",
      github_link: "https://github.com/talha12hussain/reactecomerce",
      live_link: "https://myeshope.netlify.app/",
    },
    {
      img: project2,
      name: "Debug Entity",
      github_link: "https://github.com/talha12hussain/agency",
      live_link: "https://agencywebsite123.netlify.app/",
    },
    {
      img: project3,
      name: "Multi Ecommerce Shope",
      github_link: "https://github.com/talha12hussain/reactecomerce-website",
      live_link: "https://mutilecomerceshope.netlify.app",
    },
   /* {
      img: project4,
      name: "React Nav",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: project5,
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },*/
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        {/* Projects Carousel */}
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 0, // No pause between slides
              disableOnInteraction: false,
            }}
            speed={2000} // Smooth continuous transition speed
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl shadow-lg hover:scale-105 transition-transform">
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <h3 className="text-xl my-4 font-bold">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 rounded-lg hover:bg-cyan-600 hover:text-white"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 rounded-lg hover:bg-cyan-600 hover:text-white"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Project Person Image */}
        <div className="lg:flex hidden justify-center items-center">
          <div className="relative bg-cyan-600 rounded-full p-1 lg:w-[18rem] lg:h-[18rem]">
            <div className="bg-gray-800 rounded-full overflow-hidden">
              <img
                src={project_person}
                alt="Project Person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

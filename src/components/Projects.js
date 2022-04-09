import React from 'react';
import { MdComputer } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Nova Technology',
      description: 'online cell phone sales and repair system',
      photo: 'https://res.cloudinary.com/draxircbk/image/upload/v1648419927/jhmesseroux/nova_1_grisox.png',
      tags: 'Web | Fullstack | Nodejs | Reactjs',
      gitFront: 'https://github.com/AtomoTechnology/Nova-front',
      gitBack: 'https://github.com/AtomoTechnology/Nova-back',
    },
    {
      id: 2,
      title: 'UTN school system ',
      description: 'online cell phone sales and repair system',
      photo:
        'https://res.cloudinary.com/draxircbk/image/upload/v1648420382/jhmesseroux/students-with-laptop-medium-shot_1_ddhuvg.jpg',
      tags: 'Desktop | Fullstack | C# | ASP.net',
      gitBack: 'https://github.com/AtomoTechnology/TP2-Sysacad',
    },
  ];
  return (
    <div id="projects" className="bg-blue-500 projects mt-4">
      <div className="container">
        <div className="flex gap-4 my-4 items-center ">
          <MdComputer
            fontSize={25}
            className="flex w-12 h-12 p-2 rounded-full justify-center items-center bg-white  shadow-md text-blue-500"
          />
          <span className="title-form  text-4xl text-white">Projects</span>
        </div>
        <div className="projects-grid items-center justify-center gap-4 p-8 grid grid-t-500">
          {projects.map((p, index) => (
            <div key={index} className="project flex cursor-pointer    shadow-md bg-white rounded-sm">
              <div className="img-project relative  object-cover">
                <div className="overlay  hidden absolute top-0 left-0 w-full h-full gap-4 justify-center items-center">
                  {p.gitBack && (
                    <a
                      data-tooltip="Back End"
                      className=" tooltip red w-8 h-8 !rounded-full  flex items-center bg-white text-blue-500 justify-center shadow-2xl"
                      href={p.gitBack}
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  )}
                  {p.gitFront && (
                    <a
                      data-tooltip="Front End"
                      className=" tooltip red w-8 h-8 !rounded-full  flex items-center bg-white text-blue-700 justify-center shadow-2xl"
                      href={p.gitFront}
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  )}

                  <button to="" className="btn">
                    <a href="">See Demo</a>
                  </button>
                </div>
                <img src={p.photo} alt={p.title} className="object-cover h-full " />
              </div>
              <div className="project-body flex flex-col gap-4  p-6">
                <h3 className="font-bold text-2xl text-blue-500">{p.title}</h3>
                <p className="text-md ">{p.description}</p>
                <span className="lenguages text-sm text-red-500">{p.tags}</span>
                <div className="source-code flex gap-3 items-center">
                  {p.gitBack && (
                    <a
                      data-tooltip="Back End"
                      className=" tooltip red w-8 h-8 !rounded-full  flex items-center bg-white text-blue-500 justify-center shadow-2xl"
                      href={p.gitBack}
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  )}
                  {p.gitFront && (
                    <a
                      data-tooltip="Front End"
                      className=" tooltip red w-8 h-8 !rounded-full  flex items-center bg-white text-blue-700 justify-center shadow-2xl"
                      href={p.gitFront}
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  )}
                </div>
                <button to="" className="btn  btn-default">
                  <a href="">See Demo</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

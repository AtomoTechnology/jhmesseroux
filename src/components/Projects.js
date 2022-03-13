import React from 'react';
import { MdComputer } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import novatech from './../images/projects/nova.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Nova Technology',
      description: 'online cell phone sales and repair system',
      photo: novatech,
      tags: 'Web | Fullstack | Nodejs | Reactjs',
    },
    {
      id: 2,
      title: 'UTN school system ',
      description: 'online cell phone sales and repair system',
      photo: novatech,
      tags: 'Desktop | Fullstack | C# | ASP.net',
    },
  ];
  return (
    <div className="bg-blue-500 projectx">
      <div className="container">
        <div className="flex gap-4 my-4 items-center ">
          <MdComputer
            fontSize={25}
            className="flex w-12 h-12 p-2 rounded-full justify-center items-center bg-white  shadow-md text-blue-500"
          />
          <span className="title-form  text-4xl text-white">Projects</span>
        </div>
        <div className="projects-grid items-center justify-center gap-4 p-8 grid grid-t-500">
          {projects.map((p) => (
            <div className="project flex cursor-pointer   shadow-md bg-white rounded-sm">
              <div className="img-project  object-cover">
                <img src={p.photo} alt={p.title} className="object-cover h-full " />
              </div>
              <div className="project-body flex flex-col gap-4 bg-gray-100 p-6">
                <h3 className="font-bold text-2xl text-blue-500">{p.title}</h3>
                <p className="text-md ">{p.description}</p>
                <span className="lenguages text-sm text-red-500">{p.tags}</span>
                <div className="source-code flex gap-3 items-center">
                  <a
                    data-tooltip="Back End"
                    className=" tooltip red w-8 h-8 !rounded-full  flex items-center bg-gray-800 text-white justify-center shadow-2xl"
                    href="#"
                  >
                    <BsGithub />
                  </a>
                  <a
                    data-tooltip="Front End"
                    className=" tooltip red w-8 h-8 !rounded-full  flex items-center bg-gray-800 text-white justify-center shadow-2xl"
                    href="#"
                  >
                    <BsGithub />
                  </a>
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

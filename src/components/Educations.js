import React from 'react';
import { MdSchool } from 'react-icons/md';

const Educations = () => {
  const educations = [
    {
      id: 1,
      grade: 'Elementary School',
      schoolName: 'Boisrond Tonnerre de Torbeck',
      location: 'Sud,Torbeck,Haiti',
      date: 'Sept 2003 - Jul 2010',
    },
    {
      id: 2,
      grade: 'High School',
      schoolName: 'College Saint Jean',
      location: 'Sud - Cayes -  Haiti',
      date: 'Sept 2010 - Jul 2017',
    },
    {
      id: 3,
      grade: 'College',
      schoolName: 'UTN - Universidad Tecnologica Nacional',
      location: 'Santa Fe,Rosario, Argentina',
      date: 'Mar 2018 - Present',
    },
  ];
  return (
    <section className="educations">
      <div className="container">
        <div className="flex gap-4 my-4 items-center ">
          <MdSchool
            fontSize={25}
            data-tooltip="Education"
            className="flex tooltip w-12 h-12 p-2 rounded-full justify-center items-center bg-white  shadow-md text-blue-500"
          />
          <span className="title-form text-4xl text-white">Education</span>
        </div>
        <div className="educations-grid gap-4 p-8  grid grid-t-300">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="education hover:shadow-lg flex flex-col gap-4 p-6 shadow-md bg-white rounded-sm"
            >
              <h4 className="text-blue-500 text-2xl font-bold">{edu.grade}</h4>
              <p className="font-bold text-gray-900">{edu.schoolName}</p>
              <p className="opacity-90 font-extralight">{edu.location}</p>
              <span className="date bg-blue-500 p-1 w-fit rounded shadow text-white ">{edu.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;

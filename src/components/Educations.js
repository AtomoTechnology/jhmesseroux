import React from 'react';
import { MdSchool } from 'react-icons/md';

const Educations = () => {
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
          <div className="education hover:shadow-lg flex flex-col gap-4 p-6 shadow-md bg-white rounded-sm">
            <h4 className="text-blue-500 text-2xl font-bold">Boirond Tonerre de Torbeck</h4>
            <p className="opacity-90 font-extralight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, quae.
            </p>
            <span className="date bg-blue-500 p-1 w-fit rounded shadow text-white ">Sept 2006 - Juin 2010</span>
          </div>
          <div className="education hover:shadow-lg flex flex-col gap-4 p-6 shadow-md bg-white rounded-sm">
            <h4 className="text-blue-500 text-2xl font-bold">Boirond Tonerre de Torbeck</h4>
            <p className="opacity-90 font-extralight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, quae.
            </p>
            <span className="date bg-blue-500 p-1 w-fit rounded shadow text-white ">Sept 2006 - Juin 2010</span>
          </div>
          <div className="education hover:shadow-lg flex flex-col gap-4 p-6 shadow-md bg-white rounded-sm">
            <h4 className="text-blue-500 text-2xl font-bold">Boirond Tonerre de Torbeck</h4>
            <p className="opacity-90 font-extralight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, quae.
            </p>
            <span className="date bg-blue-500 p-1 w-fit rounded shadow text-white ">Sept 2006 - Juin 2010</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;

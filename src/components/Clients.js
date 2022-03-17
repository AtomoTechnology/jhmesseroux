import React, { useEffect, useState } from 'react';

import sanityClient from './../sanity/client';

const Clients = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type=='contact']  
    `
      )
      .then((data) => setRequests(data))
      .catch((error) => console.log(error));

    return () => {
      setRequests([]);
    };
  }, []);

  return (
    <div className="p-4 bg-gradient">
      <h3 className="text-3xl text-center">Requests</h3>
      <section className="container">
        <div className="grid-t-300 grid gap-4">
          {requests &&
            requests.map((req, index) => (
              <div key={index} className="contact relative shadow p-4 flex bg-white gap-3 flex-col rounded-sm ">
                <div className="header-contact flex flex-col ">
                  <h2 className="font-bold text-gradient text-2xl ">{req.name}</h2>
                  <span className="email text-sm p-1 ">{req.email}</span>
                </div>
                <span className="text-sm">{req.message}</span>
                {/* <div className="info flex justify-between items-center "> */}
                <span className="date absolute top-2 right-2 bg-blue-200 text-blue-900 p-1 shadow  opacity-80">
                  {req.date}
                </span>
                {/* </div> */}
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;

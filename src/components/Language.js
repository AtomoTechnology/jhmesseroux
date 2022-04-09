import React from 'react';
// import English from '../data/img/1.png'; //  forma para una sola  imagen

// const languagesImages = require.context('../data/img', true);

// const kkkk = require.context('../data/img');

export const Language = ({ l }) => {
  return (
    <div className="language bg-white hover:bg-gradient">
      <div className="header-language">
        <img src={`../assets/img/${l.id}.png`} width="40" className="shadow-md border-2" alt={l.name} />
        <h3 className="name"> {l.name} </h3>
        <span className="level shadow border-2 border-blue-200 flex items-center justify-center font-bold rounded-full p-1 w-8 text-center h-8">
          {' '}
          {l.level}{' '}
        </span>
      </div>
      {/* <div className="body">
        <div className="detail">
          <span className="speaking-level">
            <span>
              <i> speaking </i>
            </span>
            <span> {l.speakingLevel}% </span>
          </span>
          <span className="writting-level">
            <span>
              <i> writting </i>
            </span>
            <span> {l.writtingLevel}% </span>
          </span>
          <span className="listenning-level">
            <span> Listenning </span>
            <span> {l.listenningLevel}% </span>
          </span>
        </div>
      </div> */}
    </div>
  );
};

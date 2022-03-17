import wrapperImg from './../data/img/wrapper.png';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
export const Header = () => {
  const toggleMenu = (e) => {
    e.target.classList.toggle('active');
    document.querySelector('#menu-mobile').classList.toggle('active');
  };
  const toggleMenuMobil = (e) => {
    document.querySelector('.menu-hamberger').classList.toggle('active');
    document.querySelector('#menu-mobile').classList.toggle('active');
  };
  // document.onClick((e) => {
  // 	alert('hi');
  // });
  document.onClick = () => {
    console.log('uiu');
    alert('hi');
  };
  return (
    <>
      <div className="menu-mobile" id="menu-mobile">
        <span
          className="absolute cursor-pointer flex items-center !rounded-full w-8 h-8 right-2 top-2 btn"
          onClick={toggleMenuMobil}
        >
          X
        </span>
        <ul className="menu-list-mobile">
          <li>
            <a href="/ghgh"> Skills </a>
          </li>
          <li>
            <a href="#languages"> Lenguages </a>
          </li>
          <li>
            <a href="#footer"> Projects </a>
          </li>
        </ul>
      </div>
      <div className="header  bg-gradient" id="header">
        <div className="menu">
          <div className="flex ">
            <div
              onClick={toggleMenu}
              // style={{ display: 'none' }}
              className="menu-hamberger"
            ></div>
            <ul className="menu-list ml-4">
              <li>
                <a href="/ghgh"> Skills </a>
              </li>
              <li>
                <a href="#languages"> Lenguages </a>
              </li>
              <li>
                <a href="#footer"> Projects </a>
              </li>
            </ul>
          </div>

          <img src="../assets/img/hilaire.png" width="50" alt="" />
        </div>
        <div className="wrapper text-white gap-12 grid-cols-1 grid sm:grid-cols-2 items-center justify-around p-4  ">
          <div className="about-me flex flex-col gap-4 ">
            <h3 className="text-3xl title-name">Hi, I am Messeroux jn. Hilaire</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam quae eum perferendis sunt fuga
              fugit! Commodi quod sed pariatur laudantium veniam, atque cum aperiam nulla impedit. Natus, minima
              doloremque?
            </p>
            <div className="red-socials flex gap-3 mt-4 ">
              <a
                href="#"
                data-tooltip="Facebook"
                className="tooltip red w-8 h-8 rounded-full flex items-center bg-blue-500 justify-center shadow-md"
              >
                <BsFacebook color="white" />
              </a>
              <a
                data-tooltip="YouTube"
                className=" tooltip red w-8 h-8 rounded-full flex items-center bg-red-700 justify-center shadow-md"
                href="#"
              >
                <BsYoutube color="white" />
              </a>
              <a
                data-tooltip="YouTube"
                className=" tooltip red w-8 h-8 rounded-full flex items-center bg-red-500 justify-center shadow-md"
                href="#"
              >
                <BsInstagram color="white" />
              </a>
              <a
                data-tooltip="LinkEdin"
                className=" tooltip red w-8 h-8 rounded-full flex items-center bg-blue-300 justify-center shadow-md"
                href="#"
              >
                <FaLinkedinIn color="white" />
              </a>
            </div>
            <a className="btn btn-blue" href="">
              Download my resume
            </a>
          </div>
          <div className="img flex items-center justify-center">
            <img src={wrapperImg} width="300" alt="wrapper" />
          </div>
        </div>
      </div>
    </>
  );
};

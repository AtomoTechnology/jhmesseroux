import wrapperImg from './../data/img/wrapper.png';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import jhm from './../images/jhmwebsitewhite.png';

import cv from './../data/CV.pdf';
import { useLayoutEffect } from 'react';
export const Header = () => {
  const avatar = 'https://res.cloudinary.com/draxircbk/image/upload/v1649478136/jhmesseroux/hilaire_qzluvj.jpg';
  const toggleMenu = (e) => {
    // e.target.classList.toggle('active');
    document.querySelector('.menu-hamberger').classList.toggle('active');
    document.querySelector('#menu-mobile').classList.toggle('hidden');
  };
  const toggleMenuMobil = (e) => {
    document.querySelector('.menu-hamberger').classList.toggle('active');
    document.querySelector('#menu-mobile').classList.toggle('hidden');
  };
  return (
    <>
      <div className="fixed z-10 hidden w-full h-full" id="menu-mobile">
        <div
          onClick={toggleMenu}
          className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"
        ></div>
        <div className="menu-mobile-content">
          <span
            onClick={toggleMenu}
            className="absolute cursor-pointer flex items-center !rounded-full w-8 h-8 right-2 top-2 btn"
          >
            X
          </span>
          <ul className="menu-list-mobile">
            <li>
              <a href="#skills"> Skills </a>
            </li>
            <li>
              <a href="#languages"> Languages </a>
            </li>
            <li>
              <a href="#projects"> Projects </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="menu-bottom-fixed"
        className=" menu-bottom-fixed hidden justify-around items-center fixed z-50 p-3  left-0 bottom-0 w-full bg-gradient"
      >
        <ul className="flex justify-between gap-3 items-center">
          <li>
            <a href="#skills"> Skills </a>
          </li>
          <li>
            <a href="#languages"> Languages </a>
          </li>
          <li>
            <a href="#projects"> Projects </a>
          </li>
        </ul>
        <div
          onClick={toggleMenu}
          // style={{ display: 'none' }}
          className="menu-hamberger mr-3"
        ></div>
      </div>

      <div className="header  " id="header">
        <div id="menuHideShow" className="menu p-1">
          <div className="flex ">
            <div
              onClick={toggleMenu}
              // style={{ display: 'none' }}
              className="menu-hamberger !hidden"
            ></div>
            <a href="/">
              <img src={jhm} width="170" alt="LOGO JHM" />
            </a>
            <ul className="menu-list ml-4">
              <li>
                <a href="#skills"> Skills </a>
              </li>
              <li>
                <a href="#languages"> Languages </a>
              </li>
              <li>
                <a href="#projects"> Projects </a>
              </li>
            </ul>
          </div>

          <img
            className="bg-white p-1 mx-4 rounded-full shadow border-2 hover:bg-gray-100 hover:p-0 duration-300 cursor-pointer "
            src={avatar}
            width="50"
            alt=""
          />
        </div>
        <div className="wrapper bg-gradient text-white gap-12 grid-cols-1 grid sm:grid-cols-2 items-center justify-around p-4  ">
          <div className="about-me flex flex-col gap-4 ">
            <h3 className="text-3xl title-name">Hi, I am Messeroux jn. Hilaire</h3>
            <p className="description">
              I am a system engineer with innovative ideas, I???m very passionate about development. I try to update
              myself every day by doing trainings, reading books and participating in talks
            </p>
            <div className="red-socials flex gap-3 mt-4 ">
              <a
                target={'_blank'}
                href="https://www.facebook.com/MesserouxTechnology"
                data-tooltip="Facebook"
                className="tooltip red w-8 h-8 rounded-full flex items-center bg-blue-500 justify-center shadow-md"
              >
                <BsFacebook color="white" />
              </a>
              <a
                target={'_blank'}
                data-tooltip="YouTube"
                className=" tooltip red w-8 h-8 rounded-full flex items-center bg-red-700 justify-center shadow-md"
                href="https://www.youtube.com/c/JeanHilaireMesserouxOfficial"
              >
                <BsYoutube color="white" />
              </a>
              <a
                target={'_blank'}
                data-tooltip="Instagram"
                className=" tooltip red w-8 h-8 rounded-full flex items-center bg-red-500 justify-center shadow-md"
                href="https://www.instagram.com/jhmesseroux/"
              >
                <BsInstagram color="white" />
              </a>
              <a
                target={'_blank'}
                data-tooltip="LinkEdin"
                className=" tooltip red w-8 h-8 rounded-full flex items-center bg-blue-300 justify-center shadow-md"
                href="https://www.linkedin.com/in/jhmesseroux/"
              >
                <FaLinkedinIn color="white" />
              </a>
            </div>
            <a className="btn btn-blue" href={cv} download>
              Download my resume
            </a>
          </div>
          <div className="img flex items-center   justify-center">
            <img src={wrapperImg} width="300" alt="wrapper" />
          </div>
        </div>
      </div>
    </>
  );
};

var lastScroll = 0;
window.addEventListener('scroll', () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScroll) {
    document.getElementById('menuHideShow').style.top = '-60px';
  } else {
    document.getElementById('menuHideShow').style.top = '0px';
  }

  lastScroll = scrollTop;
});

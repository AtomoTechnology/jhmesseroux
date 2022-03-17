import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import avatar from './../images/hilaire.png';

const PreFooter = () => {
  return (
    <div className="wrapper-footer  p-8">
      <h3 className="text-3xl text-white font-bold title-name">Reach Out to me!</h3>
      <div className="text-white gap-12 grid-cols-1 grid sm:grid-cols-2 items-center justify-around p-4  ">
        <div className="about-me flex flex-col gap-4 ">
          <p className="description text-gray-900">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
          </p>
          <span>Fullstack Developer </span>
          <div className="info flex flex-col gap-3">
            <p className="flex text-sm gap-2 justify-between">
              <label className="min-w-fit">Location : </label>
              <span>Rosario , Santa Fe Argentina</span>
            </p>
            <p className="flex text-sm gap-2 justify-between">
              <label className="min-w-fit">Email : </label>
              <span>jhmesseroux.developer@gmail.com</span>
            </p>
            <p className="flex text-sm gap-2 justify-between">
              <label className="min-w-fit">Location : </label>
              <span>Rosario , Santa Fe Argentina</span>
            </p>
          </div>
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
        <form action="">
          <h3 className="my-4 text-2xl text-white font-bold">Contact US</h3>
          <fieldset className="">
            <label>Name | Company </label>
            <input type="text" placeholder="Name or Company's name " name="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="type your subject" required name="subject" />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Message</label>
            <textarea type="text" placeholder="type your message" required name="message"></textarea>
          </fieldset>
          <fieldset>
            <button className="btn btn-yellow text-white font-bold"> Contact</button>
          </fieldset>
        </form>
        {/* <div className="img flex   items-center justify-center">
        <img src={avatar} width="300" alt="wrapper" />
      </div> */}
      </div>
    </div>
  );
};

export default PreFooter;

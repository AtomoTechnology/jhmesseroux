import { GiSkills } from 'react-icons/gi';
import parse from 'html-react-parser';
import { skills } from './../data/skills';

const Skills = () => {
  const avatar = 'https://res.cloudinary.com/draxircbk/image/upload/v1649478136/jhmesseroux/hilaire_qzluvj.jpg';

  return (
    <div id="skills lg:w-4/6 xl:m-auto" className="my-4">
      <div className="container">
        <div className="flex gap-4 my-6 items-center ">
          <GiSkills
            fontSize={25}
            className="flex w-12 h-12 p-2 rounded-full justify-center items-center bg-white  shadow-md text-blue-500"
          />
          <span className="title-form text-gradient text-4xl text-white">Skills</span>
        </div>
        <div className="skill-content place-items-center items-center   flex justify-center sm:justify-between sm:flex-nowrap flex-wrap gap-8 ">
          <div className="left-side flex items-center place-items-center w-100">
            {/* <h3 className="my-2">What I do</h3> */}
            <ul>
              <li className="flex place-items-center gap-4">
                <label className="w-28 text-gray-800 text-md font-normal">Communicatin</label>
                <progress
                  color="red"
                  className="bg-red-300 h-2 !rounded-full"
                  id="communication"
                  value="75"
                  max="100"
                ></progress>
              </li>
              <li className="flex place-items-center gap-4">
                <label className="w-28 text-gray-800 text-md font-normal">Leadership</label>
                <progress color="red" className=" h-2 !rounded-full" id="Leadership" value="80" max="100"></progress>
              </li>
              <li className="flex place-items-center gap-4">
                <label className="w-28 text-gray-800 text-md font-normal">Creativity</label>
                <progress
                  color="red"
                  className="bg-red-300 h-2 !rounded-full"
                  id="Creativity"
                  value="85"
                  max="100"
                ></progress>
              </li>
              <li className="flex place-items-center gap-4">
                <label className="w-28 text-gray-800 text-md font-normal">TeamWork</label>
                <progress
                  color="red"
                  className="bg-red-300 h-2 !rounded-full"
                  id="TeamWork"
                  value="80"
                  max="100"
                ></progress>
              </li>
            </ul>
          </div>
          <div className="skills w-96 place-items-center items-center justify-center flex gap-4 flex-wrap ">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-tooltip={skill.tooltip}
                className="skill w-fit h-fit shadow bg-white border-2 border-gray-100 rounded-full p-2 cursor-pointer hover:shadow-xl tooltip"
              >
                {parse(skill.icon)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

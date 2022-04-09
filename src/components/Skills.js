import { GiSkills } from 'react-icons/gi';
import parse from 'html-react-parser';
import { skills } from './../data/skills';

const Skills = () => {
  const avatar = 'https://res.cloudinary.com/draxircbk/image/upload/v1649478136/jhmesseroux/hilaire_qzluvj.jpg';

  return (
    <div id="skills" className="my-4">
      <div className="container">
        <div className="flex gap-4 my-4 items-center ">
          <GiSkills
            fontSize={25}
            className="flex w-12 h-12 p-2 rounded-full justify-center items-center bg-white  shadow-md text-blue-500"
          />
          <span className="title-form text-gradient text-4xl text-white">Skills</span>
        </div>
        <div className="skill-content flex justify-between gap-4 flex-wrap">
          <div className="left-side">
            <h3>What I do</h3>
            <img src={avatar} alt="LOGO" width={200} />
          </div>
          <div className="skills flex gap-4 flex-wrap ">
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

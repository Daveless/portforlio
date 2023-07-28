import Lottie from "lottie-react";
import animationData from "../assets/skills.json";

const Section2 = () => {
  return (
    <section id="Skills" className="w-[80%] max-w-[800px] m-auto">
      <div className="flex flex-row items-center w-[80%] gap-2">
        <span className="flex text-dav-green text-2xl">
          #<h2 className="text-white">Skills</h2>
        </span>
        <hr className="h-[1px] border-dav-green bg-dav-green w-full" />
      </div>
      <div className="flex flex-col md:flex-row md:mt-5 gap-4">
        <Lottie
          className="w-[15rem] md:w-[55rem] mx-auto"
          animationData={animationData}
        />
        <div className="grid grid-cols-2 md:grid-cols-1 md:w-full gap-3 md:gap-5 text-white">
          <div className="flex flex-col border border-dav-border-gray w-full">
            <div className="border border-dav-border-gray py-1 px-2">
              Languages
            </div>
            <div className="p-2">
              <p className="text-dav-border-gray">Javascript</p>
              <p className="text-dav-border-gray">HTML</p>
              <p className="text-dav-border-gray">CSS</p>
            </div>
          </div>
          <div className="flex flex-col border border-dav-border-gray w-full">
            <div className="border border-dav-border-gray py-1 px-2">
              Frameworks
            </div>
            <div className="p-2">
              <p className="text-dav-border-gray">React</p>
              <p className="text-dav-border-gray">Redux</p>
              <p className="text-dav-border-gray">Tailwind</p>
              <p className="text-dav-border-gray">Node.js</p>
              <p className="text-dav-border-gray">Express.js</p>
              <p className="text-dav-border-gray">Wordpress</p>
            </div>
          </div>
          <div className="flex flex-col border border-dav-border-gray w-full">
            <div className="border border-dav-border-gray py-1 px-2">Other</div>
            <div className="p-2">
              <p className="text-dav-border-gray">Git/Github</p>
              <p className="text-dav-border-gray">Sequelize</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section2;

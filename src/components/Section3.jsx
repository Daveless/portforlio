import { works } from "../assets/db/projectsDb";
import Card from "./Card";
import { useSelector } from "react-redux";
const Section3 = () => {
  const isEng = useSelector((state) => state.languageReducer.isEng);
  return (
    <section id="Projects" className="w-[80%] m-auto text-white max-w-[1200px]">
      <div className="flex flex-row items-center w-[80%] gap-2">
        <span className="flex text-dav-green text-2xl">
          #<h2 className="text-white">{isEng ? "Projects" : "Proyectos"}</h2>
        </span>
        <hr className="h-[1px] border-dav-green bg-dav-green w-full" />
      </div>

      <div className="grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <Card key={work.imgURL} work={work} />
        ))}
      </div>
    </section>
  );
};
export default Section3;

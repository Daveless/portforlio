import Navbar from "./Navbar";
import Lottie from "lottie-react";
import animationData from "../assets/lines.json";
import style from "../assets/styles/styles.module.css";
import { useSelector } from "react-redux";

const Section1 = () => {
  const isEng = useSelector((state) => state.languageReducer.isEng);

  return (
    <section id="Home">
      <div className="z-50 absolute text-white text-3xl grid w-full">
        <Navbar />
      </div>

      <div className="grid sm:grid-rows-[75%_25%] grid-rows-[70%_30%]  md:grid-rows-1 md:grid-cols-[45%_55%] justify-center w-full h-[90vh] mx-auto max-w-[1200px]">
        <div
          className={`${style.animationContainer} md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 z-30`}
        >
          <Lottie
            className="z-30 w-screen top-0"
            animationData={animationData}
          />
          <img
            className="z-40 absolute aspect-square object-contain sm:w-[25rem] w-[14rem] lg:w-[18rem] md:w-[18rem] md:ml-[8rem] md:mt-[3rem]"
            src="./imgs/section1/done.png"
            alt=""
          />
        </div>
        <div className="flex flex-col sm:w-[80%] z-40 md:w-[100%] md:pl-7 mx-auto items-start sm:items-center justify-center mt-[-5rem] md:mt-0 px-5 text-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          <span className="text-3xl sm:text-4xl md:text-[33px] md:leading-10 sm:text-left sm:mb-5">
            {isEng ? "I'm David Rojas," : "Soy David Rojas"}
            <h1 className="text-dav-green">
              {isEng
                ? "Fullstack Web Developer"
                : "Desarrollador Web Fullstack"}
            </h1>
          </span>

          <p className="text-dav-border-gray sm:text-2xl md:text-[17px] md:leading-6">
            {isEng
              ? "Creative, passionate, and with problem-solving skills"
              : "Creativo, apasionado y con capacidad para resolver problemas"}
          </p>
          <div className="flex sm:justify-around sm:flex-row sm:w-[80%] flex-col mx-auto mb-4">
            <a
              className="border border-dav-green hover:bg-dav-green hover:text-black transition-colors delay-150 px-5 py-1 mt-4 md:mt-8"
              href="#Contact"
            >
              {isEng ? "Contact me" : "Contáctame"}
            </a>
            <a
              className="border border-dav-green hover:bg-dav-green hover:text-black transition-colors delay-150 px-5 py-1 mt-4 md:mt-8"
              href={isEng ? "/CV_ESP.pdf" : "/CV_ENG.pdf"}
              download={"CV David Rojas"}
            >
              {isEng ? "Download CV" : "Descargar CV"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;

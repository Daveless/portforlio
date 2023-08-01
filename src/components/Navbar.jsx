import { useState } from "react";
import { changeLanguage } from "../redux/features/language-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const dispatch = useDispatch();
  const switchLanguage = () => dispatch(changeLanguage());
  const isEng = useSelector((state) => state.languageReducer.isEng);
  return (
    <nav className="z-50 fixed bg-dav-gray grid text-sm text-center w-full lg:text-sm sm:text-3xl lg:font-semibold lg:text-white/80 md:justify-end md:justify-self-end lg:px-5 lg:py-3">
      <button
        onClick={handleShowNav}
        className="justify-self-end p-5  py-1 md:hidden "
      >
        <i className="bx bx-menu text-2xl sm:text-4xl text-dav-green"></i>
      </button>
      <div
        className={`flex flex-col ${
          !showNav ? "hidden" : " "
        } md:flex md:flex-row md:text-[15px]`}
      >
        <button
          className=" md:hidden text-xl ml-5 mt-4 px-3 py-1 rounded-lg text-black/80"
          onClick={switchLanguage}
        >
          {isEng ? "Ver página en español" : "See website in English"}
        </button>

        <a className="mx-4 my-3" href="#Home">
          <span className="text-dav-green">#</span>
          {isEng ? "Home" : "Inicio"}
        </a>
        <a className="mx-4 my-3" href="#Skills">
          <span className="text-dav-green">#</span>
          {isEng ? "Skills" : "Habilidades"}
        </a>
        <a className="mx-4 my-3" href="#Projects">
          <span className="text-dav-green">#</span>
          {isEng ? "Projects" : "Proyectos"}
        </a>
        <a className="mx-4 my-3" href="#Contact">
          <span className="text-dav-green">#</span>
          {isEng ? "Contact" : "Contacto"}
        </a>
      </div>
      <button
        className="hidden md:flex absolute text-xl ml-5 mt-4 px-3 py-1 rounded-lg mx-auto"
        onClick={switchLanguage}
      >
        {isEng ? "Ver página en español" : "See website in English"}
      </button>
    </nav>
  );
};
export default Navbar;

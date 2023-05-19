import { useState } from "react"

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)
    const handleShowNav = () => {
        setShowNav(!showNav)
    }

  return (
    <nav className="z-50 bg-dav-gray grid text-sm text-center w-full lg:text-sm sm:text-3xl lg:font-semibold lg:text-white/80 md:justify-end md:justify-self-end lg:px-5 lg:py-3">
        <button onClick={handleShowNav} className="justify-self-end p-5  py-1 md:hidden "><i className='bx bx-menu text-2xl sm:text-4xl text-dav-green'></i></button>
        <div className={`flex flex-col ${!showNav?"hidden":" "} md:flex md:flex-row md:text-[15px]`}>
        <a className="mx-4 my-3" href="#"><span className="text-dav-green">#</span>Home</a>
        <a className="mx-4 my-3" href="#"><span className="text-dav-green">#</span>works</a>
        <a className="mx-4 my-3" href="#"><span className="text-dav-green">#</span>about-me</a>
        <a className="mx-4 my-3" href="#"><span className="text-dav-green">#</span>contacts</a>
        <a className="mx-4 my-3" href="#"><span className="text-dav-green">#</span>EN</a>
        </div>
        
    </nav>
  )
}
export default Navbar
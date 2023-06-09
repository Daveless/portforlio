const Footer = () => {
  return (
    <footer className="w-[100%] py-5 px-[20%] mt-4 mx-auto text-white bg-dav-light-gray">
        <h3 className="text-2xl">David Rojas</h3>
        <p className="text-dav-border-gray">Web developer</p>
        <div className="text-3xl mt-2 flex gap-5">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dave-rojas-villacreses/"><i className='bx bxl-linkedin-square'></i></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/daveless/"><i className='bx bxl-github' ></i></a>
            <a target="_blank" rel="noreferrer" href="mailto:davidalrojas@gmail.com"><i className='bx bx-envelope'></i></a>
        </div>
    </footer>
  )
}
export default Footer

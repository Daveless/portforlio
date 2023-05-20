const Card = ({work}) => {
  return (
    <div className="border border-dav-border-gray text-dav-border-gray">
        <div className="aspect-[5/3] sm:aspect-[5/2] md:aspect-[4/3] flex items-start">
            <img className="object-cover object-top w-full h-full" src={`./works/${work.imgURL}`} alt="" />
        </div>
        <div className="px-3 py-2 border border-dav-border-gray">
            <p>{work.technologies}</p>
        </div>
        <div className="p-4 border border-dav-border-gray">
            <h3 className="text-xl text-white">{work.name}</h3>
            <p className="py-4">{work.description}</p>
            <div className="w-full flex gap-2 justify-around">
                <a className="w-[8rem] text-center py-1 px-6 border border-dav-green hover:bg-dav-green hover:text-black transition-colors delay-150" target="_blank" rel="noreferrer" href={work.webSite}>Live</a>
                <a className="w-[8rem] text-center py-1 px-6 border border-dav-green hover:bg-dav-green hover:text-black transition-colors delay-150" target="_blank" rel="noreferrer" href={work.repositoryLink}>Repository</a>
            </div>
        </div>
    </div>
  )
}
export default Card
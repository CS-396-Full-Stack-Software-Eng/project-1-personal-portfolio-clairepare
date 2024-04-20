import React from 'react'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
        <div
        className="h-52 bg-purple-300 md:h-72 rounded-t-xl relative group" //this group changes on hober
        //style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
        </div>
        <div className="overlay items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link 
                href={gitUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                <button className="h-10 w-10 text-[#ADB7BE] m-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">Github</button>
            </Link>
            <Link 
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                <button className="h-10 w-10 text-[#ADB7BE] m-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">Preview</button>
            </Link>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
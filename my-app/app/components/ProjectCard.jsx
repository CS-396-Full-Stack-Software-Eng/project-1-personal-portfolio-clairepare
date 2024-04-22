"use client"
import React, {useState} from 'react'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

  return (
    <div>
        <div
        className="group relative h-52 bg-purple-300 md:h-72 rounded-t-xl overflow-hidden shadow-lg" //this group changes on hober
        //style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
        </div>
        <div className="p-4">
                <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
                <div className={`text-[#ADB7BE] ${!showFullDescription && 'md:hidden'}`}>{description}</div>
                <button className="text-white mt-2 md:hidden" onClick={toggleDescription}>
                    {showFullDescription ? 'Show Less' : 'Read More'}
                </button>
            </div>
        <div className="overlay absolute inset-0 bg-[#181818] bg-opacity-0 flex items-center justify-center hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ease-in-out"
            onMouseEnter={() => console.log('Mouse entered', title)}
            onMouseLeave={() => console.log('Mouse left', title)}>
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
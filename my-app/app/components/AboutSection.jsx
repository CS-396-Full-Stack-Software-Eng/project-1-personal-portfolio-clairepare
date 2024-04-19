"use client"

import React, {useState, useTransition} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Edu 1</li>
                <li>Edu 2</li>
                <li>Edu 3</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Exp 1</li>
                <li>Exp 2</li>
                <li>Exp 3</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sl:px-16'>
                <Image
                    src="/../favicon.ico"
                    alt='about-image'
                    //className="absolute transform -translate-x-1/2 -translate-y-1/2 -top-1/2 -left-1/2"
                    width={500}
                    height={500}/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        About text.About text.About text.About text.About text.About text.About text.About text.About text.About text.About text.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            Experience
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
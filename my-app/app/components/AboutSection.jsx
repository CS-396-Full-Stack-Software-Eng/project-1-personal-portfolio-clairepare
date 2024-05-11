"use client"

import React, {useState, useTransition} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className='list-disc pl-2'>
                <li>Python</li>
                <li>Java</li>
                <li>Databases</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>C++</li>
                <li>HTML/CSS</li>
                <li>DrRacket</li>
                <li>MATLAB</li>
                <li>Scheme</li>
            </ul>
        )
    },
    {
        title: "Technologies",
        id: "technologies",
        content: (
            <ul className='list-disc pl-2'>
                <li>PyTorch</li>
                <li>VSCode</li>
                <li>React</li>
                <li>Google Cloud</li>
                <li>Firebase</li>
                <li>Node.js</li>
                <li>DBMS</li>
                <li>Vitest</li>
                <li>Cypress</li>
                <li>Quest HPC Cluster</li>
                <li>Jupyter</li>
                <li>Docker</li>
                <li>Agile</li>
                <li>Scrum</li>
                <li>Object-Oriented Programming</li>
                <li>Test-Driven Development</li>
                <li>Unix</li>
                <li>Emacs</li>
                <li>Repl.it</li>
                <li>Terminal</li>
                <li>GitHub</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>High School | Mountain View High School</li>
                <li>BA | Northwestern University</li>
                <li>MS | Northwestern University</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li class="header">Full Stack Development of Campus-Engagement Applications — August 2023 – Present</li>
                <li class="header">Development of a Java-Based SimpleDB — September 2023 – Present</li>
                <li class="header">Transcriptome Annotation Pipeline — June 2022 – January 2023</li>
                <li class="header">Researcher, Physics Lab & Quantitative Biology Lab — April 2021 – January 2023</li>
                <li class="header">Peer Mentor for Computer Science Classes</li>
            </ul>
        )
    }
]


const AboutPage = () => {
    const [tab, setTab] = useState("languages");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section id="about" className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sl:px-16'>
                <Image
                        src="/headshot.jpg"
                        alt="hero-image"
                        //className="absolute transform -translate-x-1/2 -translate-y-1/2 -top-1/2 -left-1/2"
                        width={300}
                        height={300}/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Currently, I'm a student at Northwestern University, anticipating a December 2024 graduation with a Master of Science and Bachelor of Arts in Computer Science, Integrated Science, and Mathematics. My education has been enriched by relevant coursework, including Deep Learning, Agile Software Development, Database Systems, and Machine Learning.

                        My technical proficiencies span a wide array of programming languages such as Python, Java, and JavaScript, and I have hands-on experience with tools and technologies like PyTorch, React, Google Cloud, and Docker. As a full-stack developer, I have led the creation of campus-engagement applications that bolster my community.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("languages")} active={tab === "languages"}>
                            Languages
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("technologies")} active={tab === "technologies"}>
                            Technologies
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

export default AboutPage;
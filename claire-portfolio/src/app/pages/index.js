'use client'
import { Toggle } from "@/components";
import Image from "next/image";
import { useState } from "react";
import Draggable from 'react-draggable';


export default function Home() {
  const [draggable, setDraggable] = useState(false);
  const [screen, setScreen] = useState(false);

  const handleDrag = () => {
    setDraggable(!draggable)
  }

  const handleScreenChange = () => {
    setScreen(!screen)
  }
  
  return (
    <Layout>
            <section className="hero">
                <h1>Hello, I'm Claire Paré</h1>
                <p>I'm a software engineer and student based in Illinois.</p>
                <Link href="/contact"><a className="btn">Get In Touch!</a></Link>
            </section>
            <section className="about-summary">
                <p>I like making things, usually with a computer screen and keyboard.</p>
            </section>
            <section className="featured-projects">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {/* Example project cards */}
                </div>
            </section>
            <style jsx>{`
                .hero {
                    text-align: center;
                    padding: 50px 20px;
                }
                .btn {
                    padding: 10px 20px;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .about-summary {
                    padding: 20px;
                    text-align: center;
                }
                .featured-projects {
                    padding: 20px;
                }
                .projects-grid {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                }
            `}</style>
    </Layout>
    // <>
    //   <h1 draggable="true" onDragStart={handleDrag}>Claire Pare</h1>
    //   <p>Welcome to my (very much in progress) page!</p>
    //   <Draggable>
    //     <div>Drag me around!</div>
    //   </Draggable>
    //   <Toggle toggled={draggable} choice1="Goofy" choice2="Chill" handleToggle={handleDrag} />
    //   <Toggle toggled={screen} choice1="Dark Mode" choice2="Light Mode" handleToggle={handleScreenChange} />
    // </>
  )
}

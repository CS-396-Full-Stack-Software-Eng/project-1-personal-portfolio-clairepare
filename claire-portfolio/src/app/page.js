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
    <>
      <h1 draggable="true" onDragStart={handleDrag}>Claire Pare</h1>
      <p>Welcome to my (very much in progress) page!</p>
      <Draggable>
        <div>Drag me around!</div>
      </Draggable>
      <Toggle toggled={draggable} choice1="Goofy" choice2="Chill" handleToggle={handleDrag} />
      <Toggle toggled={screen} choice1="Dark Mode" choice2="Light Mode" handleToggle={handleScreenChange} />
    </>
  )
}

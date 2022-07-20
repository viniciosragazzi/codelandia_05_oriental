import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const url =
  "https://www.youtube.com/watch?v=ZaYvwn9nBD4&ab_channel=AluraCursosOnline";
export default function video({ setIsOpen, isOpen }) {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("video")) {
      setIsOpen(!isOpen);
    }
    console.log(e.target.classList.contains("video"));

  })
  return (
    <div className={`video videoWrapper ${isOpen ? "active" : null}`}>
      <AiOutlineClose
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div className="videoBox">
        <iframe
          src="https://www.youtube.com/embed/OhBo1A8atuA"
          title="Amazing Visual Loops Compilation 4K 🔥🔥 || Extended Version"
          frameborder="1"
          allow="accelerometer;  
         gyroscope;"
        ></iframe>
      </div>
    </div>
  );
}

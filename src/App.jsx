import { useState, useRef, useEffect } from "react";
import "./App.css";

const animations = [
  // Skew animation
  [
    { transform: "skew(0, 0)" },
    { transform: "skew(-15deg, -15deg)" },
    { transform: "skew(15deg, 15deg)" },
    { transform: "skew(0, 0)" },
  ],

  // Rotation animation
  [
    { transform: "rotate(0deg)" },
    { transform: "rotate(180deg)" },
    { transform: "rotate(360deg)" },
  ],

  // Hue rotation animation
  [
    { filter: "hue-rotate(0deg)" },
    { filter: "hue-rotate(180deg)" },
    { filter: "hue-rotate(360deg)" },
  ],

  // Blur animation
  [{ filter: "blur(0px)" }, { filter: "blur(10px)" }, { filter: "blur(0px)" }],

  // Invert animation
  [
    { filter: "invert(0%)" },
    { filter: "invert(100%)" },
    { filter: "invert(0%)" },
  ],

  // Scale animation
  [
    { transform: "scale(1)" },
    { transform: "scale(1.5)" },
    { transform: "scale(1)" },
  ],

  // Translate animation
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(100px)" },
    { transform: "translateX(-100px)" },
    { transform: "translateX(0px)" },
  ],

  // Opacity animation
  [{ opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }],

  // Rotate and scale animation
  [
    { transform: "rotate(0deg) scale(1)" },
    { transform: "rotate(180deg) scale(1.5)" },
    { transform: "rotate(360deg) scale(1)" },
  ],

  // Combined skew and scale animation
  [
    { transform: "skew(0deg, 0deg) scale(1)" },
    { transform: "skew(15deg, 15deg) scale(1.5)" },
    { transform: "skew(-15deg, -15deg) scale(0.5)" },
    { transform: "skew(0deg, 0deg) scale(1)" },
  ],
];

const timing = { duration: 1000, iterations: 1 };

function App() {
  const [current, setCurrent] = useState(0);
  const targetRef = useRef(null);

  // Increment the `current` state variable and reset it to 0 if it reaches 5
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % animations.length);
  };

  // Trigger animation when `current` changes
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.animate(animations[current], timing);
    }
  }, [current]);

  return (
    <>
      <div className="buttons">
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <h1>Animation {current}</h1>
      </div>
      <div className="target" ref={targetRef}></div>
    </>
  );
}

export default App;

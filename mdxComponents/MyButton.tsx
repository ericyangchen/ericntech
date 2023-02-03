"use client";

import { useState } from "react";

export default function MyButton() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(true);
  };

  return (
    <>
      {clicked ? (
        <div>Clicked</div>
      ) : (
        <button className="btn" onClick={handleClicked}>
          Click me
        </button>
      )}
    </>
  );
}

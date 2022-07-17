import React, { useState } from "react";

function State() {
  const [name, setName] = useState("Masha");
  const clickMe = () => {
    setName("Noor");
  };
  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      {name}
    </div>
  );
}

export default State;

import React, { useState } from "react";
import Notecontext from "./notecontext";

function notestate(props) {
  const initialnotes = [];

  const [notes, setnotes] = useState(initialnotes);

  const getnotes = async () => {
    // api call
    const response = await fetch("http://localhost:5000/api/note/getnotes", {
      method: "GET",
    });
    const json = await response.json();
    setnotes(json[0]);
  };

  return (
    <Notecontext.Provider value={{ notes, getnotes }}>
      {props.children}
    </Notecontext.Provider>
  );
}

export default notestate;

import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note";
import Notehead from "./Notehead";
function Noteslist() {
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

  getnotes();

  return (
    <Notes>
      <Notehead />
      <Notelist>
        {notes.map((note) => {
          return <Note key={note._id} note={note} />;
        })}
      </Notelist>
    </Notes>
  );
}

export default Noteslist;

const Notes = styled.div`
  display: flex;
  flex-direction: column;
`;

const Notelist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;

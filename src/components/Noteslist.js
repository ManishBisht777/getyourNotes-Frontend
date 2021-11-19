import React from "react";
import styled from "styled-components";
import Note from "./Note";
import Notehead from "./Notehead";
function Noteslist(props) {
  const { note } = props;

  return (
    <Notes>
      <Notehead />
      <Notelist>
        {note.map((note) => {
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

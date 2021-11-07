import React from "react";
import styled from "styled-components";
import Note from "./Note";
import Notehead from "./Notehead";
function Noteslist() {
  return (
    <Notes>
      <Notehead />
      <Notelist>
        <Note />
        <Note />
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

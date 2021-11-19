import React,{useState} from "react";
import styled from "styled-components";
import Noteslist from "./Noteslist";
function Notegrp() {
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
    <Container>
      <Noteslist note={notes} />
    </Container>
  );
}

export default Notegrp;

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

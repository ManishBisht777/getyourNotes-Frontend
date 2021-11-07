import React from "react";
import styled from "styled-components";
import Noteslist from "./Noteslist";
function Notegrp() {
  return (
    <Container>
      <Noteslist />
      <Noteslist />
      <Noteslist />
    </Container>
  );
}

export default Notegrp;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

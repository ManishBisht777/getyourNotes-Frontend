import React from "react";
import styled from "styled-components";

function Notehead() {
  const handleaddnote = () => {
    console.log("clicked");
  };

  return (
    <Container>
      <Title>
        In progress <span>23</span>
      </Title>
      <Icon>
        <button onClick={handleaddnote}>
          <ion-icon name="ellipsis-vertical"></ion-icon>
          <ion-icon name="add-circle"></ion-icon>
        </button>
      </Icon>
    </Container>
  );
}

export default Notehead;

const Container = styled.div`
  display: flex;
  margin: 0px 25px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -15px;
`;

const Title = styled.p`
  font-size: 17px;
  color: rgb(239 239 239);
  margin: 15px 0px;
  letter-spacing: 1px;

  span {
    background: #e5e553;
    font-weight: bold;
    color: purple;
    padding: 1px 10px;
    border-radius: 15px;
  }
`;

const Icon = styled.div`
  button {
    background: transparent;
    border: none;

    ion-icon:nth-child(1) {
      color: white;
    }

    ion-icon {
      color: #be9dff;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;

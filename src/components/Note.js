import React from "react";
import styled from "styled-components";
function Note() {
  return (
    <Notebox>
      <Title>Note title</Title>
      <Description>
        Note description- make a note modal that look beautiful
      </Description>
      <Progress></Progress>
      <Deadline>
        <span>7</span> Hours left
      </Deadline>
      <Tag>
        <span>Frontend</span>
        <span>Ux-Ui</span>
        <span>Design</span>
      </Tag>
      <Crud>
        <ion-icon name="checkmark-done-outline"></ion-icon>
        <ion-icon name="create-outline"></ion-icon>
        <ion-icon name="trash-outline"></ion-icon>
      </Crud>
    </Notebox>
  );
}

export default Note;

const Notebox = styled.div`
  backdrop-filter: blur(2px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgb(145 135 135 / 65%);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.125);
  padding: 10px;
  width: 200px;
  height: fit-content;
  position: relative;
  margin: 20px;
  box-shadow: 0px 1px 188px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 188px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 188px 0px rgba(0, 0, 0, 0.75);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translatey(-10px);
    transition: 0.3s;
    box-shadow: 0px 1px 188px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 188px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 188px 1px rgba(0, 0, 0, 0.75);
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 17px;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 13px;
  color: rgb(200, 200, 200);
  margin: 15px 0px;
`;

const Progress = styled.div`
  height: 4px;
  width: 100%;
  position: relative;
  background: yellow;
  border-radius: 10px;
`;

const Deadline = styled(Description)`
  span {
    font-size: 17px;
    font-weight: bold;
  }
`;

const Tag = styled(Description)`
  display: flex;
  flex-wrap: wrap;
  span {
    background: #51b5e5;
    color: #f5f5f5;
    border-radius: 8px;
    padding: 6px;
    margin: 5px 5px;
  }
`;

const Crud = styled.div`
  display: flex;
  justify-content: flex-end;

  ion-icon {
    color: white;
    font-size: 20px;
    margin: 0px 4px;
  }
`;

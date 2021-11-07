import React from "react";
import styled from "styled-components";
function Modal() {
  return (
    <Notebox>
      <Title placeholder="Add Title of note"></Title>
      <Description placeholder="Add description of Note" rows="6"></Description>
      <Deadline placeholder="Enter deadline of task" type="Date"></Deadline>
      <Tag placeholder="Tag"></Tag>
    </Notebox>
  );
}

export default Modal;

const Notebox = styled.div`
  backdrop-filter: blur(2px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgb(145 135 135 / 65%);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.125);
  padding: 15px;
  width: 200px;
  height: fit-content;
  position: relative;
  margin: 20px;
  box-shadow: 0px 1px 188px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 188px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 188px 0px rgba(0, 0, 0, 0.75);
  transition: 0.3s;
  cursor: pointer;
`;

const Title = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 17px;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

const Description = styled.textarea`
  font-size: 13px;
  color: rgb(200, 200, 200);
  margin: 15px 0px;
  background: transparent;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

const Deadline = styled.input`
  color: #fff;
  span {
    font-size: 17px;
    font-weight: bold;
  }
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

const Tag = styled.input`
  display: flex;
  flex-wrap: wrap;
  background: #51b5e5;
  color: #f5f5f5;
  border-radius: 8px;
  padding: 6px;
  width: 70px;
  margin: 15px 5px;
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

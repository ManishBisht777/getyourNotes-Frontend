import React, { useState } from "react";
import styled from "styled-components";
function Modal(props) {
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
    deadline: "",
  });

  let name, value;

  const handleinputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setnote({ ...note, [name]: [value] });
  };

  const submit = async () => {
    const { title, description,  tag,deadline} = note;

    const response = fetch("http://localhost:5000/api/note/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        tag,
        deadline,
      }),
    });
    const data=(await response).json;
    console.log(data[0]);
  };

  if (!props.show) {
    return null;
  }

  return (
    <Notebox>
      <Title
        name="title"
        placeholder="Add Title of note"
        onChange={handleinputs}
      ></Title>
      <Description
        name="description"
        placeholder="Add description of Note"
        rows="6"
        onChange={handleinputs}
      ></Description>
      <Deadline name="deadline" type="Date" onChange={handleinputs}></Deadline>
      <Tag name="tag" placeholder="Tag" onChange={handleinputs}></Tag>
      <Button onClick={submit}>Add Note</Button>
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
  transition: all 0.3s ease-in-out;
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
  cursor: pointer;
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
  padding: 8px;
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

const Button = styled.button`
  margin: 15px 5px;
  padding: 10px 20px;
  color: #fff;
  background: #661b85d6;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
`;

import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Head>
      <ion-icon name="search"></ion-icon>
      <input type="text" placeholder="Search here" />
    </Head>
  );
}

export default Header;

const Head = styled.div`
  width: 100%;
  height: 50px;
  background: #582472;
  border-radius: 15px;
  display: flex;
  align-items: center;

  ion-icon {
    font-size: 25px;
    color: #fff;
    margin: 10px;
  }

  input {
    background: transparent;
    border: none;
    color: #fff;

    &:focus {
      outline: none;
    }
  }
`;

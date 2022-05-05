import React from "react";

import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  background-color: #5aab61;
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
  font-family: "Josefin Sans", sans-serif;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: 5rem;
  margin: 0 auto;
`;

export const Navegation = () => {
  return (
    <div>
      <Section>
        <NavBar>
          <h2>Clean Power</h2>
          <h2>Menu</h2>
          <h2>Button</h2>
        </NavBar>
      </Section>
    </div>
  );
};

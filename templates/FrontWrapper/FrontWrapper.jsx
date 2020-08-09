import React from "react";
import { Navbar, Footer } from "components";
import styled from "styled-components";
import media from "styles/media";

const PaddedContainer = styled.div`
  padding-top: calc(
    ${({ theme }) => theme.spacing.xxlarge} +
      ${({ theme }) => theme.components.navbar.height}
  );
  padding-bottom: ${({ theme }) => theme.spacing.xxlarge};
  background-color: ${({ theme }) => theme.colors.beige};
  ${media.sm`
    padding-top: calc(
      ${({ theme }) => theme.spacing.large} + 
      ${({ theme }) => theme.components.navbar.height}
    );
  `}
`;

export default (props) => (
  <div>
    <Navbar />
    <PaddedContainer>
      {props.children}
    </PaddedContainer>
    <Footer />
  </div>
);

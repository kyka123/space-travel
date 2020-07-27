import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  display: block;
  background-image: url(${({ img }) => img});
  grid-row-end: span 1;
  background-size: cover;
  z-index: 1;
`;

const StyledDetails = styled.div`
  position: absolute;
  bottom: 20px;
  background-color: #000;
  width: 80%;
  font-weight: 200;
  padding: 5px;
`;

const StyledTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
`;

const StyledMiniParagraph = styled.p`
  padding: 0;
  color: #fff;
  font-size: 10px;
`;

const Card = ({ img, title, short, fOnClick }) => (
  <StyledWrapper img={img} onClick={fOnClick}>
    <StyledDetails>
      <StyledTitle>{title}</StyledTitle>
      <StyledMiniParagraph>{short}</StyledMiniParagraph>
    </StyledDetails>
  </StyledWrapper>
);

export default Card;

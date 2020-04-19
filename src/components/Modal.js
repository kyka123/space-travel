import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.white};
  width: 100vw;
  height: 100vh;
  padding: 10px;
  z-index: 1;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s;
`;
const StyledDetails = styled.div`
  margin: 100px;
  flex: 1;
`;

const StyledImg = styled.img`
  flex: 3;
  object-fit: cover;
`;

const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 2px;
  font-size: 15px;
  cursor: pointer;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme.darkPurple};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.black};
    transition: transform 0.2s;
  }
  :hover {
    &::after {
      transform: scaleX(0);
    }
  }
`;

const Modal = ({ imgUrl, title, description, isVisible, close }) => (
  <StyledWrapper isVisible={isVisible}>
    <StyledImg src={imgUrl} />
    <StyledDetails>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <StyledCloseButton onClick={close}>Close</StyledCloseButton>
    </StyledDetails>
  </StyledWrapper>
);

export default Modal;

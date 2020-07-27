import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  @media (max-height: 400px) {
    display: none;
  }
`;
const StyledWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
`;

const StyedLink = styled(NavLink)`
  color: ${({ theme }) => theme.lightPurple};
  margin: 10px;
  font-size: ${({ theme }) => theme.font.regular};
  text-decoration: none;
`;

const Navigation = () => (
  <StyledWrapper>
    <StyledNav>
      <StyedLink to="/">Home</StyedLink>
      <StyedLink to="/about">About</StyedLink>
    </StyledNav>
  </StyledWrapper>
);

export default Navigation;

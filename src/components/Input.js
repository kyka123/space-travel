import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'text' })`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.lightPurple};
  position: relative;
  font-size: ${({ theme }) => theme.font.regular};
  width: 90%;
  padding: 5px;
  border-bottom: 7px solid ${({ theme }) => theme.lightPurple};
  ::placeholder {
    color: ${({ theme }) => theme.darkPurple};
  }
`;

export default Input;

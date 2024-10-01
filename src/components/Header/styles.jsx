

import styled from 'styled-components';

export const ContainerHeader = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #007bff;
  color: white;
  text-align: center;
  box-shadow: 0px 4px 2px -2px gray;
`;

export const Nav = styled.nav`
  margin-top: 10px;
  
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

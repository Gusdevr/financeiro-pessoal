

import styled from 'styled-components';


export const Header = styled.header`
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


export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;


export const TransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;


export const Input = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const Select = styled.select`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;


export const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;


export const TransactionList = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export const TransactionItem = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ type }) => (type === 'entrada' ? '#d4edda' : '#f8d7da')};
  border: 1px solid ${({ type }) => (type === 'entrada' ? '#c3e6cb' : '#f5c6cb')};
  color: ${({ type }) => (type === 'entrada' ? '#155724' : '#721c24')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const TotalBalance = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  background-color: #d1ecf1;
  border: 1px solid #bee5eb;
  color: #0c5460;
  text-align: center;
`;

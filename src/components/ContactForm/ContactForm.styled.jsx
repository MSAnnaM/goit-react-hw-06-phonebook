import styled from 'styled-components';

export const Form = styled.form`
 margin-bottom: 10px;
`;

export const Input = styled.input`
   display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #d9b6b6;
  border-radius: 5px;
  background-color: #ffe6e6;
  color: #a85353;
  transition: border-color 0.3s ease-in-out;

  &:hover {
   background-color: #ff7f50;
  color: #ffffff;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 90%;
  padding: 8px;
  border: 1px solid #d9b6b6;
  border-radius: 5px;
  background-color: #efaaaa;
  color: #7d5d5d;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #ff7f50;
  color: #ffffff;
  }
`;

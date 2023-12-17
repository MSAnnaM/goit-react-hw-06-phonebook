import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #d9b6b6;
  border-radius: 5px;
  background-color: #ffe6e6;
  color: #a85353;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ItemName = styled.span`
font-weight: bold;
`

export const DeleteBtn = styled.button`
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
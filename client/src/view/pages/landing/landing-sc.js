import styled from 'styled-components';

export const MenuInput = styled.input`
  margin: auto;
  margin-top: 5px;
  height: 32px;
  width: 95%;
  display: block;
  border: none;

  &:focus {
		outline: none;
	}
`;

export const MenuList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
  top: 50%;
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  height: 300px;
  width: 200px;
  overflow: hidden;
  background-color: #333;
`;

export const MenuListItem = styled.li`
  float: center;
`;

export const MenuLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }
`;

export const HeaderRightItem = styled.li`
  float: right;
`;
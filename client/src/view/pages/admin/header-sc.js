import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const HeaderListItem = styled.li`
  border-right: 1px solid #bbb;
  float: left;

  ${props =>
  props.active &&
  css`
    background-color: #4CAF50;
  `};

  &:last-child {
    border-right: none;
  }
`;

export const HeaderLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }
`;

export const HeaderATag = styled.a`
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
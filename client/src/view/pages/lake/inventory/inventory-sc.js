import styled from 'styled-components';

export const InventoryContainer = styled.div`
  width: 60%;
  float: right;
`;

export const Item = styled.div`
  height: 50px;
  width: 100px;
  display: inline-block;

  &:hover {
    opacity: 0.5;
  }
`;

export const RodContainer = styled.div`
  height: 50px;
  width: 100px;
  background: lightgrey;
`;

export const BaitContainer = styled.div`
  height: 50px;
  width: 100px;
  background: lightgrey;
`;

export const BagContainer = styled.div`
  height: 100px;
  width: 500px;
  background: lightgrey;
`;
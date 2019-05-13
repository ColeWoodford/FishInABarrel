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
  border: 2px solid rgb(38, 38, 115, 0.25);
  background: rgb(179, 240, 255, 0.25);
`;

export const BaitContainer = styled.div`
  height: 50px;
  width: 100px;
  border: 2px solid rgb(38, 38, 115, 0.25);
  background: rgb(179, 240, 255, 0.25);
  display: inline-block;
`;

export const BagContainer = styled.div`
  height: 100px;
  width: 500px;
  border: 2px solid rgb(38, 38, 115, 0.25);
  background: rgb(179, 240, 255, 0.25);
`;

export const InvInfo = styled.div`
  margin-left: 5px;
  position: absolute;
  display: inline-block;
`;
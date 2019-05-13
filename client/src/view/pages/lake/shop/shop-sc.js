import styled from 'styled-components';

export const ShopWrapper = styled.div`
  // text-align: center
  margin-left: 10%;
  margin-top: 5px;
`;

export const ShopTitle = styled.button`
  height: 35px;
  width: 10%
  border-radius: 4px;
  border: 1px solid grey;
  box-shadow: none;
  background: rgb(148, 148, 184, 0.9);

  &:hover {
    background: rgb(194, 194, 214, .7);
	}

	&:focus {
		outline: none;
	}
`;

export const ShopContent = styled.div`
  text-align: left
  margin-top: 5px;
  margin-bottom: 5px;
  width: 89%
  border-radius: 4px;
  border: 1px solid grey;
  background: rgb(148, 148, 184, 0.7);
`;

export const ShopItem = styled.div`
  height: 50px;
  width: 100px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid grey;

  &:hover {
    opacity: 0.5;
  }
`;

export const SellItem = styled.div`
  height: 50px;
  width: 100px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid grey;
`;
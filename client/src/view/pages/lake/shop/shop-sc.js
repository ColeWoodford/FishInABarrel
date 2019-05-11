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

  &:hover {
		background: #4ddbff;
	}

	&:focus {
		outline: none;
	}
`;

export const ShopContent = styled.div`
  text-align: left
  margin-top: 5px;
  width: 89%
  border-radius: 4px;
  border: 1px solid grey;
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
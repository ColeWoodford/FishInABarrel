import styled from 'styled-components';

export const LakeContainer = styled.div`
	margin: auto;
	margin-top: 20px;
	width: 80%;
`;

export const Row = styled.div`
	&:after {
		content: "";
		display: table;
		clear: both;
	}
`;

export const Col = styled.div`
	float: left;
	width: 33.33%;
	height: 100px;
`;

export const LakeTile = styled.button`
	width: 100%;
	height: 100px;
	background: rgb(179, 240, 255, 0.25);
	box-shadow: none;
	border: none;
	color: lightgrey;

	&:hover {
		background: rgb(77, 219, 255, .7);
	}

	&:focus {
		outline: none;
		background: #00a3cc;
	}
`;

export const LakeButton = styled.button`
	width: 200px;
	height: 100px;
	background: #00ccff;
	box-shadow: none;
	border: none;

	&:hover {
		background: #4ddbff;
	}

	&:focus {
		outline: none;
		background: #00a3cc;
	}
`;

export const LakeTitle = styled.div`
`;
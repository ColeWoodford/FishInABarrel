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

export const LoginMessage = styled.div`
	margin: auto;
	margin-top: 20px;
	width: 50%;
	padding: 5px;
	text-align: center;
	background-color: rgb(148, 148, 184, 0.9);
`;

export const LogoutContainer = styled.div`
	margin-left: 80%;
	margin-top: 5px;
`;

export const LogoutButton = styled.a`
	text-align: center;
	text-decoration: none;
	width: 100px;
	padding: 2px;
	color: lightgrey;

	background: rgb(148, 148, 184, 0.9);
	box-shadow: none;
	border: none;

	&:hover {
		background: rgb(194, 194, 214, .7);
	}
`;
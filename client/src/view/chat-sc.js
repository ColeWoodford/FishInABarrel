import styled from 'styled-components';

export const ChatWrapper = styled.div`
  margin: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const ChatWindow = styled.div`
  height: 200px;
  width: 400px;
  border-top-left-radius: 8px;
  background: rgb(102, 153, 153, 0.5);
  word-wrap: break-word;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
`;

export const ChatTextEntry = styled.input`
  width: 346px;

  &:focus {
		outline: none;
	}
`;

export const ChatSendButton = styled.button`
  width: 50px;
`;
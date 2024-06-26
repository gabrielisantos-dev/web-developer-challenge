import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const PostDisplay = styled.div`
  position: relative;
  width: 525px;
  padding: 1.5rem;
  border-radius: 3px;
  border: 1px solid #3b3b3b;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 8px auto;
    padding: 26px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 1.2rem;
  width: 1.25rem;
  height: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const PostImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 36px;
  margin-left: 0.8rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
`;

const PostMessage = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #9f9f9f;
  margin-bottom: 1.4rem;
  word-wrap: break-word;
  max-width: 300px;
`;

const PostName = styled.h2`
  font-family: Roboto;
  font-size: 14px;
  text-align: left;
  color: #7a7a7a;
  margin: 0;
`;

const EnviadoPor = styled.h2`
  font-family: Roboto;
  font-size: 12px;
  margin: 0;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.29px;
  color: #5f5f5f;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #1f2124;
  padding: 1rem;
  border-radius: 5px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
  margin-right: 1rem;
  &:hover {
    background-color: #929292;
  }
`;

const DeletePostButton = styled(Button)`
  background-color: #ff0000;
  color: #fff;
  &:hover {
    background-color: #8b0000;
  }
`;

const ModalText = styled.p`
  font-family: Roboto-Regular;
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.29;
  color: #f8f8ff;
  margin-bottom: 1.5rem;
`;

export {
  PostContainer,
  PostDisplay,
  DeleteButton,
  PostImage,
  ContentContainer,
  PostMessage,
  PostName,
  EnviadoPor,
  ModalOverlay,
  ModalContent,
  ModalActions,
  CancelButton,
  DeletePostButton,
  ModalText,
};
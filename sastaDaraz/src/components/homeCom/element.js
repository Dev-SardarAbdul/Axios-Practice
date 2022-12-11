import styled from "styled-components";

export const MainAxiosCom = styled.div`
  overflow: hidden;
  background-color: rgb(15, 27, 35);

  .container {
    margin-top: 2rem;
  }
`;

export const MainHeader = styled.h2`
  color: rgb(255, 113, 207);
  text-align: center;
  font-size: 76px;
`;

export const SubText = styled.h4`
  text-align: justify;
  font-size: 24px;
  margin-top: 3rem;
  color: #fff;
  text-align-last: center;
  line-height: 35px;
  letter-spacing: 0.05em;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ShopBtn = styled.button`
  background-color: rgb(255, 113, 207);
  color: #fff;
  padding: 13px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: rgb(255, 133, 207);
    background-color: #fff;
    scale: 1.1;
    transition: 0.3s all ease-in-out;
    border: none;
    border-radius: 4px;
  }
`;

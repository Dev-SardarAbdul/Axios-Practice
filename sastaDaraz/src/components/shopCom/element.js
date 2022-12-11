import styled from "styled-components";

export const MainShop = styled.div`
  .container {
    margin-top: 2rem;
  }
`;

export const MainHeader = styled.h2`
  color: rgb(255, 113, 207);
  text-align: center;
  font-size: 76px;
`;

export const CardContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 250px;
    margin-bottom: 2rem;
    border: none;
    border-radius: 3px;
    height: 400px;
    overflow-y: auto !important;

    &::-webkit-scrollbar {
      width: 0.2em;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgb(255, 113, 207);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(255, 113, 207);
      outline: 1px solid slategrey;
    }
  }

  .card-title {
    text-align: center;
    margin-top: 10px;
    color: rgb(255, 113, 207);
  }

  .card-text {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }

  .card-img,
  .card-img-top {
    height: 200px;
    background-color: red;
  }

  .row {
    .col-12 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const BuyBtn = styled.button`
  border: none;
  background-color: rgb(15, 27, 35);
  color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: rgb(255, 113, 207);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(20px);

  p {
    color: rgb(15, 27, 35);
    font-size: 18px;
    margin: 0;
  }
`;

export const ModalContainer = styled.div`
  background-color: rgb(15, 27, 35);
  padding: 20px;
  min-height: 40vh;
  border: 3px solid #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h2 {
    color: #fff;
    text-align: center;
    font-size: 24px;
  }
`;

import styled from "styled-components";

export const MainHomeCom = styled.div`
  overflow: hidden;

  .container {
    margin-top: 2rem;

    .trendingHeader {
      text-align: start;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: rgb(32, 40, 51);
    }
  }

  .card {
    width: 250px;
    background-color: rgb(32, 40, 51);
    border: none;
    border-radius: 10px;
  }

  .card-img {
    height: 150px;
  }

  .card-title {
    text-align: center;
    color: rgb(102, 252, 241);
    font-size: 16px;
  }
  .card-text {
    margin-top: 20px;
    text-align: justify;
    text-align-last: center;
    color: #fff;
  }
`;

export const MainHeader = styled.h2`
  text-align: center;
  color: rgb(32, 40, 51);
  font-size: 56px;
  margin-top: 4rem;

  @media (max-width: 575.98px) {
    margin-top: 2rem;
    font-size: 36px;
  }
`;

export const TrendingHeader = styled.h1;

import styled from "styled-components";
import { FaFacebookF, FaYoutube, FaGithub } from "react-icons/fa";

export const MainNavbar = styled.div`
  .bg-dark {
    background-color: rgb(255, 113, 207) !important;
  }

  .navbar-brand {
    a {
      color: #fff;
      font-weight: 600;
      font-size: 30px;
      cursor: pointer;

      &:hover {
        color: rgb(15, 27, 35);
      }
    }
  }

  a {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: rgb(15, 27, 35);
    }

    @media (max-width: 991.98px) {
      text-align: center;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FbIcon = styled(FaFacebookF)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: rgb(15, 27, 35);
  }
`;
export const YoutubeIcon = styled(FaYoutube)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: rgb(15, 27, 35);
  }
`;

export const GithubIcon = styled(FaGithub)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: rgb(15, 27, 35);
  }
`;

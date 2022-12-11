import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MainAxiosCom,
  MainHeader,
  SubText,
  BtnContainer,
  ShopBtn,
} from "./element";

function AxiosCom() {
  return (
    <MainAxiosCom>
      <Container>
        <MainHeader>Sasta Daraz</MainHeader>
        <SubText>
          Welcome to Sasta Daraz. Sasta daraz is a start-up retail establishment
          that will sell fashionable clothing. While our initial goal is to open
          one boutique, expansion plans include potentially franchising our
          retail store and/or building a well-recognized brand name. In turn, we
          would hope to penetrate a sizable portion of the online retail market.
          The fashion and retail industry tends to be overly youth focused.
          However, by closely following generational fashion trends as well as
          our own customers’ purchasing preferences, we will tailor our
          inventory to meet the specific needs of our clientele. Navigate to
          shop to check our rich variety of products.
        </SubText>
        <BtnContainer>
          <Link to="/shop">
            <ShopBtn>Explore Shop</ShopBtn>
          </Link>
        </BtnContainer>
      </Container>
    </MainAxiosCom>
  );
}

export default AxiosCom;

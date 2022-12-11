import { Container, Card, Row, Col, Modal } from "react-bootstrap";
import {
  CardContainer,
  MainHeader,
  MainShop,
  BuyBtn,
  BtnWrapper,
  ModalContainer,
} from "./element";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsBagCheck } from "react-icons/bs";

function ShopCom() {
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoader(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err));
    setLoader(false);
  }, []);
  return (
    <MainShop>
      <Container>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          backdrop={true}
          className="modal"
        >
          <ModalContainer>
            <BsBagCheck
              style={{ fontSize: 100, color: "rgb(255, 113, 207)" }}
            />
            <h2>Whohoo, Item Added To Cart</h2>
          </ModalContainer>
        </Modal>
        <MainHeader>Shop</MainHeader>
        {loader && <h2 style={{ color: "red" }}>Loading</h2>}
        <CardContainer>
          <Row>
            {photos.slice(2, 14).map((photo, index) => (
              <Col key={index} xs={12} sm={6} lg={4} xl={3}>
                <Card>
                  <Card.Img variant="top" src={photo.image} />

                  <Card.Body>
                    <Card.Title>
                      Title: {photo.title.substring(0, 10)}
                    </Card.Title>
                    <Card.Text>
                      Description: {photo.description.substring(0, 25)}
                    </Card.Text>

                    <BtnWrapper>
                      <p>Price: ${photo.price}</p>
                      <BuyBtn onClick={handleShow}>Add To Cart</BuyBtn>
                    </BtnWrapper>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardContainer>
      </Container>
    </MainShop>
  );
}

export default ShopCom;

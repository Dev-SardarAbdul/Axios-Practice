import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { MainHeader, MainHomeCom, TrendingHeader } from "./element";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function HomeCom() {
  const [trendingRecipes, setTrendingRecipes] = useState([]);

  const fetchTrendingRecipe = async () => {
    try {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=8a88b233459549769eaf351a93f0b70f&number=9"
      );
      setTrendingRecipes(res.data.recipes);
      console.log(trendingRecipes);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTrendingRecipe();
  }, []);

  return (
    <MainHomeCom>
      <Container>
        <MainHeader> Recipe's - Fun. Fresh. Flavorful.</MainHeader>
        <h1 className="trendingHeader">Trending Recipes:</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            100: {
              slidesPerView: 1.5,
            },
            500: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4.5,
            },
          }}
        >
          {trendingRecipes.map((recipe) => (
            <SwiperSlide>
              <Card>
                <Card.Img src={recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.title.slice(0, 15)}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </MainHomeCom>
  );
}

export default HomeCom;

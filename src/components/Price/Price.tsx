import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  StyledSectionTitle,
  StyledSelect,
  StyledDot,
  NextImage,
} from "../shared";
import { SelectPriceI, SelectTeamI } from "../../utils/interfaces";
import { wemanRoom, manRoom, childRoom } from "../../utils/priceContainer";
import * as s from "./StyledPrice";

const Team = () => {
  const [currentOption, setCurrentOption] = useState<SelectPriceI>(
    wemanRoom[0]
  );
  const [currentCategory, setCurrentCategory] = useState(null);
  // const [currentImageIndex, setIndex] = useState(0);

  console.log(currentCategory);
  return (
    <s.StyledContainer>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "323px",
        }}
      >
        <StyledSectionTitle>Наши услуги и цены</StyledSectionTitle>
        <StyledSelect
          currentOption={currentOption}
          options={wemanRoom}
          setCurrentOption={setCurrentOption}
        />
        <Swiper slidesPerView={1.5} spaceBetween={48} freeMode={true}>
          {currentOption.subCategories.map((el) => {
            return (
              <SwiperSlide>
                <p onClick={() => setCurrentCategory(el)}>{el.subCategorie}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper></Swiper>
        {/* {currentCategory.name} */}
        {/* <Swiper
          spaceBetween={300}
          slidesPerView={1}
          onSlideChange={(data) => {
            console.log(data);
            return setIndex(data.activeIndex);
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {currentOption.team.map(({ id, src, alt }) => {
            return (
              <SwiperSlide key={id}>
                <NextImage src={src} alt={alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <s.StyledDotsList>
          {currentOption.team.map((_, idx) => {
            return (
              <s.StyledDotItem key={idx}>
                <StyledDot active={currentImageIndex === idx} />
              </s.StyledDotItem>
            );
          })}
        </s.StyledDotsList> */}
      </div>
    </s.StyledContainer>
  );
};

export default Team;

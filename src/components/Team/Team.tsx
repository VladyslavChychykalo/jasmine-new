import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  StyledSectionTitle,
  StyledSelect,
  StyledDot,
  NextImage,
} from "../shared";
import { SelectI } from "../../utils/interfaces";
import teamContainer from "../../utils/teamContainer";
import * as s from "./StyledTeam";

const Team = () => {
  const [currentOption, setCurrentOption] = useState<SelectI>(teamContainer[0]);
  const [currentImageIndex, setIndex] = useState(0);

  // useEffect(() => {
  //   console.log('state')
  //   setIndex(0)
  // }, [currentOption])

  console.log("rerender");

  return (
    <s.StyledContainer>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "323px",
        }}
      >
        <StyledSectionTitle>Мастера</StyledSectionTitle>
        <StyledSelect
          currentOption={currentOption}
          options={teamContainer}
          setCurrentOption={setCurrentOption}
        />
        <Swiper
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
        </s.StyledDotsList>
      </div>
    </s.StyledContainer>
  );
};

export default Team;

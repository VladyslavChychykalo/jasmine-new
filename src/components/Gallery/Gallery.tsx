import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSectionTitle, StyledDot, NextImage } from '../shared';
import galleryImagesContainer from '../../utils/galleryImagesContainer';
import * as s from './StyledGallery';

const Gallery = () => {
    const [currentImageIndex, setIndex] = useState(0);

    return (
        <s.StyledContainer>
            <StyledSectionTitle>НАШИ РАБОТЫ</StyledSectionTitle>
            <s.StyledHeaderContainer>
                <s.StyledText>Больше работ смотрите в нашем INSTAGRAM</s.StyledText>
                <s.StyledIcon></s.StyledIcon>
            </s.StyledHeaderContainer>
            <s.SwiperContainer>
                <Swiper
                    // centeredSlides={true}
                    spaceBetween={300}
                    slidesPerView={1}
                    onSlideChange={data => setIndex(data.activeIndex)}
                    onSwiper={swiper => console.log(swiper)}
                >
                    {galleryImagesContainer.map(({ path, alt }) => {
                        return (
                            <SwiperSlide key={alt}>
                                <NextImage src={path} alt={alt} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <s.StyledDotsList>
                    {galleryImagesContainer.map((_, idx) => {
                        return (
                            <s.StyledDotItem key={idx}>
                                <StyledDot active={currentImageIndex === idx} />
                            </s.StyledDotItem>
                        );
                    })}
                </s.StyledDotsList>
            </s.SwiperContainer>
        </s.StyledContainer>
    );
};

export default Gallery;

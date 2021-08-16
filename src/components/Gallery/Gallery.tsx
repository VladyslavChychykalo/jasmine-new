import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSectionTitle, StyledDot, NextImage } from '../shared';
import galleryImagesContainer from '../../utils/galleryImagesContainer';
import * as s from './StyledGallery';

const Gallery = () => {
    const [currentImageIndex, setIndex] = useState(0);

    return (
        <s.StyledContainer>
            <div style={{
                margin: '0 auto',
                maxWidth: '375px'
            }}>
                <StyledSectionTitle>Наши работы</StyledSectionTitle>
                <s.StyledHeaderContainer>
                    <s.StyledText>Больше работ смотрите в нашем INSTAGRAM</s.StyledText>
                    {/* <s.StyledIcon></s.StyledIcon> */}
                </s.StyledHeaderContainer>
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
            </div>
        </s.StyledContainer>
    );
};

export default Gallery;

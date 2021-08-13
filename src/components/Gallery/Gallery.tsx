import { useState } from 'react';
import { StyledSectionTitle, StyledDot } from '../shared';
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

            {/* <s.StyledGalleryList>
                {galleryImagesContainer.map(({ label, path }) => {
                    <s.StyledGalleryListItem key={label}>
                        <s.StyledImage src={path} />
                    </s.StyledGalleryListItem>;
                })}
            </s.StyledGalleryList> */}
            {/* <s.StyledImage
                src={galleryImagesContainer[currentImageIndex].path}
                // label={galleryImagesContainer[currentImageIndex].label}
            /> */}

            <s.StyledDotsList>
                {galleryImagesContainer.map((_, idx) => {
                    return (
                        <s.StyledDotItem key={idx}>
                            <StyledDot active={currentImageIndex === idx} />
                        </s.StyledDotItem>
                    );
                })}
            </s.StyledDotsList>
        </s.StyledContainer>
    );
};

export default Gallery;

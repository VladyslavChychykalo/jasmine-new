import styled from 'styled-components';

export const StyledContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
`;

export const SwiperContainer = styled.div`
    margin: 0 auto;
    /* width: 323px; */
`;

export const StyledText = styled.p``;

export const StyledIcon = styled.svg``;

export const StyledHeaderContainer = styled.div``;

export const StyledGalleryList = styled.ul``;

export const StyledGalleryListItem = styled.li``;

export const StyledDotsList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

export const StyledDotItem = styled.li`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`;

export const StyledImage = styled.img.attrs(({ src }: { src: string }) => ({
    src
}))``;

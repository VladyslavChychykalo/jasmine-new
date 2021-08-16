import styled from 'styled-components';
import { COLORS } from 'styles/colors';

export const StyledContainer = styled.section`
    background-color: ${() => COLORS.desert};
    padding: 46px 26px 53px;
`;

export const StyledText = styled.p`
    font-family: 'Lato';
    font-size: 14px;
    line-height: 20px;
    color: ${() => COLORS.green};
    letter-spacing: 0.2em;
`;

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

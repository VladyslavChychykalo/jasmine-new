import styled from 'styled-components';

export const StyledContainer = styled.div``;

export const StyledText = styled.p``;

export const StyledIcon = styled.svg``;

export const StyledHeaderContainer = styled.div``;

export const StyledGalleryList = styled.ul``;

export const StyledGalleryListItem = styled.li``;

export const StyledDotsList = styled.ul`
    display: flex;
    list-style: none;
`;

export const StyledDotItem = styled.li`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`

export const StyledImage = styled.img.attrs(({ src }: { src: string }) => ({
    src
}))``;

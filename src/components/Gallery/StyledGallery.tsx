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
    margin-right: 30px;
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`;

export const StyledDotsList = styled.ul`
    margin-top: 25px;
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

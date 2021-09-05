import styled from 'styled-components'

export const StyledContainer = styled.section``

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
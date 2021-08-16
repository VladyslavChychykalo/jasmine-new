import styled from 'styled-components';
import { COLORS } from 'styles/colors';

const StyledSectionTitle = styled.p`
    font-family: 'Lato';
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.25em;
    color: ${() => COLORS.green};
`;

export default StyledSectionTitle;

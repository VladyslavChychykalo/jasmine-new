import styled from 'styled-components';

const Dot = styled.div<{ active: boolean }>`
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#1B4332' : 'transparent')};
    border: 1px solid #1b4332;
`;

export default Dot;
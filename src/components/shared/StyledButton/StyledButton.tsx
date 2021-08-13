import styled from 'styled-components';

const CustomContainer = styled.div``;

const CustomButton = styled.button``;

const StyledButton: React.FC<{ text: string }> = ({ text = 'Записаться' }) => (
    <CustomContainer>
        <CustomButton type='button'>{text}</CustomButton>
    </CustomContainer>
);

export default StyledButton;

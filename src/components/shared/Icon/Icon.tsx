import sprite from 'assets/icons/sprite.svg';

const Icon: React.FC<{ name: string }> = ({ name }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg width='32px' viewBox='0 0 32 32'>
            <use href={sprite + `#${name}`} />
        </svg>
    </div>
);

export default Icon;

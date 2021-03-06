import Image from 'next/image';

const NextImage: React.FC<{ src: string; alt: string; width?: number; height?: number }> = ({
    src,
    alt,
    width = 323,
    height = 403
}) => (
    <div style={{ position: 'relative', width: '100%', maxWidth: '375px', height: '403px', margin: '0 auto' }}>
        <Image alt={alt} src={src} objectFit="cover" layout="fill" />
    </div>
);

export default NextImage;

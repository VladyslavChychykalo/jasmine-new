import Image from 'next/image';

const NextImage: React.FC<{ src: string; alt: string; width?: number; height?: number }> = ({
    src,
    alt,
    width = 323,
    height = 403
}) => <Image src={src} width={width} height={height} alt={alt} />;

export default NextImage;

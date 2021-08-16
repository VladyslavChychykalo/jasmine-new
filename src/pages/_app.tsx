import type { AppProps /*, AppContext */ } from 'next/app';
import 'swiper/swiper.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;

import Header from '../../components/Header';
import AboutUs from '../../components/AboutUs';
import Gallery from '../../components/Gallery';
import Team from '../../components/Team';

const HomePage = () => {
    return (
        <div style={{
            // padding: '0 26px'
        }}>
            <Header />
            <AboutUs />
            <Gallery />
            <Team />
        </div>
    );
};

export default HomePage;

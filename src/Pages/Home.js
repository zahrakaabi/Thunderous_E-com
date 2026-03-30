/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// UI Local Components
import { ScrollProgressBar } from '../components';
import { HeroSection, AboutSection, NewInSection } from '../features';

// SEO
import { SEO } from '../lib';

/* ---------------------------------------- */
/*                  Home PAGE               */
/* ---------------------------------------- */
function Home() {
    /* ************ RENDERING ************* */
    return (
        <>
            <SEO
                title='Home | Thunderous'
                description='Ecommerce website that sells cosmetics products'
                name='home'
            />
            
            <div>
                <HeroSection />
                <AboutSection />
                <NewInSection />
                <ScrollProgressBar />
            </div>
        </>
    )
}
export default Home;
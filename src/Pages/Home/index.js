/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import AnimatedCursor from "react-animated-cursor";

// UI Local Components
import { Banner, About, NewIn, ScrollProgressBar } from '../../Components';

/* ---------------------------------------- */
/*                  Home PAGE               */
/* ---------------------------------------- */
function Home() {

    /* ************ RENDERING ************* */
    return (
        <div>
            <AnimatedCursor
                innerSize={6}
                outerSize={25}
                color="0, 0, 0"
                outerAlpha={0.2}
                innerScale={1}
                outerScale={3}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                ]}
            />
            <Banner />
            <About />
            <NewIn />
            <ScrollProgressBar />
        </div>
    )
}
export default Home;
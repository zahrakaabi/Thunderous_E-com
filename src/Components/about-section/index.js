/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useTranslation } from "react-i18next";

// Images
import WOMAN_FACE from '../../Assets/Images/About-section/woman_face.avif'; 
import DOWN_ARROW from '../../Assets/Images/Icons/down_arrow.png'; 

// Styles
import './index.css';

/* ---------------------------------------- */
/*                ABOUT COMPONENT           */
/* ---------------------------------------- */
function About() {
    // translation
    const { t } = useTranslation('common');

    /* ************ RENDERING ************* */
    return (
        <div className="container about-section-container">
            <div className='about-section flex justify-between'>
                <img src={ DOWN_ARROW} className="arrow" alt="arrow" />
                <div className="about-section_img">
                    <picture>
                        <source srcSet={WOMAN_FACE} media="(min-width:400px)" />
                        <img src={WOMAN_FACE} alt="woman-face-smiling" />
                    </picture>
                </div>
                <div className="about-section_content flex justify-end items-end">
                    <h1>{t('index.about')}</h1>
                </div>
            </div>
        </div>
    )
}
export default About;
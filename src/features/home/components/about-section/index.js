/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useTranslation } from "react-i18next";

// Images
import WOMAN_FACE from '../../../../Assets/images/home/woman_face.avif'; 
import DOWN_ARROW from '../../../../Assets/images/icons/down_arrow.png'; 

// Styles
import './index.scss';

/* ---------------------------------------- */
/*                ABOUT COMPONENT           */
/* ---------------------------------------- */
function AboutSection() {
    // translation
    const { t } = useTranslation('common');

    /* ************ RENDERING ************* */
    return (
        <div className="container section-seperator">
            <div className="about-container pos-r">
                <div className='about flex justify-between'>
                    <img src={ DOWN_ARROW} className="about__arrow" alt="arrow" />
                    <picture className="about__img pos-r">
                        <source srcSet={WOMAN_FACE} media="(min-width:400px)" />
                        <img className="cover" src={WOMAN_FACE} alt="woman-face-smiling" />
                    </picture>
                    <div className="about__content flex justify-end items-end">
                        <h2>{t('index.about')}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;
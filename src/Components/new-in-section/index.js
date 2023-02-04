/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useTranslation } from "react-i18next";

// Images
import WOMAN_1 from '../../Assets/Images/New-in-section/woman.avif';
import WOMAN_2 from '../../Assets/Images/New-in-section/woman2.avif';
import ARROW from '../../Assets/Images/Icons/arrow.png'; 

// Styles
import './index.css';

/* ---------------------------------------- */
/*               NEW IN COMPONENT           */
/* ---------------------------------------- */
function NewIn() {
    // translation
    const { t } = useTranslation('common');

    /* ************ RENDERING ************* */
    return (
        <div className="container new-in-section section-seperator">
            <h1 className="text-center">{t('index.newIn.title')}</h1>
            <div className="new-in-content flex">
                <div className="content-container flex flex-column justify-center items-start">
                    <p>{t('index.newIn.content')}</p>
                    <button className="flex items-center" type='button'>
                        <span>{t('index.newIn.button')}</span> <img className='button-arrow' src={ARROW} alt="arrow" />
                    </button>
                </div>

                <div className='woman_1'>
                    <img src={WOMAN_1} alt="woman" />
                </div>
                <div className='woman_2'>
                    <img src={WOMAN_2} alt="woman" />
                </div>
            </div>
        </div>
    )
}
export default NewIn;
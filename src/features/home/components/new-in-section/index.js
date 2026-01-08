/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Images
import WOMAN_1 from '../../../../assets/images/home/_new-in_1.avif';
import WOMAN_2 from '../../../../assets/images/home/_new-in_2.avif';
import ARROW from '../../../../assets/images/icons/arrow.png';

// Styles
import './index.scss';

/* ---------------------------------------- */
/*               NEW IN COMPONENT           */
/* ---------------------------------------- */
function NewInSection() {
    /* ************* CONSTS *************** */
    const navigate = useNavigate();
    const { t } = useTranslation('common');

    /* ************ RENDERING ************* */
    return (
        <div className="container new-in-section section-seperator">
            <h2 className="title text-center pos-r">{t('index.newIn.title')}</h2>
            <div className="content flex">
                <div className="content__box-1 box flex flex-column justify-center items-start">
                    <p>{t('index.newIn.content')}</p>
                    <button className="flex items-center cursor-pointer" type='button'onClick={() => navigate('/Shop')}>
                        <span>{t('index.newIn.button')}</span> 
                        <img className='button-arrow' src={ARROW} alt="arrow" />
                    </button>
                </div>

                <div className='content__box-2 box pos-r cursor-pointer transition'>
                    <img className="cover" src={WOMAN_1} alt="woman" />
                </div>
                <div className='content__box-3 box pos-r cursor-pointer transition'>
                    <img className="cover" src={WOMAN_2} alt="woman" />
                </div>
            </div>
        </div>
    )
};

export default NewInSection;
/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages

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
    /* ************ RENDERING ************* */
    return (
        <div className="container new-in-section section-seperator">
            <h1 className="text-center">NEW IN</h1>
            <div className="new-in-content flex">
                <div className="content-container flex flex-column justify-center items-start">
                    <p>The new collection is characterized by clean shapes and timeless thoughtfull 
                       designs that highlight the natural beauty and uniqueness of everybody.
                    </p>
                    <button className="flex items-center" type='button'>
                        <span>COLLECTION</span> <img className='button-arrow' src={ARROW} alt="arrow" />
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
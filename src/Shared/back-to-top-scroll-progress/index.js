/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages

// Styles
import "./index.css"

// @TO DO : Use this package if needed
// horizantal PBar: https://www.npmjs.com/package/react-progressbar-on-scroll

/* ---------------------------------------- */
/*          CALCULATE SCROLL VALUE          */
/* ---------------------------------------- */
const calcScrollValue = () => {
    const SCROLL_PROGRESS = document.getElementById("progress");
    const POSITION = document.documentElement.scrollTop;
    const SCROLL_HEIGHT = document.documentElement.scrollHeight;
    const CLIENT_HEIGHT = document.documentElement.clientHeight;

    const CALC_HEIGHT = SCROLL_HEIGHT - CLIENT_HEIGHT; 
    const SCROLL_VALUE = Math.round((POSITION * 100) / (CALC_HEIGHT));

    if (POSITION > 100) { 
        SCROLL_PROGRESS.style.display = 'grid';
    } else {
        SCROLL_PROGRESS.style.display = 'none';
    }

    SCROLL_PROGRESS.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })

    SCROLL_PROGRESS.style.background = `conic-gradient(#222 ${SCROLL_VALUE}%, #ebebeb ${SCROLL_VALUE}%)`;
};

/* ---------------------------------------- */
/*     SCROLL TO TOP PROGRESS INDOCATOR     */
/* ---------------------------------------- */
function ScrollProgressBar() {
    const IS_BROWSER = typeof window !== 'undefined';
    if (IS_BROWSER) {
        window.onscroll = calcScrollValue;
        window.onload = calcScrollValue;
    }
     
    /* ************ RENDERING ************* */
    return (
        <div id="progress" className="progress">
          <div className="progress-value">^</div>
        </div>
    )
}
export default ScrollProgressBar;
/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages

// Styles
import "./index.css"

// @TO DO : Use this package if needed
// horizantal PBar: https://www.npmjs.com/package/react-progressbar-on-scroll

/* ---------------------------------------- */
/*     SCROLL TO TOP PROGRESS INDOCATOR     */
/* ---------------------------------------- */
function ScrollProgressBar() {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / (calcHeight));

        if (pos > 100) {
            scrollProgress.style.display = 'grid';
        } else {
            scrollProgress.style.display = 'none';
        }

        scrollProgress.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        })

        scrollProgress.style.background = `conic-gradient(black ${scrollValue}%, gray ${scrollValue}%)`;
    } ;
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
     
    /* ************ RENDERING ************* */
    return (
        <div id="progress" className="progress">
          <div className="progress-value">^</div>
        </div>
    )
}
export default ScrollProgressBar;
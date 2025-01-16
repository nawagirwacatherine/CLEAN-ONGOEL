import imagesLogo from "../images/logo.jpg";
import imagesFooter2 from "../images/Footer2.jpg";
import imagesFooter3 from "../images/Footer3.png";
import imagesFooter4 from "../images/Footer4.jpg";
import imagesFooter7 from "../images/Footer7.jpg";

function  Footer () {
    return (
        <>
<div className="footer">
<img src={imagesLogo} alt="logo.jpg" className="logo" />
 <img src={imagesFooter2} alt="logo.jpg" className="footer2" />
 <img src={imagesFooter3} alt="logo.jpg" className="footer3" />
 <img src={imagesFooter4} alt="logo.jpg" className="footer4" />
 <img src={imagesFooter7} alt="logo.jpg" className="footer5" />

</div>
        </>
 
    )
 }
 
 export default Footer ;
import imagesLogo from "../images/logo.jpg";
import imagesFooter2 from "../images/Footer2.jpg";
import imagesFooter3 from "../images/Footer3.png";
import imagesFooter4 from "../images/Footer4.jpg";
import imagesFooter7 from "../images/Footer7.png";


function  Footer () {
    return (
        <>
<div className="footer">
   
<img src={imagesLogo} alt="logo.jpg" className="logo" />
<div className="footer2-text1" >
 <img src={imagesFooter2} alt="logo.jpg" className="footer2" />
  <p>instagram < br/> clean ongoel</p>
  </div>

  <div className="footer2-text1" >
 <img src={imagesFooter3} alt="logo.jpg" className="footer3" />
 <p>twitter < br/> clean ongoel</p>
 </div>

 <div className="footer2-text1" >
 <img src={imagesFooter4} alt="logo.jpg" className="footer4" />
 <p>facebook < br/> clean ongoel</p>
 </div>

 <div className="footer2-text1" >
 <img src={imagesFooter7} alt="logo.jpg" className="footer7" />
 <p>youtube < br/> clean ongoel</p>
 </div>

 <div className="footer2-text1" >
<h1>Our Main Locations</h1>
 <p>Wakiso < br/> Rubaga < br/>Kawempe< br/>Makindye< br/>Nakawa</p>
 <h>Our subLocations</h>
 <p>In all districts</p>
 </div>

</div>
        </>
 
    )
 }
 
 export default Footer ;
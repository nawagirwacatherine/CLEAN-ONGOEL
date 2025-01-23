import Footer from "../components/Footer.jsx"
import imagesBible2 from "../images/bible2.jpg";
import imagesBlood2 from "../images/blood2.jpg";
import imagesVol4 from "../images/vol4.jpg";
import imagesHealth2 from "../images/health2.jpg";


function  GetInvolved () {
    return (
        <>
 

<div className="get-involved">
    <div className="get-involved1">
    <p>Biblestudy</p>
     <img src={imagesBible2} alt="blood2" className="blood-get1" />
     <p>Blood Donation</p>
     <img src={imagesBlood2 } alt="blood2" className="blood-get2" />
     </div>
     <div className="get-involved2">
        <p>Volunteering</p>
     <img src={imagesVol4} alt="vol2" className="blood-get3" />
     <p>Health camps</p>
     <img src={imagesHealth2} alt="health2" className="blood-get4" />
     </div>
</div>
         < Footer/>
        </>
 
    )
 }
 
 export default GetInvolved ;
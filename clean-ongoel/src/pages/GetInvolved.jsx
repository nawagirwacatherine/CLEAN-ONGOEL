import Footer from "../components/Footer.jsx"
import imagesBible2 from "../images/bible2.jpg";
import imagesBlood2 from "../images/blood2.jpg";
import imagesVol4 from "../images/vol4.jpg";
import imagesHealth2 from "../images/health2.jpg";


function  GetInvolved () {
    return (
        <>
        <div>
Peace messengers from around the world gathered in Seoul, South Korea at the “2017 Conference for the Implementation of the Declaration of Peace and Cessation of War”, which is the largest of many conferences held as part of the WARP Summit 2017. Following in the successful steps of the original WARP Summit in 2014 and the following annual commemoration events, this year in Kampala at the GADAFFI MOSQUE, the work of peace continued where people from different backgrounds and religion gathered in the name of peace to find solutions and make the world a better place to live in.


War is not a polite recreation but the vilest thing in life, and we ought to understand that and not play at war.
</div>

<div>
     <img src={imagesBible2} alt="blood2" className="blood2" />
     <img src={imagesBlood2 } alt="blood2" className="blood2" />
     <img src={imagesVol4} alt="vol2" className="vol2" />
     <img src={imagesHealth2} alt="health2" className="health2" />
</div>
         < Footer/>
        </>
 
    )
 }
 
 export default GetInvolved ;
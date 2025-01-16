import imagesBlood1 from "../images/blood1.jpg";
import imagesHealth1 from "../images/health1.jpg";
import imagesVol1 from "../images/vol1.jpg";
import imagesSports6 from "../images/sports6.jpg";

function  RecentNews() {
    return (
        <>
             <div className="recent-news">
   <h1>RecentNews</h1>
   <div>
   <img src={imagesBlood1} alt="banner2" className="blood1" />
   <img src={imagesHealth1} alt="banner2" className="health1" />
   <img src={imagesVol1} alt="banner2" className="vol1" />
   <img src={imagesSports6} alt="banner2" className="sports6" />
   </div>
</div>
        </>
 
    )
 }
 
 export default RecentNews;
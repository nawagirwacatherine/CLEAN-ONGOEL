import imagesBlood1 from "../images/blood1.jpg";
import imagesHealth1 from "../images/health1.jpg";
import imagesVol2 from "../images/vol2.jpg";
import imagesSports6 from "../images/sports6.jpg";

function  RecentNews() {
    return (
        <>
             <div className="recent-news">
   <h1>RecentNews</h1>
   <div  className="recent-news">
    <section>
    <h1>BLOOD DONATION</h1>
   <img src={imagesBlood1} alt="banner2" className="blood1" />
   </section>
   <h1>HEALTH CAMP</h1>
   <img src={imagesHealth1} alt="banner2" className="health1" />

   </div>

   <div  className="recent-news2">
   <h1>VOLUNTEERING</h1>
   <img src={imagesVol2} alt="banner2" className="vol1" />
   <h1>BIBLE STUDY</h1>
   <img src={imagesSports6} alt="banner2" className="sports6" />
   </div>
</div>
        </>
 
    )
 }
 
 export default RecentNews;
import imagesBlood1 from "../images/blood1.jpg";
import imagesBloodd1 from "../images/bloodd1.jpg";
import imagesBloodd2 from "../images/bloodd2.jpg";
import imagesHealth1 from "../images/health1.jpg";
import imagesHealth2 from "../images/health2.jpg";
import imagesHealth3 from "../images/health3.jpg";
import imagesVol2 from "../images/vol2.jpg";
import imagesVol6 from "../images/vol6.jpg";
import imagesVol7 from "../images/vol7.jpg";
import imagesSports6 from "../images/sports6.jpg";
import imagesSport1 from "../images/sport1.jpg";
import imagesSport2 from "../images/sport2.jpg";
import imagesZion1 from "../images/zion1.jpg";
import imagesZion2 from "../images/zion2.jpg";
import imagesBible1 from "../images/bible1.jpg";

function  RecentNews() {
    return (
        <>
             <div className="recent-news">
   <h1>RecentNews</h1>
   <div  className="recent-news1">
    <div  className="recent-newsblood">
    <h1>BLOOD DONATION</h1>
    <p>In collaboration with Nakasero blood bank we donated blood < br /> Which saves lives of many people in uganda </p>
   <img src={imagesBlood1} alt="banner2" className="blood1" />
   <img src={imagesBloodd2} alt="banner2" className="bloodd2" />
   <img src={imagesBloodd1} alt="banner2" className="bloodd1" />
   </div>
   <div  className="recent-newshealth">
   <h1>HEALTH CAMP</h1>
   <p>Our team of health professionals reachedout to the community  < br /> in our different branches. < br />They offer free medical services to everyone in the community </p>
   <img src={imagesHealth1} alt="banner2" className="health1" />
   <img src={imagesHealth2} alt="banner2" className="health2" />
   <img src={imagesHealth3} alt="banner2" className="health3" />
   </div>
   </div>

   <div  className="recent-news2">
   <div  className="recent-newsvolunteering">
   <h1>VOLUNTEERING</h1>
   <p>We randomly organise volunteering activities< br /> where we go in the community and do cleaning activities</p>
   <img src={imagesVol2} alt="banner2" className="vol1" />
   <img src={imagesVol6} alt="banner2" className="vol6" />
   <img src={imagesVol7} alt="banner2" className="vol7" />

   </div>

   <div  className="recent-newsbible">
   <h1>SPORTS ACTIVITIES</h1>
   <p>To create a good relation in the community, we have sports teams.< br/> The Sports club organised a match with the community</p>
   <img src={imagesSports6} alt="banner2" className="sports6" />
   <img src={imagesSport1} alt="banner2" className="sport1" />
   <img src={imagesSport2} alt="banner2" className="sport2" />
   </div>
   </div>

   <div  className="recent-newsbible">
   <h1>BIBLE STUDY ACTIVITIES</h1>
   <p>We invite all people regardless of their religion to join us in bible studying.< br/>Through our members we reachout to the community so that they join for a free bible course offered by our zion christian mission center. < br/> In the year 2024 over 110,000 people graduated from zion christian mission center.</p>
   <img src={imagesZion1} alt="banner2" className="sports6" />
   <img src={imagesZion2} alt="banner2" className="sport1" />
   <img src={imagesBible1} alt="banner2" className="sport1" />

   </div>

   
</div>
        </>
 
    )
 }
 
 export default RecentNews;
import imagesBlood1 from "../images/blood1.jpg";
import imagesHealth1 from "../images/health1.jpg";
import imagesVol2 from "../images/vol2.jpg";
import imagesSports6 from "../images/sports6.jpg";

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
   </div>
   <div  className="recent-newshealth">
   <h1>HEALTH CAMP</h1>
   <p>Our team of health professionals reachedout to the community  < br /> in our different branches. < br />They offer free medical services to everyone in the community </p>
   <img src={imagesHealth1} alt="banner2" className="health1" />
   </div>
   </div>

   <div  className="recent-news2">
   <div  className="recent-newsvolunteering">
   <h1>VOLUNTEERING</h1>
   <p>We randomly organise volunteering activities< br /> where we go in the community and do cleaning activities</p>
   <img src={imagesVol2} alt="banner2" className="vol1" />

   </div>

   <div  className="recent-newsbible">
   <h1>SPORTS ACTIVITIES</h1>
   <p>To create a good relation in the community, we have sports teams.< br/> The Sports club organised a match with the community</p>
   <img src={imagesSports6} alt="banner2" className="sports6" />
   </div>
   </div>
</div>
        </>
 
    )
 }
 
 export default RecentNews;
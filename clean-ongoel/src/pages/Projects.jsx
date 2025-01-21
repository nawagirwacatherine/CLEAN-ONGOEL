
import images2Bible-club from "../images2/bible-club.jpg";
import images2Hwpl4 from "../images2/hwpl4.jpg";
import images2Ict-club3from "../images2/ict-club3.jpg";
import images2Ict-club1from "../images2/ict-club1.jpg";
import images2Sports-club from "../images2/sports-club.jpg";
import images2Sports-club2 from "../images2/sports-club2.jpg";
import images2Vol-club1 from "../images2/vol-club.jpg";
import images2Welfare-club from "../images2/welfare-club.jpg";



function  Projects () {
    return (
        <>
        
          <div className="recent-news">
            <h1>JOIN OUR DIFFERENT CLUB PROJECTS</h1>
   <p>We have a number of clubs operating under clean ongoel</p>
   <div  className="recent-news1">
    <div  className="recent-newsblood">
    <h1>Bible club</h1>
    <p>Join our Bible Club—a welcoming space where faith, fellowship, and growth come together! < br />Whether you're seeking deeper understanding, meaningful discussions, or a supportive community, we’d love for you to be part of this journey. Let’s explore God’s word and inspire one another to walk in His light!"  </p>
   <img src={images2Bible-club} alt="banner2" className="blood1" />
   </div>
   <div  className="recent-newshealth">
   <h1>Ict club</h1>
   <p>Join the ICT Club and dive into the exciting world of technology! Explore coding, innovation, and digital skills while collaborating with like-minded enthusiasts.< br /> Let’s learn, create, and shape the future together! </p>
   <img src={images2Ict-club3} alt="banner2" className="health1" />
   <img src={imagesI2ct-club3} alt="banner2" className="health2" />
   <img src={imagesIct2-club3} alt="banner2" className="health3" />
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
   

         < Footer/>
        </div>
 
    )
 }
 
 export default Projects ;

import images2BibleClub from "../images2/bible-club.jpg";
import images2Hwpl4 from "../images2/hwpl4.jpg";
import images2IctClub3 from "../images2/ict-club3.jpg";
import images2IctClub1 from "../images2/ict-club1.jpg";
import images2SportsClub from "../images2/sports-club.jpg";
import images2SportsClub2 from "../images2/sports-club2.jpg";
import images2VolClub1 from "../images2/vol-club1.jpg";
import images2WelfareClub from "../images2/welfare-club.jpg";
import Footer from "../components/Footer.jsx"



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
   <img src={images2BibleClub} alt="banner2" className="blood1" />
   </div>
   <div  className="recent-newshealth">
   <h1>Ict club</h1>
   <p>Join the ICT Club and dive into the exciting world of technology! Explore coding, innovation, and digital skills while collaborating with like-minded enthusiasts.< br /> Let’s learn, create, and shape the future together! </p>
   <img src={images2IctClub3} alt="banner2" className="health1" />
   <img src={images2IctClub1} alt="banner2" className="health2" />
   </div>
   </div>

   <div  className="recent-news2">
   <div  className="recent-newsvolunteering">
   <h1>Sports Club</h1>
   <p>Join the Sports Club and unleash your athletic potential! Stay active, build teamwork, and have fun while engaging in various sports and activities.< br /> Let’s promote fitness and camaraderie together!</p>
   <img src={images2SportsClub} alt="banner2" className="vol7" />
   <img src={images2SportsClub2} alt="banner2" className="vol7" />
   
   </div>

   <div  className="recent-newsbible">
   <h1>Volunteering club</h1>
   <p>Be the change with the Volunteering Club! Join us to make a positive impact, give back to the community, and inspire hope through acts of kindness. < br/>Together, we can make a difference! </p>
   <img src={images2VolClub1} alt="banner2" className="sports6" />
   
   </div>
   </div>

   <div  className="recent-newsbible">
   <h1>Welfare club</h1>
   <p>Join the Welfare Club and help create a supportive and caring community! < br/> Together, we work to promote well-being, provide assistance, and uplift those in need. Let’s make kindness our mission! </p>
   <img src={images2WelfareClub} alt="banner2" className="sports6" />
   
   </div>

   <div  className="recent-newsbible">
   <h1>We are One peace club</h1>
   <p>Join the Peace Club! 🌍✨ Together, we can promote harmony, understanding, and positive change in our community and beyond. < br/> Let’s build a brighter, more peaceful world—one step at a time! < br/> </p>
   <img src={images2Hwpl4 } alt="banner2" className="sports6" />
   
   </div>
   </div>
  
         < Footer/>
        </>
 
    )
 }
 
 export default Projects ;
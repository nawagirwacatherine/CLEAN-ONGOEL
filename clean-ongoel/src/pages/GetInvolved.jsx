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
    <h1>Biblestudy</h1>
    <p>Join Us for a Journey Through the Word of God

Are you looking for a community that shares your love for God’s Word? Or perhaps you’re curious to explore the Bible in a deeper, more meaningful way? We’d love for you to join us at our weekly Bible study!

Our gatherings are a time for fellowship, learning, and growing together in faith. Whether you're new to the Bible or a seasoned reader, this is a space where questions are welcomed, discussions are heartfelt, and lives are transformed.

📖 Why join us?

Discover the life-changing message of God’s Word.
Build meaningful connections with others on the same journey.
Find encouragement, guidance, and hope for your daily life.



Don’t miss this opportunity to grow spiritually and connect with others in faith. Let’s walk this journey together!

We can’t wait to see you there.</p>
     <img src={imagesBible2} alt="blood2" className="blood1" />
     <h1>Blood Donation</h1>
     <p>Every day, millions of people around the world rely on the generosity of blood donors to survive. Whether it’s for emergency surgeries, cancer treatments, or accidents, the demand for blood never stops. That’s why we get involved  in life-saving missions.</p>
     <img src={imagesBlood2 } alt="blood2" className="blood1" />
     </div>
     <div className="get-involved2">
        <h1>Volunteering</h1>
        <p>Looking for a way to make a difference in your community? Join us for exciting volunteering activities that touch lives and create lasting impact. Whether you’re passionate about giving back or simply looking for a way to connect with others, there’s a place for you here!</p>
     <img src={imagesVol4} alt="vol2" className="blood1" />
     <h1>Health camps</h1>
     <p>Good health is the foundation of a happy life, but in the hustle and bustle of everyday life, it’s easy to neglect it. That’s why we’re always excited for our  health camp where everyone is given  chance to focus on their  well-being and access essential health services for free.

Free Health Checkups: Get your vitals checked, including blood pressure, sugar levels, and more.
Expert Consultations: Meet doctors, dietitians, and health professionals to guide you on your wellness journey.
Health Awareness Sessions: Learn tips on managing stress, eating healthy, and staying active.
Community Support: Connect with others who are prioritizing their health and well-being.</p>
     <img src={imagesHealth2} alt="health2" className="blood1" />
     </div>
</div>
         < Footer/>
        </>
 
    )
 }
 
 export default GetInvolved ;
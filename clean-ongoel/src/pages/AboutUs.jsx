import imagesHwpl1 from "../images/hwpl1.jpg";
import imagesFooter from "../images/footer.jpg";
import Footer from "../components/Footer.jsx"


function  AboutUs () {
    return (
        <>
             <img src={imagesHwpl1} alt="hwpl1" className="image" />
            <img src={imagesFooter} alt="blood2" className="blood2" />
        <div className="content"> 
        <div className="content1"> 
CLEAN ONGOEL UGANDA is a Korean NON Government Organization that is remarkably impacting the lives of Ugandans.
Having been established about 3 years ago, our achievements are quite tremendous and our success story is clearly visible in such a short period of time. Our main offices are located in Nakulabye, a city suburb about 10km west of the city Centre. There is also a branch in Nansana.
</div>
<div className="content1"> 
Among the many activities that we do, CLEAN ONGOEL’s primary focus is to advocate for peace through religious harmony (suppressing coercive conversion from religion to religion) but also teach people the Word of God for spiritual growth .We believe that when your spiritual life is on the right path, then the physical life will absolutely be successful. Besides that, we are training Ugandans in a number of vocational skills at no cost. This comes as a remedy to support the unemployed youth in Uganda.

 Anybody that wants to join our organization just needs to pass interviews conducted at our offices in Nakulabye and thereafter they can take part in free courses like learning Korean language, personal development skills and Bible study sports among others.

 </div>
 <div className="content2"> 
We recently held a successful summit at Gadhafi Mosque with a number of religious leaders where we discussed ways forward of how to encourage peace through religious harmony and freedom. Besides that, we held a sports gala in November and also peace walks in the city Centre. We also had a cleaning event in Nakulabye Church zone in Rubaga division. We intend to have more community based activities, having had a good public reception.
</div>
<div className="content2"> 
There are over 300 members who have joined and the doors are still open to anyone who wishes to be a part of this. As part of our expansion plan, we are extending our activities to other parts of Uganda like Mbarara, Gulu, and Jinja but also east and Central Africa as well.
</div></div>
         < Footer/>
        </>
 
    )
 }
 
 export default  AboutUs;
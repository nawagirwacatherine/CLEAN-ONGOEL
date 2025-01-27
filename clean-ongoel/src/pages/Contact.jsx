import Footer from "../components/Footer.jsx"
import Login from "../components/Login.jsx"

function  Contact () {
    return (
        <>
          <div className="peace1"> </div>

          <div  className="recent-news1">
              <div  className="recent-newsblood">
              <h1>For bible course and study</h1>
              <p className="to-form">Please fill the form below.< br /> we shall contact you or reachout to our different branches </p>
           < Login  name = "Register"/>
             </div>
             <div  className="recent-newshealth">
             <h1>For other activities</h1>
             <p className="to-form"> Fill the form below.< br /> Dont forget to mention the activity of your interest </p>
             < Login name="Register" />
             </div>
             </div>
         < Footer />
        </>
 
    )
 }
 
 export default  Contact;
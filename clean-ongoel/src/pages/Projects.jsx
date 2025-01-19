
import imagesHwpl1 from "../images/hwpl1.jpg";
import imagesHwpl2 from "../images/hwpl2.jpg";
import imagesHwpl3 from "../images/hwpl3.jpg";
// import imagesHwpl4 from "../images/hwpl4.jpg";
import imagesBloodd1 from "../images/bloodd1.jpg";
import imagesBloodd2 from "../images/bloodd2.jpg";
import imagesZion1 from "../images/zion1.jpg";
import imagesZion2 from "../images/zion2.jpg";
import Footer from "../components/Footer.jsx"

function  Projects () {
    return (
        <>
        
<div className="projects">
  <div className="projects-section">
  <div >
    <section className="projects-item">
    <div >
      <img src={imagesHwpl1} alt="hwpl1" className="image" />
      </div>
      <div >
      <img src={imagesHwpl2} alt="hwpl1" className="image" />
      </div>
      <div>
      <img src={imagesHwpl3} alt="hwpl1" className="image" />
      </div>
      {/* <div>
      <img src={imagesHwpl4} alt="hwpl1" className="image" />
      </div> */}
      <article>
      <p>
      Clean Ongoel does peace work through HWPL
HWPL means Heavenly Culture, World
 Peace , Restoration of Light.
It aims to achieve world peace through the heavenly culture and restore the global community with light, we are carrying out peace activities.
        <br /> Chairman Man Hee Lee.
      </p>
      </article>
    </section>

    <div className="">

    <div className="projects-item">
      <img src={imagesBloodd1} alt="Testimonial 2" className="image" />
      <img src={imagesBloodd2} alt="Testimonial 2" className="image" />
      <article>
      <p>
        <br />— James K.
      </p>
      </article>
    </div>
    </div>

   

    <section className="projects-item">
      <img src={imagesZion1} alt="Testimonial 3" className="image" />
      <img src={imagesZion2} alt="Testimonial 3" className="image" />
      <article>
      <p>
        <br />— Linda T.
      </p>
      </article>
    </section>
    </div>
  </div>
</div>
         < Footer/>
        </>
 
    )
 }
 
 export default Projects ;
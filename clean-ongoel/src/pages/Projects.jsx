
import imagesHwpl1 from "../images/hwpl1.jpg";
import imagesBloodd1 from "../images/bloodd1.jpg";
import imagesZion1 from "../images/zion1.jpg";
import Footer from "../components/Footer.jsx"

function  Projects () {
    return (
        <>
        
<div className="projects">
  <div className="projects-section">
    <section className="projects-item">
      <img src={imagesHwpl1} alt="hwpl1" className="image" />
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

    <section className="projects-item">
      <img src={imagesBloodd1} alt="Testimonial 2" className="image" />
      <article>
      <p>
        <br />— James K.
      </p>
      </article>
    </section>

    <section className="projects-item">
      <img src={imagesZion1} alt="Testimonial 3" className="image" />
      <article>
      <p>
        <br />— Linda T.
      </p>
      </article>
    </section>

  </div>
</div>
         < Footer/>
        </>
 
    )
 }
 
 export default Projects ;
import imagesSports1 from '../images/Sports1.mp4';
// import imagesSports2 from '../images/Sports2.mp4';
// import imagesSports3 from '../images/Sports3.mp4';
// import imagesSports4 from '../images/Sports4.mp4';
// import imagesSports5 from '../images/Sports5.mp4';

import Footer from "../components/Footer.jsx"

function  News () {
    return (
        <>
                <video controls>
  <source src={imagesSports1} type="sports1/mp4" />
  {/* <source src={imagesSports2} type="sports2/mp4" />
  <source src={imagesSports3} type="sports3/mp4" />
  <source src={imagesSports4} type="sports4/mp4" />
  <source src={imagesSports5} type="sports5/mp4" /> */}
</video>
         <  Footer />
        </>
 
    )
 }
 
 export default News ;
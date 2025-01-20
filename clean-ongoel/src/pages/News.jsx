// import imagesSports1 from '../images/Sports1.mp4';
// import imagesSports2 from '../images/Sports2.mp4';
// import imagesSports3 from '../images/Sports3.mp4';
// import imagesSports4 from '../images/Sports4.mp4';
// import imagesSports5 from '../images/Sports5.mp4';

import Footer from "../components/Footer.jsx"

function  News () {

    const videos =[
        'sports1.mp4',
        'sports2.mp4',
        'sports3.mp4',
        'sports4.mp4',

    ];
    return (
        <div className="news">
            {
                videos.map((video, index) => (
                    <video key={index} controls width="320" height ="240">
                        <source src= {videos} type="video/mp4"/>
                    </video>
                ))
            }
                <video controls>
  {/* <source src={imagesSports1} type="sports1/mp4" />
  <source src={imagesSports2} type="sports2/mp4" />
  <source src={imagesSports3} type="sports3/mp4" />
  <source src={imagesSports4} type="sports4/mp4" />
  <source src={imagesSports5} type="sports5/mp4" /> */}
</video>
         <  Footer />
        </div>
 
    )
 }
 
 export default News ;
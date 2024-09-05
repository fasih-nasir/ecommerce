import { Link } from 'react-router-dom';

function About(){
    return(
        <>
       <section className=" py-2">
  <div className="container d-flex flex-column  ab-cont align-items-center justify-content-center py-3">
 
    <div className="text-center" style={{ maxWidth: '66%' }}>
      <h1 className="display-5 fw-bold mb-4 span1">Innovative Trend Enthusiast</h1>
      <p className="lead mb-4">Stylish, eco-conscious trends with artisan flair, blending DIY culture, gourmet flavors, and minimalist design for the modern creative.</p>
      <div className="d-flex justify-content-center">
      
        <button className="btn btn1">See Info</button>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default About;
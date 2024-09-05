import img1 from "../assets/product-2.jpg" ;
import Contact  from "./contact";
import About from "./about";
function Home(){
    return(
        <>
        {/* section:1 */}
        
 <section className=" py-5">
  <div className="container d-flex flex-column align-items-center justify-content-between flex-md-row align-items-center py-5">
    <div className="col-6  mb-4 mb-md-0 text-center text-md-start d-flex flex-column justify-content-center ">
      <h1 className="display-5 fw-medium">
      Exclusive <span className="span1"> Handcrafted </span>Goods
 
      </h1>
      <p className="lead my-4">
      Discover curated, artisanal items from organic air plants to gourmet cold-pressed snacks, all designed to elevate your everyday living..
      </p>
      <div className="d-flex justify-content-center justify-content-md-start">
        <button className="btn btn1">
          See Products
        </button>

      </div>
    </div>
    <div className="col-5  text-center mb-4 mb-md-0">
      <img
        className="img-fluid rounded img1"
        alt="hero"
        src={img1}
      />
    </div>
  </div>
</section>

<h1 className="text-center display-4 fw-bold " >About Us</h1>
<About/>
< Contact/>
        </>
    )
}
export default Home
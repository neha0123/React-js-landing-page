import React from 'react';
import img from './assets/Highavenue logo.png'
import img1 from './assets/instagram.png'
import img2 from './assets/linkedin.png'
import img3 from './assets/tik-tok.png'
import img4 from './assets/twitter.png'

const Home=()=>{
  return (
    <>
    
<section id="header" className="d-flex align-items-center">
<div className="container-fluid nav_bg">
<div className="row">
    <div className="col-10 mx-auto">
    <div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

    <h2 className="brand-name"><img className="img1" src={img} />Highavenue </h2>
    <h1 className="my-3">Create short 3D animations in your smartphone within minutes</h1>
    <h5> Be a Creator.</h5>
<div className="mt-3">
    <a href="" className="btn-get-started">Get early access</a>
</div>
<div className="d-flex image  d-flex justify-content-start flex-row">
 <a  href="" className="brand-name"><img  className="image1" src={img1} /> </a>
 <a href="" className="brand-name"><img className="image1" src={img2} /></a>
 <a  href="" className="brand-name"><img className="image1" src={img3} /></a>
 <a href="" className="brand-name"><img  className="image1" src={img4} /></a>
</div>
</div>



</div>
</div>
</div>
</div>
</section>

    </>
  )
}
export default Home;

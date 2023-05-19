import React from 'react'
import { Link } from 'react-router-dom'
import Banner from "../components/Banner";

function About() {
  const bannerImg = [
    "https://static.vecteezy.com/system/resources/thumbnails/006/828/785/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
  ];
  
  return (
    <div >
      <div className='text-center mt-5'>
     <h3>Welcome to the Store</h3>
     <h5>Get to know About Us</h5>
     <hr/>
     </div>
     <div className='row '>
      <div className='col-md-6 col-sm-12 text-center'>
     <img className='img-fluid' src='https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-the-woman-is-recording-video-for-her-followers-and-sell-clothes-png-image_6039646.png' alt=''></img>
     </div>
     <div className='col-md-6 col-sm-12 py-5 my-5 text-left'>
     <h5  >Now that you know the steps of article writing 
      linguistic and<br/> religious minorities. In this article, you 
      can read all about Article 29 and<br/> Article 30 of the Indian
      Cultural and Educational Rights safeguards <br/> the rights of
      linguistic and religious minorities. In this article, <br/>
      you can read all about Article 29 and Article 30 of the<br/>
       Indian Constitution. Constitution.</h5>
       </div>
       </div>
       <div>
      <Banner bannerImg={bannerImg} />
    </div>
    </div>
  )
}

export default About

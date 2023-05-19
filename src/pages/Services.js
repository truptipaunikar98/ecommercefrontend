import React from "react";
import Banner from "../components/Banner";

function Services() {
  const bannerImg = [
    "https://loveinstore.com/assets/images/marketing-service-banner.jpg",
    "https://growkal.com/wp-content/uploads/2021/06/e-commerce-development-services.jpg",
    "https://easybuyng.com/wp-content/uploads/2018/05/ecommerce-banner.jpg"
  ];
  return (
    <div className="mt-3 ">
       <div className='text-center mt-5'>
     <h3>Our Services</h3>
     <h5>Get to know about Our Services</h5>
     </div>
      <hr/>
      <div className='row  my-5'>
      <div className='col-md-6 col-sm-12 text-center '>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xGZCTymnbq9nd29T535iiBeVJiKquDB_Vw&usqp=CAU' alt=''></img>
     </div>
     <div className='col-md-6 col-sm-12 m-auto text-left'>
     <h5 className="px-3" >Cultural and Educational Rights safeguards the rights of 
      linguistic and<br/> religious minorities. In this article, you 
      can read all about Article 29 and<br/> Article 30 of the Indian
      Cultural and Educational Rights safeguards <br/> the rights of
      linguistic and religious minorities. In this article, <br/>
      you can read all about Article 29 and Article 30 of the<br/>
       Indian Constitution. Constitution.</h5>
       </div>
       </div>

       <Banner bannerImg={bannerImg} />
    </div>
  );
}

export default Services;

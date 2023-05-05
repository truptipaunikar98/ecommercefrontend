import React from "react";
import Banner from "../components/Banner";

function Home() {
  const bannerImg = [
    "https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg",
    "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
  ];
  return (
    <div>
      <Banner bannerImg={bannerImg} />
    </div>
  );
}

export default Home;

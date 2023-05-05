import React from 'react'
import Banner from "../components/Banner";

function Trending() {
  const bannerImg = [
    "https://images.template.net/108411/fashion-store-banner-template-vub7l.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1dae9f63149899.5aa7a8c74c345.png",
    "https://www.fashiontrends.style/wp-content/uploads/2021/07/FashionTrends-Why-is-sustainable-fashion-so-important-Banner.png"
  ];
  return (
    <div>
       <Banner bannerImg={bannerImg} />
    </div>
  )
}

export default Trending

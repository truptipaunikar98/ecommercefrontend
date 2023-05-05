import React from 'react'
import Banner from "../components/Banner";

function Footwear() {
  const bannerImg = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbcfa99737217.5ef9be3dbb9a9.jpg",
    "https://www.shutterstock.com/image-vector/running-sport-shoes-banner-horizontal-260nw-701407561.jpg",
    "https://cdn.vectorstock.com/i/preview-1x/56/07/shoe-sell-social-media-banner-footwear-vector-45805607.jpg",
  ];
  return (
    <div>
      <Banner bannerImg={bannerImg} />
    </div>
  )
}

export default Footwear

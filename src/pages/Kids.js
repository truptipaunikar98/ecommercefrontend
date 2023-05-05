import React from 'react'
import Banner from "../components/Banner";

function Kids() {
  const bannerImg = [
    "https://manage.babycouture.in/public/banners/banner_1662555805.png",
    "https://media.centrepointstores.com/i/centrepoint/Web_en_HP_Qatar_SpecialOffer_Girls_28apr23?$banimg-d-rb$&$quality-standard$&fmt=auto",
    "https://apparelgroupglobal.com/en/wp-content/uploads/2022/08/kids-banner.jpg",
  ];
  return (
    <div>
      <Banner bannerImg={bannerImg} />
    </div>
  )
}

export default Kids

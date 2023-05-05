import React from 'react'
import Banner from "../components/Banner";

function Womens() {
  const bannerImg = [
    "https://marketplace.canva.com/EAFGEeS4NT4/1/0/1600w/canva-pink-and-blue-modern-fashion-banner-scbyLcbiT_s.jpg",
    "https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg",
    "https://thumbs.dreamstime.com/b/banner-half-face-brunette-profile-banner-half-face-brunette-profile-illustration-175321336.jpg",
  ];
  return (
    <div>
       <Banner bannerImg={bannerImg} />
    </div>
  )
}

export default Womens

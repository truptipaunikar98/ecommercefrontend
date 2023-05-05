import React from 'react'
import Banner from "../components/Banner";

function Mens() {
  const bannerImg = [
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37041227.jpg",
    "https://i0.wp.com/3rdrailclothing.co.uk/wp-content/uploads/2016/08/AW16-Menswear-banner.png?fit=1500%2C720&ssl=1",
    "https://savillemenswearcork.files.wordpress.com/2015/03/mens-layering-autumnwinter-2015-banner.jpg",
  ];
  return (
    <div>
       <Banner bannerImg={bannerImg} />
    </div>
  )
}

export default Mens

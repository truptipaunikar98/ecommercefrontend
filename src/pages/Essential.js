import React from "react";
import Banner from "../components/Banner";

function Essential() {
  const bannerImg = [
    "https://as2.ftcdn.net/v2/jpg/02/28/52/25/1000_F_228522505_9JwtR186L8fUQFqyP7NbUYcp0XZSo1ao.jpg",
    "https://www.agessentialoils.com/wp-content/uploads/2019/09/Essential-oil-banner.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhAcpwICjY_b4uqBmLHb0jNV2i8tXiNFiUA&usqp=CAU"
  ];
  return (
    <div>
      <Banner bannerImg={bannerImg} />
    </div>
  );
}

export default Essential;

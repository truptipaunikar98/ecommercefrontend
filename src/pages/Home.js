import React from 'react'
import {useState, useEffect} from 'react'
import Banner from "../components/Banner";
import List from '../components/List';
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Home() {
  const bannerImg = [
    "https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg",
    "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
  ];
  
  const [products, setProducts]=useState([])
  const userCollectionRef = collection(db, "products");
  const getProducts = async () => {
    const data = await getDocs(userCollectionRef);
 
  let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
      return(
         v.values.category=="bestseller"
      )
  })
     setProducts(filteredArray);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
       <Banner bannerImg={bannerImg} />
       <List products={products} heading="Best Seller" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
    </div>
  );
}

export default Home;

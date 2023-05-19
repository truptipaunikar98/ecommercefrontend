import React from 'react'
import {useState, useEffect} from 'react'
import Banner from "../components/Banner";
import List from '../components/List';
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Trending() {
  const bannerImg = [
    "https://images.template.net/108411/fashion-store-banner-template-vub7l.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1dae9f63149899.5aa7a8c74c345.png",
    "https://www.fashiontrends.style/wp-content/uploads/2021/07/FashionTrends-Why-is-sustainable-fashion-so-important-Banner.png"
  ];
  const [products, setProducts]=useState([])
  const userCollectionRef = collection(db, "products");
  const getProducts = async () => {
    const data = await getDocs(userCollectionRef);
 
  let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
      return(
         v.values.category=="trending"
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
       <List products={products} heading="Trending" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
    </div>
  )
}

export default Trending

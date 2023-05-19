import React from 'react'
import {useState, useEffect} from 'react'
import Banner from "../components/Banner";
import List from '../components/List';
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Kids() {
  const bannerImg = [
    "https://manage.babycouture.in/public/banners/banner_1662555805.png",
    "https://media.centrepointstores.com/i/centrepoint/Web_en_HP_Qatar_SpecialOffer_Girls_28apr23?$banimg-d-rb$&$quality-standard$&fmt=auto",
    "https://apparelgroupglobal.com/en/wp-content/uploads/2022/08/kids-banner.jpg",
  ];
  const [products, setProducts]=useState([])
  const userCollectionRef = collection(db, "products");
  const getProducts = async () => {
    const data = await getDocs(userCollectionRef);
 
  let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
      return(
         v.values.category=="kids"
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
      <List products={products} heading="Kids Wear" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
    </div>
  )
}

export default Kids

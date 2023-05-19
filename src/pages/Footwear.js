import React from 'react'
import {useState, useEffect} from 'react'
import Banner from "../components/Banner";
import List from '../components/List';
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Footwear() {
  const bannerImg = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbcfa99737217.5ef9be3dbb9a9.jpg",
    "https://www.shutterstock.com/image-vector/running-sport-shoes-banner-horizontal-260nw-701407561.jpg",
    "https://cdn.vectorstock.com/i/preview-1x/56/07/shoe-sell-social-media-banner-footwear-vector-45805607.jpg",
  ];

  const [products, setProducts]=useState([])
  const userCollectionRef = collection(db, "products");
  const getProducts = async () => {
    const data = await getDocs(userCollectionRef);
 
  let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
      return(
         v.values.category=="footwear"
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
       <List products={products} heading="Footwear" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
    </div>
  )
}

export default Footwear

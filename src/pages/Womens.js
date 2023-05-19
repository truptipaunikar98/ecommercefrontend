import React from 'react'
import {useState, useEffect} from 'react'
import Banner from "../components/Banner";
import List from '../components/List';
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Womens() {
  const bannerImg = [
    "https://marketplace.canva.com/EAFGEeS4NT4/1/0/1600w/canva-pink-and-blue-modern-fashion-banner-scbyLcbiT_s.jpg",
    "https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg",
    "https://thumbs.dreamstime.com/b/banner-half-face-brunette-profile-banner-half-face-brunette-profile-illustration-175321336.jpg",
  ];
   const [products, setProducts]=useState([])
  const userCollectionRef = collection(db, "products");
  const getProducts = async () => {
    const data = await getDocs(userCollectionRef);
 
  let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
      return(
         v.values.category=="womens"
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
       <List products={products} heading="Womens Wear" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
    </div>
  )
}

export default Womens

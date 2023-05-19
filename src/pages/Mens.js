import React from 'react'
import {useState, useEffect} from 'react'
import Banner from "../components/Banner";
import List from '../components/List';
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Mens() {
  const bannerImg = [
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37041227.jpg",
    "https://i0.wp.com/3rdrailclothing.co.uk/wp-content/uploads/2016/08/AW16-Menswear-banner.png?fit=1500%2C720&ssl=1",
    "https://savillemenswearcork.files.wordpress.com/2015/03/mens-layering-autumnwinter-2015-banner.jpg",
  ];
  const [products, setProducts]=useState([])
  const userCollectionRef = collection(db, "products");
  const getProducts = async () => {
    const data = await getDocs(userCollectionRef);
 
  let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
      return(
         v.values.category=="mens"
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
       <List products={products} heading="Mens Wear" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
    </div>
  )
}

export default Mens

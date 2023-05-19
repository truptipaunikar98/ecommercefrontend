import React from 'react'
import {useState, useEffect} from 'react'
import Banner from "../components/Banner";
import List from "../components/List";
import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Essential() {
  const bannerImg = [
    "https://www.agessentialoils.com/wp-content/uploads/2019/09/Essential-oil-banner.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/28/52/25/1000_F_228522505_9JwtR186L8fUQFqyP7NbUYcp0XZSo1ao.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhAcpwICjY_b4uqBmLHb0jNV2i8tXiNFiUA&usqp=CAU"
  ];
  const [products, setProducts]=useState([])
  const userCollectionRef = collection(db, "products");
  const getProducts = async () => {
    const data = await getDocs(userCollectionRef);
 
  let filteredArray=data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((v,i)=>{
      return(
         v.values.category=="essential"
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
       <List products={products} heading="Essential" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
    </div>
  );
}

export default Essential;

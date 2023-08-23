"use client"
import React, { useEffect, useState } from 'react'
import {API_URL} from "../constant"
import Link from 'next/link';
import Image from 'next/image';
const Blog = () => {
  const [blogData, setBlogData] =  useState([]);

  useEffect(()=>{
    const  getBlogData = async ()=> {
      try{
        const res = await fetch(`${API_URL}/post-list/2`, {
          cache: "no-store",
        });
        const data = await res.json();
        setBlogData(data);
        console.log(data);
      } catch (err){
        console.error(error);
      }
    };
    getBlogData();
  },[]);

  return (
    <div>
      Blog page!!!
      <Link href="/blog/1">
       <p>this 1</p>
      </Link>
      {
        blogData?.map((item,i)=>(
          <div key={i}>
            <Image
              src={item?.img}
              alt="Image"
              width={400}
              height={250}
            />
            <h3>{item?.title}</h3>
            <p>{item?.short}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Blog
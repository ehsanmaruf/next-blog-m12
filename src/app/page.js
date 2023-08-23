"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { API_URL } from './constant';

const HomePage = () => {
  const [categoryData, setCategoryData] =  useState([]);
  const [newestPost, setNewestPost] =  useState([]);
  const [blogData, setBlogData] =  useState([]);

  useEffect(()=>{
    const  getCategoryData = async ()=> {
      try{
        const res = await fetch(`${API_URL}/post-categories`, {
          cache: "no-store",
        });
        const data = await res.json();
        setCategoryData(data);
        console.log(data);
      } catch (err){
        console.error(error);
      }
    };

    const getNewestPost = async ()=> {
      try{
        const res = await fetch(`${API_URL}/post-newest`, {
          cache: "no-store",
        });
        const data = await res.json();
        setNewestPost(data);
        console.log(data);
      } catch (err){
        console.error(error);
      }
    };

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

    getCategoryData();
    getNewestPost();
    getBlogData();
  },[]);

  return (
    <div>
      <h1>HomePage</h1>
      <h3>Section:1-Blog Category:</h3>
      <div>
        {
        categoryData.map((item, i) => (
          <span key={i} style={{marginRight: "20px"}}>
            {item?.name}
          </span>
        ))
        }
      </div>

      <h3>Section:2-New Blog:</h3>
      <div>
        {
        newestPost.map((item, i) => (
          <div key={i} style={{width: "400px"}}>
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

      <h3>Section:3-Blog</h3>
      <div>
      {
        blogData?.map((item,i)=>(
          <div key={i} style={{width: "400px"}}>
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

    </div>
  )
}

export default HomePage
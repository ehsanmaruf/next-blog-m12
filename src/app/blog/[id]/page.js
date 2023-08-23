"use client"
import { useEffect, useState } from 'react';
import { API_URL } from "../../constant";

const SingleBlog = () => {
 const [blogData, setBlogData] =  useState();
 useEffect(()=>{
  const getData = async ()=> {
    try{
      const res = await fetch(`${API_URL}/post-details/53`, {
        cache: "no-store",
      });
      const data = await res.json();
      setBlogData(data.postDetails);
      console.log(data)
    } catch (err){
      console.log(err);
    }
  };
  getData();
},[]);

console.log(blogData);

  return (
    <div>
        SingleBlog
        {
          <div>
            <img src={blogData?.img}/>
            <h3>{blogData?.title}</h3>
            <p>{blogData?.content}</p>
          </div>
        }
    </div>
  )
}

export default SingleBlog
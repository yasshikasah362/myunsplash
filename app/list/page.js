"use client";
import React, { useContext } from "react";
import { DataContext } from "../context";
import Nav from "@/app/components/Nav";
import Link from "next/link";



const Trending = () => {
    const [data, setData] = useContext(DataContext);
    // console.log(data);
    let listrender=<p>Loading...</p>;
    if(data.length>0){
        listrender=data.map((d,i)=>{
           return(           
              <div key={d.id} class="card " style={{width:'400px',height:'480px',marginBottom:'50px',margin:'50px 50px'}}  >
  <img src={d.links.download} style={{height:'350px',width:'400px'}} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Author Name-{d.user.first_name}</h5>
    <p class="card-text">{d.alt_description}</p>
    <Link href={d.links.download + "?force=true" } target="_blank" style={{textDecoration:'none',color:'black'}}>Download <i class="ri-download-line"></i></Link>
    
  </div>
  </div>
              
             
           
           
           )
        })
    }    
    return (
      <>
      <Nav/>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}} className="image1">
        {listrender} 

       

        
       
        </div>
      </>
    )
};



export default Trending;
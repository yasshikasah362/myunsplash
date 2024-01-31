"use client"
import axios from 'axios';
import React, { useState } from 'react'
import Nav from "@/app/components/Nav"
import Link from 'next/link';


const Search = () => {
 
  const[slug,setSlug]=useState("");
  const [image, setimage] = useState([]);

  const SearchHandler= async(e)=>{
    e.preventDefault();
    try {
      const{data}=await axios.get(`https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=${slug}`);
      setimage(data.results);
      setSlug('')
      
    } catch (error) {
       console.log(error);
    }
  }

  let searchrender=<p style={{textAlign:'center',fontSize:'3rem'}}>Loading...</p>
  if(image.length>0){
    searchrender=image.map((d,i)=>{
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
     
     <div className='list' style={{height:"maxContent"}}>
      <h1 style={{textAlign:'center'}} >Search Image</h1>
      <form style={{textAlign:'center',height:'100px',paddingTop:'40px'}} onSubmit={SearchHandler}>
        <input style={{height:'40px',width:'700px',borderRadius:'10px',border:'2px soild blck'}} type="text" value={slug} onChange={(e)=>setSlug(e.target.value)} placeholder='Search Your Image' />
        <button style={{width:'70px',marginLeft:'20px',height:'40px',borderRadius:'10px'}} className='sebtn'>Search</button>
      </form>
     
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}} className="image1">
        {searchrender}     
       
        </div>
     </div>
   </>
  )
}

export default Search
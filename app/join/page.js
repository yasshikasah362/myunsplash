"use client"
import React from 'react'
import Nav from "@/app/components/Nav"

const page = () => {
  return (
    <>
    <Nav/>
    
    <div style={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'space-between'}} id="main">
        <div style={{width:'48%',height:'100%'}} className="section">
           <h1 style={{paddingTop:'220px',paddingLeft:'100px',fontSize:'3rem'}}>Join the Unsplash team. <br />From anywhere.</h1>
           <p style={{paddingLeft:'100px'}}>Over 3 million free high-resolution images brought to you by the <br /> world’s most generous community of photographers.</p>

        </div>
        <div style={{width:'48%',height:'100%',overflow:'hidden'}} className="section">
            <img style={{height:'100%',width:'100%',objectFit:'cover',padding:'50px 50px'}} src="https://unsplash-assets.imgix.net/marketing/hiring-header.jpg" alt="" />
        </div>
    </div>



    </>
    
  )
}

export default page
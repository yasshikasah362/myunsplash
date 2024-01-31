"use client"
import React from 'react'
import style from '@/app/components/style.module.css'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useContext} from "react";
import { DataContext } from "../context";

const Nav = () => {
  const router = useRouter();
    const [Data, setData] = useContext(DataContext);


    const GetTrending = async () => {
        const { data } = await axios.get("https://api.unsplash.com/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1");
        setData(data);
        // router.push("/list");
    };

    
  return (
    <>
      <div className={style.navbar}>
      <div className={style.part1}>
                 <img src="https://th.bing.com/th/id/R.de4579470787e270a9c6cbbc818ed2ce?rik=h%2bE6zLjywJuPjQ&riu=http%3a%2f%2ffreelancerslifestyle.com%2fwp-content%2fuploads%2f2021%2f01%2fUnsplash_Logo_Full_Stacked.png&ehk=EpnEAmLoWyLZXAiHwV4zjWjD0pqt4%2b3QPG%2bLZTGYBog%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
            <div className={style.part2}>
               <Link style={{textDecoration:'none',color:'black',fontSize:'1.2rem'}} href='/'>Home</Link>
                <Link style={{textDecoration:'none',color:'black',fontSize:'1.2rem'}} href='/list' onClick={GetTrending}>Trending Image</Link>
                <Link style={{textDecoration:'none',color:'black',fontSize:'1.2rem'}} href='/search'>Search Image🔍</Link>
                <Link style={{textDecoration:'none',color:'black',fontSize:'1.2rem'}} href='/about'>About</Link>
                <Link style={{textDecoration:'none',color:'black',fontSize:'1.2rem'}} href='/join'>Join</Link>
            </div>
      </div>
    </>
  )
}

export default Nav
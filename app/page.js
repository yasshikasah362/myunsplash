"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect} from "react";
import { DataContext } from "./context";
import Nav from "@/app/components/Nav"

const page = () => {
    const router = useRouter();
    const [Data, setData] = useContext(DataContext);


    const GetTrending = async () => {
        const { data } = await axios.get("https://api.unsplash.com/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1");
        setData(data);
        router.push("/list");
    };

    useEffect(()=>{
        GetTrending
    },[]);

    
//  reconciliation  realdom virtualdom
    return (
        <>
        
    <div className="main">
        <Nav/>

        <h1 style={{marginTop:'200px',color:'white',fontSize:'3rem',marginLeft:'400px'}}>Unsplash</h1>
        <p style={{color:'white',fontSize:'1.5rem',marginLeft:'400px'}}>The internet’s source for visuals. <br />
Powered by creators everywhere.</p>
          
    </div>

       
        </>

      
         
        
    );
};

export default page;


import React, { useEffect, useState } from 'react'
import Searchbar from '../SharedModule/Components/Searchbar/Searchbar'
import axios from 'axios';
import { baseUrl } from '../Constants/Constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    const [categories,setCategories]=useState([]);
    const navigate=useNavigate();
    
    async function getAllCategories() {
        try {
            const response = await axios.get(`${baseUrl}/categories`);
            console.log(response.data.data.categories);
            setCategories(response?.data?.data?.categories);

        } catch (error) {
            // console.log(error);
            toast.error('Something Went Wrong!');
        }
    }
    useEffect(()=>{
        getAllCategories();
    },[])

  return (
    <div className='w-100 vh-100 text-center'>
        <h2 className='my-5'>الدليل الرقمي</h2>
        <div className="search">
        <Searchbar/>
        </div>

        <div className="categories row m-5 justify-content-center">
            {categories?.filter((cat)=>cat.lawyers_count>0).map((cat)=>(
                <button onClick={()=>{navigate(`/lawyers/${cat.id}`); localStorage.setItem('title',cat?.title)}} className="border-0 category shadow col-md-3 col-sm-5 m-3 rounded-4 section row justify-content-center align-items-center">
                <div className="categoryImg bg-white p-3 my-4 shadow" style={{borderRadius:'50%'}}><img src={cat?.image} style={{borderRadius:'50%'}} className='w-100' alt="" /></div>
                <div className="categoryDetails text-center">
                    <h3 className='mb-3'>{cat?.title}</h3>
                    <h6 className='mb-5'>{cat?.lawyers_count} &nbsp;متوفر عدد </h6>
                </div>
            </button>
            ))}
            

        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl, token } from '../Constants/Constants';
import { toast } from 'react-toastify';
import axios from 'axios';
import Searchbar from '../SharedModule/Components/Searchbar/Searchbar';
import lawerImg from '../assets/lawyerImg.png'

export default function Lawyers() {
  const [lawyers,setLawyers]=useState([]);
  const {id}=useParams();
  const navigate=useNavigate();
  const title=localStorage.getItem('title');
    
    async function getAllLawyers() {
        try {
            const response = await axios.post(`${baseUrl}/search`,id,
            {headers: { Authorization: token }}
          );
          console.log(response?.data?.data?.lawyers);
          setLawyers(response?.data?.data?.lawyers)

        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong!');
        }
    }

    async function searchByName(name) {
      try {
          const response = await axios.post(`${baseUrl}/search`,{id:id,name:name},
          {headers: { Authorization: token }}
        );
        // console.log(response?.data?.data?.lawyers);
        setLawyers(response?.data?.data?.lawyers)

      } catch (error) {
          // console.log(error);
          toast.error('Something Went Wrong!');
      }
  }

    useEffect(()=>{
        getAllLawyers();
    },[])

  return (
    <div className='w-100 vh-100 text-center'>
      <h2 className='my-5'>{title}</h2>
        <div className="search">
        <Searchbar getlist={searchByName}/>
        </div>

        <div className="lawyersContainer row m-5 justify-content-center">
            {lawyers?.map((lawyer,index)=>(
                <button onClick={()=>{navigate(`/lawyer-details/${index}/${lawyer?.id}`);}} className="border-0 lawyer shadow col-md-3 col-sm-5 m-3 rounded-4 section bg-white row justify-content-center align-items-center">
                <img src={lawerImg} alt="lawyer" className=' categoryImg p-1 my-4 shadow bg-transparent' style={{borderRadius:'50%'}}/> 
                <div className="categoryDetails text-center">
                    <h4 className='mb-3 d-flex justify-content-center'>
                      <h5><i className='fa fa-check-circle text-info'></i></h5> &nbsp;
                      {lawyer?.name} &nbsp;
                    </h4>
                    <h6 className='mb-3'>{lawyer?.accurate_specialty?.title} <i className='fa fa-crown' style={{color:'orange'}}></i></h6>
                    <h6 className='mb-5 d-flex justify-content-center'><i className='fa fa-star' style={{color:'orange'}}></i>&nbsp; 4.56  (35 مراجعة)</h6>
                </div>
            </button>
            ))}
            

        </div>
    </div>
  )
}

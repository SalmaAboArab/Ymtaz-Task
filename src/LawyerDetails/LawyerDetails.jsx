import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl, token } from "../Constants/Constants";

export default function LawyerDetails() {
  const { index, id } = useParams();
  const [lawyer, setLawyer] = useState({});
  const starArr = Array.from({ length: 5 });
  const navArr = Array.from({ length: 3 });

  const [first,setFirst] = useState(true);
  const [second,setSecond] = useState(false);

  async function getLawyer() {
    try {
      const response = await axios.post(`${baseUrl}/search`, id, {
        headers: { Authorization: token },
      });
      console.log(response?.data?.data?.lawyers[index]);
      setLawyer(response?.data?.data?.lawyers[index]);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  }

  useEffect(() => {
    getLawyer();
  }, []);

  return (
    <div className=" width-100 vh-100 d-flex justify-content-center">
      <div className="container-fluid row justify-content-center">

        <div className="personalInfo col-lg-6 col-md-10 mx-3">

          <div className="container1 mb-3 bg-white rounded-2 p-5">
          <h2 className="mb-3 secondColor">المعلومات الشخصية</h2>
          <div className="row">
            <div className=" position-relative col-xxl-2 col-xl-3 col-md-3">
              <i
                className="fa fa-check-circle text-info position-absolute me-3 mt-1 bg-white rounded-5"
                style={{ top: "15%" }}
              ></i>
              <div
                className="lawyerImg categoryImg bg-white p-3 my-4 shadow"
                style={{ borderRadius: "50%" }}
              ></div>
            </div>

            <div className="col-lg-9 col-md-12 my-auto mx-3">
              <h4 className="secondColor">{lawyer?.name}</h4>
              <h6 className="my-4 mutetext">
                {lawyer?.about}{" "}
                <i className="fa fa-crown mainColor" style={{color:'orange'}}></i>
              </h6>
              <div className="d-flex">
                {starArr.map((index) => (
                  <i className="fa fa-star mx-1" style={{color:'#E2A03F'}}></i>
                ))}
                <h6 className="mutetext me-1">5.00 &nbsp;  التقييم العام من 154 من العملاء</h6>
                <a href="#" className="text-decoration-none me-3 secondColor"><h6>اظهر التقييمات</h6></a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-2">
          <div className="mutetext w-75 py-3" style={{borderTopLeftRadius:'30px', borderBottomRightRadius:'30px',backgroundColor:'#F9F9F9'}}>
            <i className="fa fa-quote-right-alt text-black"></i> &nbsp;<span>تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية</span>
            <div className="d-flex mt-5 ">
                {starArr.map(() => (
                  <i className="fa fa-star mx-1" style={{color:'#E2A03F'}}></i>
                ))}
                <h6 className="mutetext me-1"> <span className="mx-3">Abdullah Faleh</span> &nbsp;  الخميس 3 فبراير 2024</h6>
              </div>
          </div>
          </div>
          </div>

          <div className="container2 bg-white rounded-2 p-4 mb-3">
          <h2 className="mb-3 secondColor">النبذة التعريفية</h2>
          <p className="mutetext ms-5">استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون. يتمتع بخبرة تبلغ سنتين في مجال ممارسة القانون</p>
          </div>

          <div className="container2 bg-white rounded-2 p-4 mb-3">
          <h2 className="mb-3 secondColor">تقييم العملاء:</h2>

          <div className="row mt-5 justify-content-between" >
                <div className="text-center col-md-3 mt-1">
                <div className="d-flex">
                {starArr.map(() => (
                  <i className="fa fa-star mx-1 " style={{fontSize:'25px',color:'#E2A03F'}}></i>
                ))}
                </div>
                <h5 className="mutetext mt-3" >التقييم العام</h5>
                <h5 className="mutetext mt-2">من 154 من العملاء</h5>
                </div>
                {/* &nbsp; &nbsp; &nbsp;  */}

                <div className="text-center col-md-3 mt-1">
                <div className="d-flex">
                {starArr.map(() => (
                  <i className="fa fa-star mx-1 " style={{fontSize:'25px',color:'#E2A03F'}}></i>
                ))}
                </div>
                <h5 className="mutetext mt-3">تقييم المنصة</h5>
                </div>
                {/* &nbsp; &nbsp; &nbsp; */}
                <div className="text-center col-md-3 mt-1">
                  <div className="p-1 text-white rounded-1 mx-auto" style={{backgroundColor:'#E2A03F',width:'50px',fontSize:'20px'}}>
                    5/5
                  </div>
                <h5 className="mutetext mt-3">تقييم الاستشاري</h5>
                </div>
              </div>
          </div>

          <div className="container2 bg-white rounded-2 p-4 mb-1 mt-4">
            <div className="row justify-content-between">
            <div className="col-md-7 mutetext mt-2">
            <div className="d-flex">
                {starArr.map(() => (
                  <i className="fa fa-star mx-1 " style={{color:'#E2A03F'}}></i>
                ))}
                </div>
                <h5 className="my-3" style={{fontWeight:400}}>التقييم العام</h5>
                <p>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</p>
                <h6 style={{fontWeight:400}}>الخميس 3 فبراير 2024</h6>
            </div>

            <div className="col-md-3 text-center mt-2">
            <div className="p-1 text-white rounded-1 mx-auto" style={{backgroundColor:'#E2A03F',width:'50px',fontSize:'20px'}}>
                    5
                  </div>
                <h5 className="mutetext mt-3">تقييم الاستشاري</h5>
            </div>
            </div>
          </div>


          <div className="container2 bg-white rounded-2 p-4 mb-3 ">
            <div className="row justify-content-between">
            <div className="col-md-7 mutetext mt-2">
            <div className="d-flex">
                {starArr.map(() => (
                  <i className="fa fa-star mx-1 " style={{color:'#E2A03F'}}></i>
                ))}
                </div>
                <h5 className="my-3" style={{fontWeight:400}}>التقييم العام</h5>
                <p>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</p>
                <h6 style={{fontWeight:400}}>عبد الله فالح </h6>
                <h6 style={{fontWeight:400}}>الخميس 3 فبراير 2024</h6>
            </div>

            <div className="col-md-3 text-center mt-2">
            <div className="p-1 text-white rounded-1 mx-auto" style={{backgroundColor:'#E2A03F',width:'50px',fontSize:'20px'}}>
                    5
                  </div>
                <h5 className="mutetext mt-3">تقييم الاستشاري</h5>
            </div>
            </div>
          </div>

        </div>


        <div className="bookingInfo col-md-5 bg-white p-4 mx-3 vh-100 pageOverflow overflow-auto">

        <nav className="navbar navbar-expand border-bottom border-2">
  <div className="container-fluid">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

        <li className="nav-item mx-3 ">
          <button className={`nav-link ${first?'border-bottom border-black text-black':''}`} aria-current="page" onClick={()=>{setFirst(true);setSecond(false);}}>أسعار الخدمات</button>
        </li>

        <li className="nav-item mx-3">
          <button className={`nav-link ${second?'border-bottom border-black text-black':''}`} onClick={()=>{setFirst(false);setSecond(true);}}>أوقات العمل</button>
        </li>
        
      </ul>
  </div>
</nav>

           {first?
           navArr.map(()=>(
            <div className="times row justify-content-center align-items-center">
            <div className="mt-5 col-md-8 rounded-2 p-4" style={{backgroundColor:'#F9F9F9'}}>
              <div className="row justify-content-between">
                <div className="col-md-8">
                <h5 style={{fontWeight:400}}><i className="fa fa-phone-volume" style={{color:'#DDB762'}}></i> خدمة الاستشارة الهاتفية</h5>
              <p className="mutetext">ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة</p>
                </div>

                <div className="col-md-4">
                  <h6>سعر الخدمة</h6>
                  <h5 style={{color:'#3FD06F'}}> <span style={{fontSize:'30px'}}>300</span> ر.س</h5>
                </div>
              </div>
              <div><button className="w-100 btn btn-warning text-white">طلب الخدمة</button></div>
            </div>
            
           </div>
           ))
           :''}


           {second?
           <div className="row align-items-center justify-content-center text-center mt-5">
            <div id="carouselExample" className="carousel slide ">
           <div className="carousel-inner">
             <div className="carousel-item active ">
               <div className="time row justify-content-center">

                <div className="col-md-4" >
                  <h5 className="text-white text-center bg-warning w-100 py-3 mb-0 rounded-top-2">اليوم</h5>
                  <div className="appointments bg-light row align-items-center justify-content-center gx-0 text-center rounded-bottom-2" style={{minHeight:'272.36px'}}>
                  لا يوجد مواعيد متاحة
                  </div>
                </div>

                <div className="col-md-4" >
                  <h5 className="text-white text-center bg-warning w-100 py-3 mb-0 rounded-top-2">غدا</h5>
                  <div className="appointments bg-light row align-items-center justify-content-center gx-0 text-center rounded-bottom-2 py-2" style={{minHeight:'272.36px'}}>
                  <button className="text-white w-50 btn btn-warning">10:00 ص</button>
                  <button className=" btn">10:30 ص</button>
                  <button className=" btn">11:00 ص</button>
                  <button className=" btn">11:30 ص</button>
                  <button className=" btn">12:00 ص</button>
                  <button className=" btn">12:30 ص</button>
                  </div>
                </div>

                <div className="col-md-4" >
                  <h5 className="text-white text-center bg-warning w-100 py-3 mb-0 rounded-top-2">الاثنين 02/03</h5>
                  <div className="appointments bg-light row align-items-center justify-content-center gx-0 text-center rounded-bottom-2 py-2" style={{minHeight:'272.36px'}}>
                  <button className="text-white w-50 btn btn-warning">10:00 ص</button>
                  <button className=" btn">10:30 ص</button>
                  <button className=" btn">11:00 ص</button>
                  <button className=" btn">11:30 ص</button>
                  <button className=" btn">12:00 ص</button>
                  <button className=" btn">12:30 ص</button>
                  </div>
                </div>


               </div>
             </div>


             <div className="carousel-item ">
               <div className="time row justify-content-center">

                <div className="col-md-4" >
                  <h5 className="text-white text-center bg-warning w-100 py-3 mb-0 rounded-top-2">اليوم</h5>
                  <div className="appointments bg-light row align-items-center justify-content-center gx-0 text-center rounded-bottom-2" style={{minHeight:'272.36px'}}>
                  لا يوجد مواعيد متاحة
                  </div>
                </div>

                <div className="col-md-4" >
                  <h5 className="text-white text-center bg-warning w-100 py-3 mb-0 rounded-top-2">غدا</h5>
                  <div className="appointments bg-light row align-items-center justify-content-center gx-0 text-center rounded-bottom-2 py-2" style={{minHeight:'272.36px'}}>
                  لا يوجد مواعيد متاحة

                  </div>
                </div>

                <div className="col-md-4" >
                  <h5 className="text-white text-center bg-warning w-100 py-3 mb-0 rounded-top-2">الاثنين 02/03</h5>
                  <div className="appointments bg-light row align-items-center justify-content-center gx-0 text-center rounded-bottom-2 py-2" style={{minHeight:'272.36px'}}>
                  <button className="text-white w-50 btn btn-warning">10:00 ص</button>
                  <button className=" btn">10:30 ص</button>
                  <button className=" btn">11:00 ص</button>
                  <button className=" btn">11:30 ص</button>
                  <button className=" btn">12:00 ص</button>
                  <button className=" btn">12:30 ص</button>
                  </div>
                </div>


               </div>
             </div>

           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
             <span className="carousel-control-prev-icon bg-warning rounded-2" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
             <span className="carousel-control-next-icon bg-warning rounded-2" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
           </div>
           :''}

        </div>
      </div>
    </div>
  );
}

{
  /* <div className="d-flex">    //stars
      {starArr.map((index)=>(
        <i className='fa fa-star mx-1 mainColor'></i>
      ))}
      </div> */
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateUser = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({mode:"onChange"});

    const submit = async(data) => {
        await axios.put("http://localhost:8080/users/"+uId,data).then(res=>{
            if(res.status===200){
                toast.success('User updated Succcessfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            
        })
    }

    const [user, setuser] = useState({})

    useEffect(() => {
      getUserbyId();
    
     
    },[])
    
    let uId = useParams().id;
    const getUserbyId = async()=>{
        await axios.get("http://localhost:8080/users/"+uId).then(res=>{
            setuser(res.data)
        })
    }
  return (
    <><ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
          <div className='bg-light '>
              <form className='mt-5 me-5 ' onSubmit={handleSubmit(submit)}>
                  <div className="row mb-3">
                      <label for="inputEmail3" className="col-sm-2 col-form-label"><b>First Name</b></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control bg-dark text-light" id="inputEmail3" placeholder='First Name' {...register("firstName")} defaultValue={user.firstName}></input>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label for="inputPassword3" className="col-sm-2 col-form-label"><b>Last Name</b></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control bg-dark text-light" id="inputPassword3" placeholder='Last Name' {...register("lastName")} defaultValue={user.lastName}></input>
                      </div>
                  </div>
                  {/* <div className="row mb-3">
                      <label for="inputPassword3" className="col-sm-2 col-form-label"><b>City</b></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control bg-dark text-light" id="inputPassword3" placeholder='City' {...register("city")} defaultValue={user.city}></input>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label for="inputPassword3" className="col-sm-2 col-form-label"><b>Age</b></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control bg-dark text-light" id="inputPassword3" placeholder='Age' {...register("age")} defaultValue={user.age}></input>
                      </div>
                  </div> */}


                  <button type="submit" className="btn btn-success">
                      UPDATE
                  </button>

              </form>
          </div></>
  )
}

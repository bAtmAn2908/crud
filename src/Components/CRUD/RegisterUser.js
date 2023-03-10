import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterUser = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({mode:"onChange"});

    const submit = async(data) => {
        await axios.post("http://localhost:8080/users/addUser",data).then(res=>{
            if(res.status===200){
                toast.success('User added Succcessfully', {
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
                          <input type="text" className="form-control bg-dark text-light" id="inputEmail3" placeholder='First Name' {...register("firstName")}></input>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label for="inputPassword3" className="col-sm-2 col-form-label"><b>Last Name</b></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control bg-dark text-light" id="inputPassword3" placeholder='Last Name' {...register("lastName")}></input>
                      </div>
                  </div>
                  {/* <div className="row mb-3">
                      <label for="inputPassword3" className="col-sm-2 col-form-label"><b>City</b></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control bg-dark text-light" id="inputPassword3" placeholder='City' {...register("city")}></input>
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label for="inputPassword3" className="col-sm-2 col-form-label"><b>Age</b></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control bg-dark text-light" id="inputPassword3" placeholder='Age' {...register("age")}></input>
                      </div>
                  </div> */}


                  <button type="submit" className="btn btn-success">
                      REGISTER
                  </button>

              </form>
          </div></>
  )
}

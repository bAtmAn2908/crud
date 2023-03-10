import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ViewUser = () => {
    useEffect(() => {
      
        getUsers();
    
    
    },[])
    
    const [users, setusers] = useState([])
    const getUsers = async()=>{
        await axios.get("http://localhost:8080/users/allUser").then(res=>{
                setusers(res.data)
        })
    }
    const deleteUser = async(id)=>{
        await axios.delete("http://localhost:8080/users/"+id).then(res=>{
            if(res.status===200){
                toast.success('User deleted Succcessfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                getUsers();
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
          <div>
              <table class="table table-info table-striped table-hover">
                  <thead>
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          {/* <th scope="col">City</th>
                          <th scope="col">Age</th> */}
                          <th scope="col">Delete</th>
                          <th scope="col">Update</th>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map(p => {
                          return (
                              <tr>
                                  <th scope="row">{p.id}</th>
                                  <td>{p.firstName}</td>
                                  <td>{p.lastName}</td>
                                  {/* <td>{p.city}</td>
                                  <td>{p.age}</td> */}
                                  <td>
                                      <button className='btn btn-danger' onClick={() => deleteUser(p.id)}>DELETE</button>
                                  </td>
                                  <td>
                                      <Link to={`/updateuser/${p.id}`}>
                                          <button className='btn btn-warning'>UPDATE</button>
                                      </Link>

                                  </td>
                              </tr>
                          );
                      })}


                  </tbody>
              </table>
          </div></>
  )
}

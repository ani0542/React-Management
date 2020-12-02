import Axios from 'axios';
import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import { Link } from "react-router-dom";




function Home() {



    const [users,setUsers] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false);




    useEffect(()=>{
        loadUser()
    },[])



   


    const loadUser=async ()=>{
      

        setIsSubmitting(true)
        const res=await fetch('/users')
        const data=await res.json()
        setIsSubmitting(false)
        console.log(data)
        setUsers(data.reverse())



    }




    //delete part


    const deleteUser=async(id)=>{
        await Axios.delete(`/users/${id}`)
        loadUser()
    }




    return (
        <div>
            <div className="container">
                     <div className="py-4">
                             {/* <h1>Home Page</h1> */}
               <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th>Action</th>
                        </tr>


                    </thead>
                    <tbody>
                        
                        
                       



                        {
                            users.map((value,index)=>{
                                return (
                                    <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.username}</td>
                                            <td>{value.email}</td>
                                            <td>
                                                 <Link class="btn btn-primary mr-2" to={`/users/${value.id}`}>
                                                    View
                                                </Link>
                                                <Link
                                                    class="btn btn-outline-primary mr-2"
                                                    // to={`/users/add${value.id}`}
                                                    to={`/users/edit/${value.id}`}
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    class="btn btn-danger"
                                                    onClick={() => deleteUser(value.id)}
                                                    to='#'
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                   </tr>
                                )
                            })
                        }
                    </tbody>
            </table>

</div>

</div>

        </div>
    )
}

export default Home

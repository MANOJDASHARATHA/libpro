import { useState,useEffect } from "react";

const UserList = () => {
    let [userlist,setuserlist]=useState([])
    useEffect (()=>{
        let fetchuserList=async()=>{
            let response=await fetch("http://localhost:4444/userlist")
            let data=await response.json();
            setuserlist(data)
        }
        fetchuserList()
    },[])

    const handledelete=((userid)=>{
        alert("deleted successfully")
        setuserlist(userlist.filter(val=>val.userid!==userid))
    })
    

    return ( 
        <div className="userlist">
            <h1>user_list</h1>
            <div className="userlist1">
                {
                    userlist.map((data)=>{
                        return(
                            <div className="list">
                                <h4>{data.userid}</h4>
                                <h4>{data.firstname}</h4>
                                <h4>{data.phonenumber}</h4>
                                <button onClick={()=>handledelete(data.userid)}></button>
                            </div>
                        )
                    })
                }
            </div>
            </div>
     );
}
 
export default UserList;



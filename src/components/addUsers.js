import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let[id,setid]=useState('')
    let[firstname,setfirstname]=useState('')
    let[lastname,setlastname]=useState('')
    let[phonenumber,setphonenumber]=useState('')
    let[emailid,setemailid]=useState('')

    const navigate=useNavigate();
    let handleSubmit=(e)=>{
        e.preventDefault()
        let adduser={
            id:id,
            firstname:firstname,
            lastname:lastname,
            phonenumber:phonenumber,
            emailid:emailid
        }
        fetch(" http://localhost:4444/userlist",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(adduser)
        })
        alert("user addedto list successfully")
        navigate("/admin-portal/user-List")
    };
    

const AddUser = () => {
    return (  
        <div className="adduser"><h1>AddUsers</h1>
        <div className="users1">
            <form action="" id="add" onSubmit={handleSubmit}>
                <label htmlFor="">ID :</label>
                <input type="text" placeholder="give an id for user" name="" id=""  value={id} onChange={(e)=>setid(e.target.value)}/><br /><br />
                <label htmlFor="">FirstName :</label>
                <input type="text" placeholder="enter the first name" name="" id="" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/><br /><br />
                <label htmlFor="">LastName :</label>
                <input type="text" placeholder="enter the last name" name="" id="" value={lastname} onChange={(e)=>(setlastname.target.value)} /><br /><br />
                <label htmlFor="">PhoneNumber :</label>
                <input type="text" placeholder="enter the phonenumber" name="" id="" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} /><br /><br />
                <label htmlFor="">Emailid :</label>
                <input type="text" placeholder="enter the valid email id" name="" id="" value={emailid} onChange={(e)=>setemailid(e.target.value)}/><br /><br />
                <button>Submit</button>
                
            </form>
        </div>
        </div>
    );
}
}
export default AddUser;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = (props) => {
    let[email,setEmail]=useState('')
    let [password, setPassword]=useState('')
    let navigate=useNavigate()

    let handleSubmit =() =>{
        if ((email===props.data) && (password==="1234")) {
            navigate("/admin-Portal")
        } else {
            alert("invalid_username or password")
        }
    }
    return ( 
        <section className="adminLogin">
            <h1>ADMIN_LOGIN_PORTAL</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Admin_Id :</label>
                <input type="text" placeholder="enter ur adminId" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br /><br />
                <label htmlFor="">Password :</label>
                <input type="text"  placeholder="enter the password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br /><br />
                <div className="adminloginbuttons">
                <button id="abc">LogIn</button><br /><br />
                <button id="abc">
                    <Link to="/">Home</Link>
                </button>
                </div>
            </form>

        </section>
     );
}
 
export default AdminLogin;
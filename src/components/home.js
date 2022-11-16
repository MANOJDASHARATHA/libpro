import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div  className="home">
            <div className="homecard">
               <a href=""><img width={80} height={80} src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=is&k=20&c=9S-ZGkvGRCMwg33JOPrqVsAxIYx_u99Wm_w-1jXzdpc=" alt="" /><button ><Link to="/admin-login">Admin_Login</Link></button>  </a>
                <a href=""><img width={80} height={80} src="https://cdn.icon-icons.com/icons2/47/PNG/128/loginmanager_10029.png" alt="" /><button ><Link to="/user-login">User_Login</Link></button>  </a>   
            </div> 
            </div> 
     );
}

export default Home;
import { Link } from "react-router-dom";

const SideBar = (props) => {
    return ( 
        <div className="sidebar">
            <div className="sidebar1">
            <img width={80} height={80} src="https://myiacs.com/images/admin.jpg" alt="" />
            <h6>admin {props.data}</h6>
            </div>
            <div className="sidecomponent">
            <Link to="/admin-portal"><img width={40} height={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLuEh6s2ltHLAVviKPgO1SYu8Av_L9dwOcuihDoahzQ&s" alt="" /> Home</Link>
            <Link to="/admin-portal/add-Book"> <img width={40} height={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLuEh6s2ltHLAVviKPgO1SYu8Av_L9dwOcuihDoahzQ&s" alt="" /> Add_Books</Link>

            <Link to="/admin-portal/book-List"> <img width={40} height={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0YCEjE9k2j7-LUMeyTpP9H6Fm2MvV_nmmzL6Icgy&s" alt="" /> Books_list</Link>

            <Link to="/admin-portal/add-User"> <img width={40} height={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzGguhRWd7wqm3pQYtuBwnV7kpcw3y4m5Bjqe23Q&s" alt="" /> Add_user</Link>

            <Link to="/admin-portal/user-List"> <img width={40} height={40} src="https://store-images.s-microsoft.com/image/apps.25871.53baf1fd-a88b-421e-96ea-18e584d3df32.2263e8ca-1f9f-4991-8937-d1c42f79ccc3.2fed0e10-4552-446e-b131-5cabd645b924.png" alt="" /> User_List</Link>
            
            </div>
        </div>
     );
}
 
export default SideBar;
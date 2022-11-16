import SideBar from "./sidebar";
import {Routes,Route} from "react-router-dom"
import BookList from "./bookList";
import UserList from "./userList";
import AddBook from "./addBook";
import AddUser from "./addUsers";
import New from "./new";

const AdminPortal = (props) => {
    let email=props.data
    return ( 
        <div className="adminPortal">Admin_Portal
        <SideBar data={email}/>
        <Routes>
            <Route path="/"element={<New/>}/>
            <Route path="/book-List" element={<BookList/>}/>
            <Route path="/user-List" element={<UserList/>}/>
            <Route path="/add-Book" element={<AddBook/>}/>
            <Route path="/add-User" element={<AddUser/>}/>
        </Routes>
        </div>

     );
}
 
export default AdminPortal;
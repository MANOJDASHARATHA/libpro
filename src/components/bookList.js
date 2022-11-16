import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookList = () => {
    let location=useLocation()
    let [books, setBooks]=useState([])
    useEffect(()=>{
        let fetchBooks=async()=>{
            let response=await fetch(" http://localhost:3333/Books")
            let data=await response.json();
            setBooks(data)
        }
        fetchBooks();
    },[])      //one can pass books inside empty array means delete button will work only for book dependency
    // console.log(location.pathname); used to fetch the url of a particular page

const handleDelete=((id)=>{
    fetch(` http://localhost:3333/Books/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(books)
    })
window.location.reload()    //it reloads the page automatically after click on dleete button

setBooks(books.filter(val => val.id !== id))
});

    return ( 
        <div className="bookList">
           <h1> BookList</h1>
           <div className="bookList1">
            {
                books.map((data)=>{
                    return(
                        <div className="list">
                        <h3>id:{data.id}</h3>
                        <h3>title:{data.title}</h3>
                        <h3>author:{data.author}</h3>
                        <h3>genre:{data.genre}</h3>
                        <h3>rating:{data.rating}</h3>
                        {location.pathname==='/admin-portal/book-List'&& <button onClick={() => handleDelete(data.id)} >delete</button>}
                    </div>  
                )})
            }
           </div>

        </div>
     );
}
 
export default BookList;
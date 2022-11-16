import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    let[title,setTitle]=useState('')
    let[author,setAuthor]=useState('')
    let[rating,setRating]=useState('')
    let[genre, setGenre]=useState('')
    let[language,setLanguage]=useState('')

    const navigate=useNavigate();
    let handleSubmit=(e)=>{
        e.preventDefault()
        let addBooks={
            title:title,
            genre:genre,
            rating:rating,
            author:author,
            language:language
        }
        fetch("http://localhost:3333/Books",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(addBooks)
        })
        alert("book added to list successfully")
        navigate("/admin-portal/book-List")
    };
    return ( 
        <div className="addbook"><h1>AddBooks</h1>
        <div className="book1">
        <form action="" id="add" onSubmit={handleSubmit}>
            <label htmlFor="">BookTitle :</label>
            <input type="text" placeholder="enter the title of the book" value={title} onChange={(e)=>setTitle(e.target.value)}/><br /><br />
            <label htmlFor="">Author :</label>
            <input type="text" placeholder="enter th eauthor of the book" value={author} onChange={(e)=>setAuthor(e.target.value)}/><br /><br />
            <label htmlFor="">Genre :</label>
            <input type="text" placeholder="enter the genre of the book" value={genre} onChange={(e)=>setGenre(e.target.value)}/><br /><br />
            <label htmlFor="">Language :</label>
            <input type="text" placeholder="enter the language of the book" value={language} onChange={(e)=>setLanguage(e.target.value)}/><br /><br />
            <label htmlFor="">Rating :</label>
            <input type="text" placeholder="enter the language of the book" value={rating} onChange={(e)=>setRating(e.target.value)}/><br /><br />
            <label htmlFor="">ID :</label>
            <input type="text" placeholder="enter the id of the book"/><br /><br />
            
            <button onClick="">Submit</button>
        </form>
        </div>
        </div>
     );
}
export default AddBook;

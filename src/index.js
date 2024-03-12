                                               // components, jsx and props
import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css"

// const Booklist= ()=>{
//     return(
//     <section className="booklist">
//         <Book author={firstbook.author}
//               img={firstbook.img}
//               title={firstbook.title}
//         />
//         <Book author={secondbook.author}
//               title={secondbook.title}
//               img={secondbook.img}
//         />   
//     </section>
//     );
// }
// const firstbook={
//  author:'james',
//  title:'anderson',
//  img:"https://m.media-amazon.com/images/I/81oydfRzeBL.AC_SX500.jpg",
// };

// const secondbook={
//     author:'anderson',
//     title:'book2',
//     img:"https://m.media-amazon.com/images/I/71aRsE5-61L.AC_SX500.jpg",
//    };
   

// const Book = (props) => {
// return (
//     <article className="book">
//         <img src={props.img} alt="no"/>
//         <h1>{props.author}</h1>
//         <h2>{props.title}</h2>
//     </article>
// );
// };

// const names=['abc',"def","ghi","ijk","lmn"]

// const newnames= names.map((name)=>{
//     return <h1>{name}</h1> ;
// });

// function Booklist(){
//     return(
//         <div>
//             {newnames}
//         </div>
//     )
// }
// const newnames=names.map((name)=>{
//     return <h1>{name}</h1>;
// });

// const Booklist=()=>{
//     return(
//     <div>{newnames}</div>);
// }

const Booklist= ()=>{
    return(
    <section className="booklist">
         {books.map((book)=>{
            const {title,author,img}=book;
            return <Book book={book}/>
         })}
    </section>
    );
}

const books=[
   {
    id:1,
    author:'iKIGA',
    title:'HECTOR',
    img:"https://m.media-amazon.com/images/I/71aRsE5-61L.AC_SX500.jpg",
   },
   {
    id:2,
    author:'BROOK',
    title:'THE SAME AS EVER',
    img:"https://m.media-amazon.com/images/I/41n4z8Xv1BL._AC_UF452,452_FMjpg_.jpg",
   },
   {
    id:3,
    author:'CHETAN BHAGAT',
    title:'11 RULES',
    img:"https://m.media-amazon.com/images/I/61E0unKRIZL.AC_SX500.jpg",
   },
   {
    id:4,
    author:'CHETAN BHAGAT',
    title:'11 RULES',
    img:"https://m.media-amazon.com/images/I/91jf0gf7edL.AC_SX500.jpg",
   },
];

const Book = (props) => {

    const handleclick =(e)=>{
        console.log(e);
        console.log(e.target);
        alert("you clicked")
    }

    const titlename =(title)=>{
        alert(title);
    }

    const {title,author,img}=props.book;
return (
    <article className="book" onMouseOver={()=>console.log(author)}>
        <img src={img} alt="no" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
        <h1 onClick={()=>console.log(author)}>{author}</h1>
        <h2>{title}</h2>
        <button type="button" onClick={handleclick} id="btn">click me</button>
        <button type="button" onClick={()=>titlename(title)}>give me title name</button>
        
    </article>
);
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>);


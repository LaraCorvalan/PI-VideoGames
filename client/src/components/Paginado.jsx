import React from "react";
import '../estilos/Paginado.css'

const Paginado = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumber = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumber.push(i);
    }
    //console.log(pageNumber);
  
    return (
      <nav>
        <div className="pagination-container">
          {pageNumber.map((number) => (
            <div className="numbers-container" key={number}>
              <button className="numbers" onClick={() => paginate(number)}>
                {number}
              </button>
            </div>
          ))}
        </div>
      </nav>
    );
  };
  
  export default Paginado;
// export default function Paginado(props) {

//   const videogames = useSelector((state) => state.videogames);


//     const items = props.items.map((item, index) => {
//         return (
//             <li key={item.id}><Games videogames={videogames} /></li>
//         )
//     })

//     return (
//         <div>
//             <h1>Pagina: {props.currentPage}</h1>

//             <button onClick={props.prevHandler}>Prev</button>
//             <button onClick={props.nextHandler}>Next</button> 

//             <h2>Items: </h2>

//             <ul>
//                 {items}
//             </ul>

//         </div>
//     )
// }

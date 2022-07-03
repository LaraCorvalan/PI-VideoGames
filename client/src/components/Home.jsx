import React, { useEffect, useState } from "react";
import "../estilos/Home.css";
import Games from "./Games";
import Paginado from "./Paginado";
import Loading from "./Loading";
import {
  getGames,
  orderGames,
  filterGames,
  getGenres,
  borrarOrder,
  filterGenre
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const videogames = useSelector((state) => state.videogames);
  //console.log('soy videogames',videogames)
  const dispatch = useDispatch();
  const GENRES = useSelector((state) => state.genres);
  const ordenados = useSelector((state) => state.ordenados);
  const filtrados = useSelector((state) => state.filtrados);
  console.log('soy filtrados',filtrados)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = videogames.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsOrdenados = ordenados?.slice(
    indexOfFirstPost,
    indexOfLastPost
    );
  const paginate = (pageNumber) => setCurrentPage(pageNumber); 
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
    
    useEffect(() => {
      dispatch(getGames());
      dispatch(borrarOrder());
    }, [dispatch]);

    // useEffect(() => {
  //   dispatch(getGames());
  // }, [dispatch]);

    useEffect(() => {
      dispatch(getGenres());
    }, [dispatch]);

  function filterVG(value) {
    let filtered = "";
    switch (value) {
      case "api":
        filtered = videogames.filter((e) => typeof e.id === "number");
        break;
      case "db":
        filtered = videogames.filter((e) => typeof e.id !== "number");
        break;
      case "allapi-db":
        filtered = videogames;
        break;
      default:
        filtered = videogames;
    }
    dispatch(filterGames(filtered));
    return filtered;
  }

  // function filterByGenre(data){
  //   let filterG = "";
  //   if(data === 'all'){
  //     console.log('soy all',data)
  //     filterG = filtrados
  //   } else {
  //     console.log('soy e.genre', data)
  //    filterG = videogames.filter((game) => game.genre.includes(data))
  //   }
  //   dispatch(filterGenre(filterG));
  //   return filterG
  // }

  function handleChange(e) {
    e.preventDefault();
    dispatch(orderGames(e.target.value));
    dispatch(borrarOrder());
    setOrder(e.target.value);
    setCurrentPage(1);
  }

  function handleChangeF(f) {
    f.preventDefault();
    filterVG(f.target.value);
    //filterByGenre(f.target.value);
    setFilter(f.target.value);
    setCurrentPage(1);
  }

  function handleChangeG(g) {
    g.preventDefault();
    dispatch(filterGenre(g.target.value));
    //filterByGenre(g.target.value);
    setFilter(g.target.value);
    setCurrentPage(1);
  }

  if(videogames?.length <= 0){
    dispatch(getGames())
    return <Loading/>
  }

  return (
    <div className="home-container">
      <div className="filters-container">
        {/* ORDENAR A - Z & Z - A  */}
        <div className="order-1">
          <h4 className="titleS-1"> Order by:</h4>
          <select onChange={(e) => handleChange(e)} className="select-1">
            <option value="none">Alphabet</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        {/* ORDENAR POR RATING */}
        <div className="order-2">
          <h4 className="title-2"> Order by:</h4>
          <select onChange={(e) => handleChange(e)} className="select-2">
            <option value="none">Rating</option>
            <option value="lower">Lower</option>
            <option value="higher">Higher</option>
          </select>
        </div>
        {/* FILTRAR POR GENEROS */}
        <div className="order-3">
          <h4 className="title-3">Filter by:</h4>
          <select onChange={(g) => handleChangeG(g)} className="select-3">
            <option value="none">Genre</option>
            <option value="all">All Genres</option>
            {GENRES &&
              GENRES.map((e) => <option key={e.name} value={e.name}>{e.name}</option>)}
          </select>
        </div>
        {/* FILTRAR POR API/DB */}
        <div className="order-4">
          <h4 className="title-4">Filter by:</h4>
          <select onChange={(f) => handleChangeF(f)} className="select-4">
            <option value="all">Origin</option>
            <option value="allapi-db">All</option>
            <option value="api">API</option>
            <option value="db">Created by the user</option>
          </select>
        </div>
      </div>
      {ordenados.length > 0 ? (
        <Games videogames={currentPostsOrdenados} className="card" />
      ) : (
        <Games videogames={currentPosts} className="card" />
      )}
      {ordenados.length > 0 ? (
        <Paginado
          postPerPage={postPerPage}
          totalPosts={ordenados.length}
          paginate={paginate}
        />
      ) : (
        <Paginado
          postPerPage={postPerPage}
          totalPosts={videogames.length}
          paginate={paginate}
        />
      )}
    </div>
  );
}

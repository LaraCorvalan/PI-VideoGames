import React, { useEffect, useState } from "react";
import "../estilos/Home.css";
import Games from "./Games";
import Paginado from "./Paginado";
import { getGames, orderGames, filterGames, getGenres } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const GENRES = useSelector((state) => state.genres);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = videogames.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");

  function handleChange(e) {
    e.preventDefault();
    dispatch(orderGames(e.target.value));
    setOrder(e.target.value);
    setCurrentPage(1);
  }

  function handleChangeF(f) {
    f.preventDefault();
    dispatch(filterGames(f.target.value));
    setFilter(f.target.value);
    setCurrentPage(1);
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
          <select onChange={(f) => handleChangeF(f)} className="select-3">
            <option value="none">Genre</option>
            <option value="all">All Genres</option>
            {GENRES &&
              GENRES.map((e) => <option value={e.name}>{e.name}</option>)}
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
      <Games videogames={currentPosts} className="card" />
      <Paginado
        postPerPage={postPerPage}
        totalPosts={videogames.length}
        paginate={paginate}
      />
    </div>
  );
}

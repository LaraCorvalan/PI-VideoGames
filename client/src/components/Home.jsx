import React, { useEffect } from "react";
import "../estilos/Home.css";
import Games from "./Games";
import { getGames } from "../actions";
import { connect, useSelector } from "react-redux";
// import { loading } from "../actions";

// const loading = useSelector((state) => state.loading)

function mapStateToProps(state) {
  return {
    videogames: state.videogames,
  };
}

function Home({ getGames, videogames }) {
  useEffect(() => {
    // dispatch(loading(true))
    getGames();
    // dispatch(loading(false));
  }, []);

  return (
    <div className="home-container">
      
        <Games videogames={videogames} className='card'/>
      
    </div>
  );
}

export default connect(mapStateToProps, { getGames })(Home);

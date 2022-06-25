import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx';
import CreateGame from './components/CreateGame';
import About from './components/About.jsx';
import LandingPage from './components/LandingPage.jsx';
import Details from './components/Details.jsx';
//import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
        <Route path={'/home'} component={NavBar}/> 
      
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/home'} component={Home} />
        <Route path={'/home/create'} component={CreateGame} />
        <Route path={'/home/details'} component={Details}/>
        <Route path={'/home/about'} component={About} />
        {/* <Route exact path = '' component={NotFound} />  */}
    </React.Fragment>
    
  );
}

export default App;

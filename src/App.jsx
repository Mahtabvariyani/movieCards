import React, { useState } from "react";
import Spinner from './components/Spinner'
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [isLoading,setIsLoading]=useState(false)
 
  if(isLoading){
    return <Spinner />
  }else{
    return(
      <div className="list">
        <MovieList />
      </div>
    )
  }
  }

export default App;

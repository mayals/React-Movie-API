import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList.js";
import NavbarComp from "./components/NavbarComp.js"
import axios from 'axios'
import { useEffect, useState } from "react";

const App = () => {

          const [Movies,setMovies]=useState([])

          // getResponse  by using axios:
          const getResponse = async() =>{
            
                const Response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US&page=1")
                
                //to display Response 
                // console.log(Response)
              
                //to display results
                console.log(Response.data.results)
                
                //  Note: Results is meaning Movies that get by axios, so Movies is now has values of:
                setMovies(Response.data.results)
                // console.log(Movies)    note: movies now is empty because it will be full with values after useEffect
          }
          
        

          useEffect( () => { 
                           getResponse(); },[] )
                           console.log(Movies)
          
          
          
          return (

              <div className="font color-body">
                  
                  <NavbarComp/>
                  
                  <Container>
                      <MoviesList/>
                  </Container>

              </div>
          );


}

export default App;

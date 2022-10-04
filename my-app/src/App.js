import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList.js";
import NavbarComp from "./components/NavbarComp.js"
import axios from 'axios'
import { useEffect, useState } from "react";

const App = () => {

        const [Movies,setMovies]=useState([])

          // getResponse  by using axios that get all movies:
        const getAllMovies = async() =>{
            
                        const Response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US&page=1")
                        
                        //to display Response 
                        // console.log(Response)
                    
                        //to display results
                        console.log(Response.data.results)
                        
                        //  Note: results is meaning Movies that get by axios, so Movies is now has values of:
                        setMovies(Response.data.results)
                        // console.log(Movies)    note: movies now is empty because it will be full with values after useEffect()
        }

        //  At start bring all Movies
        useEffect( () => { 
                           getAllMovies();
                           console.log(Movies); 
                           // eslint-disable-next-line react-hooks/exhaustive-deps
                          },[ ] 
        )
          
          
          
        //  getSearch by using axios that get only movie or movies according to query=${word}:
        const getSearch = async(word) =>{
            if ( word === ""){
                getAllMovies() 
            }else{
                const Response  = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US&page=1&include_adult=false&query=${word}`)
    
                console.log(Response.data.results)
                //  Note: results is meaning Movies that get by axios, so Movies is now has values of:
                setMovies(Response.data.results)
                // console.log(Movies)    note: movies now is empty because it will be full with values after useEffect()
            }
        }

        return (

            <div className="font color-body">
                  
                <NavbarComp      getSearch={getSearch}/>
                  
                <Container>
                    <MoviesList  Movies={Movies}/>
                </Container>

            </div>
          );


}

export default App;

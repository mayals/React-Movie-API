import { Container } from "react-bootstrap";
import MoviesListComp from "./components/MoviesListComp.js";
import NavbarComp from "./components/NavbarComp.js"
import axios from 'axios'
import { useEffect, useState } from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom"
import MovieDetailsComp from "./components/MovieDetailsComp.js";

// to get free API, i use this website:
// https://developers.themoviedb.org/3/getting-started/introduction

const App = () => {

        const [moviesState,setmoviesState]=useState([])
        const [pageCountState,setpageCountState]=useState(0)

        // getResponse  by using axios that get all movies:
        const getAllMovies = async() =>{
            
                        const Response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US")
                        
                        //to display Response 
                        // console.log(Response)
                    
                        //to display results
                        console.log(Response.data.results)
                        
                        //  Note: results is meaning Movies that get by axios, so moviesState is now has values of:
                        setmoviesState(Response.data.results)
                        console.log(moviesState)    //Note: moviesState here is empty because it will be full with thier values after useEffect()
        
                        console.log(Response.data.total_pages)
                        setpageCountState(Response.data.total_pages)
        
        }

        //  At start bring all Movies
        useEffect( () => { 
                        getAllMovies();
                           console.log(moviesState); 
                           // eslint-disable-next-line react-hooks/exhaustive-deps
                        },[ ] 
        )
          
        
        // getResponse  by using axios that get CurrnetPage that selected by the current user:
        const getMoviesForSelectedpage = async(page) =>{  
                        const Response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US&page=${page}`)
            
            //to display Response 
            // console.log(Response)
        
            //to display results
            console.log(Response.data.results)
            
            //  Note: results is meaning Movies that get by axios, so Movies is now has values of:
            setmoviesState(Response.data.results)
            // console.log(Movies)    note: movies now is empty because it will be full with values after useEffect()

        }





          
        //  getSearch by using axios that get only movie or movies according to query=${word}:
        const getMoviesSearchedByword = async(word) =>{
            if ( word === ""){
                getAllMovies() 
            }else{
                const Response  = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US&page=1&include_adult=false&query=${word}`)
    
                console.log(Response.data.results)
                //  Note: results is meaning Movies that get by axios, so Movies is now has values of:
                setmoviesState(Response.data.results)
                // console.log(Movies)    note: movies now is empty because it will be full with values after useEffect()
                setpageCountState(Response.data.total_pages)
            }
        }

        return (

            <div className="font color-body">
                  
                <NavbarComp      getMoviesSearchedByword={getMoviesSearchedByword}/>
                  
                <Container>
                    <BrowserRouter>
                        <Routes>
                            <Route  path="/"         element={<MoviesListComp                moviesState={moviesState}
                                                                            getMoviesForSelectedpage={getMoviesForSelectedpage}
                                                                                      pageCountState={pageCountState} />}/>
                                                
                            <Route path="/movie/:id" element={<MovieDetailsComp/>}/>
                        </Routes>
                    </BrowserRouter>
                </Container>
            </div>
          );


}

export default App;

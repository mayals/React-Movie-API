import React from "react";
import { Row } from "react-bootstrap";
import CardMovieComp from "./CardMovieComp";
import PaginationComp from "./PaginationComp.js"



const MoviesListComp = (props) => {
  
        return (
                <Row className="mt-3">
                        {/* to display cards  */}
                        { props.moviesState.length?( props.moviesState.map((item)=>{ 
                                return(
                                
                                        <CardMovieComp  
                                                key={item.id}
                                                id={item.id}
                                                title={item.title} 
                                                release_date={item.release_date}
                                                vote_count={item.vote_count}
                                                vote_average={item.vote_average}
                                                poster_path={item.poster_path}
                                        />              
                                ) 
                        } )) :<h2 className="text-center p-5">No Movies ..</h2>}


                        {/* to display pagination  */}
                        { props.moviesState.length?(<PaginationComp  
                                                                     MoviesForSelectedpage={props.getMoviesForSelectedpage}
                                                                            pageCountState={props.pageCountState}
                                                   />):null}
                        
       
                </Row>       
        );
};

export default MoviesListComp;             
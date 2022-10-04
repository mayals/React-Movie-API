import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
// import PaginationComponent from './Pagination'



const MoviesList = (props) => {
  
        return (

                <Row className="mt-3">

                        { props.Movies.length?( props.Movies.map((item)=>{ 
                        
                                return(
                                        <CardMovie  
                                                key={item.id}
                                                title={item.title} 
                                                release_date={item.release_date}
                                                vote_count={item.vote_count}
                                                vote_average={item.vote_average}
                                                poster_path={item.poster_path}
                                        />
                                ) 
                        } )) :<h2 className="text-center p-5">No Movies ..</h2>}
       
                </Row>
        );


};

export default MoviesList;             
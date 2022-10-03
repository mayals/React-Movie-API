import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
// import PaginationComponent from './Pagination'



const MoviesList = () => {
  
  
                return (

                    <Row className="mt-3">
                            <CardMovie/>
                            <CardMovie/>
                            <CardMovie/>
                            <CardMovie/>
                            <CardMovie/>
                            <CardMovie/>
                    </Row>
            );


};

export default MoviesList;             
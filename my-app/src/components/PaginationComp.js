import ReactPaginate from 'react-paginate';      //https://www.npmjs.com/package/react-paginate



const PaginationComp = (props) =>{
     //https://www.npmjs.com/package/react-paginate
    const handlePageClick = (data) =>{
                        console.log(data.selected+1)
                        props.MoviesForSelectedpage(data.selected+1)  // data.selected+1   is get when click on button of page number
    }
    return(
        //https://www.npmjs.com/package/react-paginate
        <ReactPaginate
            breakLabel="..."                      // Label for ellipsis.

            nextLabel="Next"                      // Label for the next button.

            onPageChange={handlePageClick}        /* The method to call when a page is changed. 
                                                     Exposes the current page object as an argument.*/

            marginPagesDisplayed={2}               // The number of pages to display for margins.

            pageRangeDisplayed={2}                // The range of pages displayed. 

            pageCount={props.pageCountState}                 // Required. The total number of pages.

            previousLabel="Previous"              // Label for the previous button.




            //i get these class from bootstap to design nice styles                                         
            //https://getbootstrap.com/docs/5.2/components/pagination/#overview
            containerClassName={"pagination pagination-sm justify-content-center p-3"}
            
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}

            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}

            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            
            activeClassName={"active"}

      />                                      
    );
}

export default PaginationComp;
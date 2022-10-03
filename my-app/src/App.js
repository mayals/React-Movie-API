import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList.js";
import NavbarComp from "./components/NavbarComp.js"


const App = () => {

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

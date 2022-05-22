import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Ristmi Daffa Khoiri</Navbar.Brand>
          </Container>
          <br></br>
        </Navbar>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Input your city"
            aria-label="Input your city"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </>
    );
  }
}

export default ClassComponent;

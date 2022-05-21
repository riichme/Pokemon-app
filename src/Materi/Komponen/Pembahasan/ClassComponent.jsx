import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, InputGroup, FormControl, Button} from "react-bootstrap"

class ClassComponent extends React.Component {

    render () {
        return (
            <><Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup></>

        )
    }
}

export default ClassComponent
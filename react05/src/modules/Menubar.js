import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menubar() {

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <nav style={barStyle}>
                <Link to="/">Home</Link> | {" "}
                <Link to="/intro">Intro</Link> | {" "}
                <Link to="/dept">List</Link> | {" "}
                <Link to="/dept/add">Add</Link> | {" "}
                <Link to="/login">Login</Link> | {" "}
            </nav> */}
        </>
    )
}

export default Menubar
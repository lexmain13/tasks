import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./App.css";
import Pup from "../src/Puppies.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <p>Alexis Mainiero</p>
            </header>
            <header>First Site</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World!</p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                border: "2px solid red",
                                width: "200px",
                                height: "150",
                                backgroundColor: "white",
                                alignContent: "center",
                                padding: "2px"
                            }}
                        >
                            My Top 3 Colors
                            <ol>
                                <li>Purple</li>
                                <li>Pink</li>
                                <li>Blue</li>
                            </ol>
                        </div>
                        <br></br>
                        <div>
                            <p>
                                <Button
                                    onClick={() => console.log("Hello World!")}
                                >
                                    Log Hello World
                                </Button>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "4px solid red",
                                width: "",
                                height: "80",
                                backgroundColor: "black",
                                padding: "4px"
                            }}
                        >
                            {" "}
                            <img
                                src={Pup}
                                width="230"
                                height="460"
                                alt="My puppies, Tilly and Mojo."
                            ></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

import React from "react";
import "./App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import Pup from "../src/Puppies.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>Alexis Mainiero</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;

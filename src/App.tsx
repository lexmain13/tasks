import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
import { Button } from "react-bootstrap";
import Sketch from "../src/Task_11_Sketch.jpg";

function App(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>Alexis Mainiero</h1>
            </header>
            <Quizzer></Quizzer>
            <div>
                <Button onClick={flipVisibility}>Show Components</Button>
                {visible && (
                    <>
                        <hr></hr>
                        <CheckAnswer expectedAnswer="42"></CheckAnswer>
                        <hr></hr>
                        <GiveAttempts></GiveAttempts>
                        <hr></hr>
                        <EditMode></EditMode>
                        <hr></hr>
                        <ChangeColor></ChangeColor>
                        <hr></hr>
                        <MultipleChoiceQuestion
                            options={["a", "b", "c"]}
                            expectedAnswer="b"
                        ></MultipleChoiceQuestion>
                        <hr></hr>
                        <ChooseTeam></ChooseTeam>
                        <hr></hr>
                        <ColoredBox></ColoredBox>
                        <hr></hr>
                        <ShoveBox></ShoveBox>
                        <hr></hr>
                        <Counter></Counter>
                        <hr />
                        <RevealAnswer></RevealAnswer>
                        <hr />
                        <StartAttempt></StartAttempt>
                        <hr />
                        <TwoDice></TwoDice>
                        <hr />
                        <ChangeType></ChangeType>
                        <hr />
                        <CycleHoliday></CycleHoliday>
                    </>
                )}
            </div>
            <hr />
            <img
                src={Sketch}
                width="1000"
                alt="Sketch for Quizzer Application"
            />
            <hr />
            <div>
                Completed Features:
                <ul>
                    <li>Sketch</li>
                </ul>
            </div>
        </div>
    );
}

export default App;

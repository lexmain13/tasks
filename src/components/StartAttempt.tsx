import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { createSemanticDiagnosticsBuilderProgram } from "typescript";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [quiz, setQuiz] = useState<boolean>(false);
    function addAttempts(): void {
        setAttempt(attempt + 1);
    }
    return (
        <div>
            <div>
                <Button onClick={addAttempts} disabled={quiz}>
                    Mulligan
                </Button>
                {attempt}
            </div>
            <div>
                <Button
                    onClick={() => {
                        setQuiz(true);
                        setAttempt(attempt - 1);
                    }}
                    disabled={quiz || attempt === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setQuiz(false)} disabled={!quiz}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}

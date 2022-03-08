import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipType(): void {
        if (question === "short_answer_question") {
            setQuestion("multiple_choice_question");
        } else {
            setQuestion("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            Question Type: <span>{question}</span>
        </div>
    );
}

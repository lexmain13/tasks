import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [newAttempts, setNewAttempts] = useState<string>("");
    function addAttempts(): void {
        setAttempt(attempt + parseInt(newAttempts));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of attempts is: {attempt}</div>
            <div>
                <Button
                    onClick={
                        newAttempts !== ""
                            ? addAttempts
                            : () => setNewAttempts("0")
                    }
                >
                    Gain
                </Button>
                <Button
                    onClick={() => {
                        setAttempt(attempt - 1);
                    }}
                    disabled={attempt === 0}
                >
                    Use
                </Button>
            </div>
            <div>
                <Form.Group>
                    <Form.Label>Add Attempts</Form.Label>
                    <Form.Control
                        type="number"
                        value={newAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setNewAttempts(event.target.value)}
                    />
                </Form.Group>
            </div>
        </div>
    );
}

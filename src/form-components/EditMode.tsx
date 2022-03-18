import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Switch
                    type="switch"
                    id="is-edit-mode"
                    label="Editing"
                    checked={isEditing}
                    onChange={() => setIsEditing(!isEditing)}
                    disabled={isStudent === false}
                />
            </div>
            <div>
                {isEditing ? (
                    "In Edit Mode"
                ) : isStudent ? (
                    <div>
                        <span>{name}</span> is a student
                    </div>
                ) : (
                    <div>
                        <span>{name}</span> is a not student
                    </div>
                )}
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Student"
                    checked={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                />
            </div>
            <div>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="textbox"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    />
                </Form.Group>
            </div>
        </div>
    );
}

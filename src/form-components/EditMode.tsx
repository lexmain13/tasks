import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setisStudent] = useState<boolean>(true);
    const [isEditing, setisEditing] = useState<boolean>(false);

    /**type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    */

    /**function updateName(event: ChangeEvent) {
        console.log(name);
        setName(event.target.value);
        console.log(name);
    }
    */

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing"
                    checked={isEditing}
                    onChange={() => setisEditing(!isEditing)}
                />
            </div>
            <div>
                {isEditing ? (
                    <div>
                        <Form.Group controlId="personName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                placeholder="Your Name"
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Not a student"
                            checked={isStudent}
                            onChange={() => setisStudent(!isStudent)}
                        />
                    </div>
                ) : (
                    <div>
                        {isStudent ? (
                            <div>{name} is a student</div>
                        ) : (
                            <div>{name} is not a student</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

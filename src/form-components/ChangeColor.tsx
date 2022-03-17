import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "cyan",
    "periwinkle",
    "pink",
    "purple",
    "magenta",
    "sage",
    "chartreuse",
    "vermillion"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                The current color is{" "}
                <span style={{ backgroundColor: chosen, color: "white" }}>
                    {chosen}
                </span>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChosen(event.target.value)}
                        id={"colors-choice-" + color}
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    color: "white"
                                }}
                            >
                                {color}
                            </span>
                        }
                        value={color}
                        checked={chosen === color}
                    />
                ))}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Holiday: 💖"
        | "Holiday: 🐇"
        | "Holiday: 🎃"
        | "Holiday: 🎄"
        | "Holiday: 🥂";
    const HolidayMovesYear: Record<Holiday, Holiday> = {
        "Holiday: 💖": "Holiday: 🐇",
        "Holiday: 🐇": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 🥂",
        "Holiday: 🥂": "Holiday: 💖"
    };
    const HolidayMovesAlphabet: Record<Holiday, Holiday> = {
        "Holiday: 🎄": "Holiday: 🐇",
        "Holiday: 🐇": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🥂",
        "Holiday: 🥂": "Holiday: 💖",
        "Holiday: 💖": "Holiday: 🎄"
    };
    const [holiday, setHoliday] = useState<Holiday>("Holiday: 🎄");
    function changeByAlphabet(): void {
        const newHoliday = HolidayMovesAlphabet[holiday];
        setHoliday(newHoliday);
    }
    function changeByYear(): void {
        const newHoliday = HolidayMovesYear[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <div>
                <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={changeByYear}>Advance by Year</Button>
                {holiday}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //type Holiday = "💖" | "🐇" | "🎃" | "🎄" | "🥂";
    const HolidayMovesYear: Record<string, string> = {
        "💖": "🐇",
        "🐇": "🎃",
        "🎃": "🎄",
        "🎄": "🥂",
        "🥂": "💖"
    };
    const HolidayMovesAlphabet: Record<string, string> = {
        "🎄": "🐇",
        "🐇": "🎃",
        "🎃": "🥂",
        "🥂": "💖",
        "💖": "🎄"
    };
    const [HolidayAl, setHolidayAl] = useState<string>("🎄");
    const [HolidayYear, setHolidayYear] = useState<string>("💖");
    function changeByAlphabet(): void {
        const newHoliday = HolidayMovesAlphabet[HolidayAl];
        setHolidayAl(newHoliday);
    }
    function changeByYear(): void {
        const newHoliday = HolidayMovesYear[HolidayYear];
        setHolidayYear(newHoliday);
    }
    return (
        <div>
            <div>
                <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
                {HolidayAl}
            </div>
            <div>
                <Button onClick={changeByYear}>Advance by Year</Button>
                {HolidayYear}
            </div>
        </div>
    );
}

import { join } from "path/posix";
import { sortAndDeduplicateDiagnostics } from "typescript";
import { shout } from "./functions";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let endNums: number[] = [];
    if (numbers.length === 0) {
        return endNums;
    } else if (numbers.length === 1) {
        endNums = [numbers[0], numbers[0]];
        return endNums;
    } else {
        endNums = [numbers[0], numbers[numbers.length - 1]];
        return endNums;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const charCount = numbers.map((number: string): number => parseInt(number));
    const addZero = (number: number): number => (isNaN(number) ? 0 : number);
    const endResult = charCount.map(addZero);
    return endResult;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((word: string): string =>
        word.replace("$", "")
    );
    return stringsToIntegers(noDollar);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isQuestion = messages.filter(
        (message: string): boolean => message.endsWith("?") === false
    );
    const isShouting = isQuestion.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return isShouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter(
        (words: string): boolean => words.length < 4
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let isOrIsNot = true;
    if (colors.length === 0) {
        return true;
    } else {
        colors.map((color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
                ? (isOrIsNot = false)
                : isOrIsNot
        );
    }
    return isOrIsNot;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let func;
    if (addends.length === 0) {
        return "0=0";
    } else {
        func = addends.join("+");
    }
    return sum + "=" + func;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const positive = [...values];
    const onlyPositive = [...values];
    const negIndex = values.findIndex((value: number): boolean => value < 0);
    if (negIndex !== -1) {
        positive.splice(
            negIndex + 1,
            0,
            positive
                .slice(0, negIndex)
                .reduce(
                    (total: number, newValue: number) => total + newValue,
                    0
                )
        );
        return positive;
    } else {
        const sum = values.reduce(
            (oldValue: number, newValue: number) => oldValue + newValue,
            0
        );
        onlyPositive.splice(onlyPositive.length, 0, sum);
        return onlyPositive;
    }
}

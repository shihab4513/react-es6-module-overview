/* eslint-disable no-unused-vars */

const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

const divideFirstNUmberBySecondNumber = (first, second) => {
    return first / second;
}

// if you want to use add function in another jsx file you have to export from here. You have to write below code

export { add, multiply, divideFirstNUmberBySecondNumber };
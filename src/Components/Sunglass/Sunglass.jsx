/* eslint-disable no-unused-vars */


import { add, multiply, divideFirstNUmberBySecondNumber as divide } from '../../Utility/calculate';
// If there is a big function number we can use alias to shorten the function name. from 'divideFirstNUmberBySecondNumber' we made it just 'divide'
import './Sunglass.css'

const Sunglass = () => {
    const first = 5, second = 10;
    const sum = add(first, second);
    const multiplied = multiply(first, second);
    const vaag = divide(first, second);

    return (
        <div>

        </div>
    );
};

export default Sunglass;
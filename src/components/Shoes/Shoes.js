import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Result: {result} and total: {sum}</p>
        </div>
    );
};

export default Shoes;
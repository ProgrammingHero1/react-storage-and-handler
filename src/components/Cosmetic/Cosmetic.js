import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            <h2>Buy this:{name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;
import React from 'react';

export const IntroInfo = () => {
    return (
        <div>
            <h1>Ethan Hickey</h1>
            <div className='hr-container'>
                <hr></hr>
            </div>
            <h3>Full Stack Web Developer</h3>
            <p>
                "If I had only looked over at the other makers, the painters or
                the architects, I would have realized that there was a name for
                what I was doing: sketching."
            </p>
            <a className='quote' href='http://www.paulgraham.com/hp.html'>
                - Paul Graham
            </a>
        </div>
    );
};

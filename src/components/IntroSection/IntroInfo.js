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
                "...I tended to just spew out code that was hopelessly broken,
                and gradually beat it into shape. Debugging, I was taught, was a
                kind of final pass where you caught typos and oversights. The
                way I worked, it seemed like programming consisted of debugging."
            </p>
            <a className='quote' href='http://www.paulgraham.com/hp.html'>
                - Paul Graham
            </a>
        </div>
    );
};

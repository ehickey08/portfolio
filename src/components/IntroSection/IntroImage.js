import React from 'react';
import headShot from '../../assets/headshot.jpg';

export const IntroImage = () => {
    return (
        <div className='image-container'>
            <img src={headShot} alt='Ethan Hickey' />
        </div>
    );
};

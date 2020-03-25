import React from 'react';
import '../../sass/introbuttons.scss';

export const IntroButtons = () => {
    return (
        <div className='button-container'>
            <a
                href='mailto:ehickey08@gmail.com'
                rel='noopener noreferrer'
                title='Email me'>
                <div className='left-col'>
                    <span className='snippet'>Get in touch with me</span>
                    <h4>Contact</h4>
                </div>
                <span className='arrow'>></span>
            </a>
            <a
                href='https://github.com/ehickey08'
                title='GitHub'
                rel='noopener noreferrer'
                target='_blank'>
                <div className='left-col'>
                    <span className='snippet'>Check out my code</span>
                    <h4>GitHub</h4>
                </div>
                <span className='arrow'>></span>
            </a>
        </div>
    );
};

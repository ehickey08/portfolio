import React from 'react';
import '../../sass/introbuttons.scss';


export const IntroButtons = ({setModalOpen}) => {
    return (
        <div className='button-container'>
            <button
                onClick={() => setModalOpen(true)}>
                <div className='left-col'>
                    <span className='snippet'>Get in touch with me</span>
                    <h4>Contact</h4>
                </div>
                <span className='arrow'>></span>
            </button>
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



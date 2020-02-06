import React from 'react';
import '../../sass/intro.scss';
import {IntroImage, IntroButtons, IntroInfo} from './index'

export const IntroContainer = () => {
    return (
        <section className='intro container section'>
            <div className='bio-container'>
                <IntroInfo />
                <IntroButtons />
            </div>
            <IntroImage />
        </section>
    );
};

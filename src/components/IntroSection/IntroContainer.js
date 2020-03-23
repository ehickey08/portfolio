import React from 'react';
import '../../sass/intro.scss';
import { IntroImage, IntroButtons, IntroInfo } from './index';
import downArrow from '../../assets/down-arrow.svg';

export const IntroContainer = () => {
    return (
        <>
            <section className='intro container section'>
                <div className='bio-container'>
                    <IntroInfo />
                    <IntroButtons />
                </div>
                <IntroImage />
            </section>
            <a className='scroll-to' href='#projects'>
                View Projects
                <i class="fas fa-chevron-down"></i>
            </a>
        </>
    );
};

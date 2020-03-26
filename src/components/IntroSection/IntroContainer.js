import React from 'react';
import '../../sass/intro.scss';
import { IntroImage, IntroButtons, IntroInfo } from './index';


export const IntroContainer = ({setModalOpen}) => {
    return (
        <section className='intro container section'>
            <div className='bio-container'>
                <IntroInfo />
                <IntroButtons setModalOpen = {setModalOpen}/>
            </div>
            <IntroImage />
        </section>
    );
};

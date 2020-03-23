import React from 'react';
import '../../sass/intro.scss';
import { IntroImage, IntroButtons, IntroInfo } from './index';
import { DownOutlined } from '@ant-design/icons';

export const IntroContainer = () => {
    return (
        <>
            <section className='intro container section'>
                <div className='bio-container'>
                    <IntroInfo />
                    <IntroButtons />
                </div>
                <IntroImage />
                <i class='fas fa-chevron-down'></i>
            </section>
            {/* <div className='scroll-to-container'>
                <a className='scroll-to' href='#projects'>
                    View Projects
                    <DownOutlined />
                </a>
            </div> */}
        </>
    );
};

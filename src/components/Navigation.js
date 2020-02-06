import React from 'react';
import resume from '../assets/ethan-hickey-resume.pdf';
import '../sass/header.scss';

export const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='list nav-links container'>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <hr></hr>
                <li>
                    <a href={resume} target='_blank' rel='noopener noreferrer'>
                        Resume
                    </a>
                </li>
                <hr></hr>
                <li>
                    <a
                        href='mailto:ehickey08@gmail.com'
                        rel='noopener noreferrer'>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

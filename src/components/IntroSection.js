import React from 'react'
import headShot from '../assets/headshot.jpg'
import '../sass/intro.scss'

export const IntroSection = () => {
    return (
        <section className="intro container section">
            <div className='bio-container'>
                
            </div>
            <div className="image-container">
                <img src={headShot} alt="Ethan Hickey"/>
            </div>
        </section>
    )
}

import React from 'react';
import image from '../utils/assets/images/welcome-1.png';

export function Welcome() {
    return (
        <div className='welcome'>
            <Header />
        </div>
    );
}

const imageQuotes = [
    `I'll sleep when exam is over students`,
    `Get through exams to get to vacation students`,
    `Tonight I work so tomorrow I can go places students`,
];

function Header() {
    return (
        <div className='welcome__header'>
            <div className='welcome__left-section'>
                <h1>Become your most unstoppable self</h1>
                <p>Master any subject, one success at a time.</p>
                <button className='button wrapped-button'>Get Started</button>
                {/*! I'm a teach and I'm a parent pages */}
            </div>
            <div className='welcome__right-section'>
                <img width='682' src={image} />
                <div>QUIZLET IS FOR</div>
                {imageQuotes.map((quote, i) => (
                    <div key={i}>quote</div>
                ))}
            </div>
        </div>
    );
}

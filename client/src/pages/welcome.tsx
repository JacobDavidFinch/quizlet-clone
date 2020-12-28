import React, { useState, useEffect } from 'react';
import { useInterval } from '../hooks/useInterval';
import image1 from '../utils/assets/images/welcome-1.png';
import image2 from '../utils/assets/images/welcome-2.png';
import image3 from '../utils/assets/images/welcome-3.png';
import flashImage from '../utils/assets/images/welcome-flash.png';
import flashDesk from '../utils/assets/images/welcome-desk.png';
import flashPuzzle from '../utils/assets/images/welcome-puzzle.png';
import highlightCircle from '../utils/assets/images/highlight-circle.svg';

export function Welcome() {
    return (
        <div className='welcome'>
            <Header />
            <Main />
            {/* <Footer /> */}
        </div>
    );
}

const rightDisplay: [string, string][] = [
    [image1, `I'll sleep when exam is over students`],
    [image2, `Get through exams to get to vacation students`],
    [image3, `Tonight I work so tomorrow I can go places students`],
];

function Header() {
    const [index, set] = useState(0);

    useInterval(() => {
        if (rightDisplay.length === index + 1) {
            set(0);
        } else {
            set(index + 1);
        }
    }, 6000);

    const [image, quote] = rightDisplay[index];

    return (
        <div className='welcome__header'>
            <div className='welcome__left-section'>
                <div className='welcome__left-section-content'>
                    <h1>Become your most unstoppable self</h1>
                    <p>Master any subject, one success at a time.</p>
                    <button className='button wrapped-button'>Get Started</button>
                    {/*! I'm a teach and I'm a parent pages */}
                </div>
            </div>
            <div className='welcome__right-section'>
                <img className='welcome__right-section-image' src={image} />
                <div className='welcome__right-section-content'>
                    <div>QUIZLET IS FOR</div>
                    <p>{quote}</p>
                </div>
                <div className='welcome__right-section-progress' />
            </div>
        </div>
    );
}

function Main() {
    return (
        <div className='welcome__main'>
            <div className='welcome__90p-students'>
                <em>90%</em> of students who use Quizlet report higher grades.
            </div>
            <section className='welcome__f-cards'>
                <div>
                    <h3>You bring the brains, we’ll bring everything else.</h3>
                    <p>
                        From flashcards to help you learn francais, to games that make it easy to get a handle on
                        history, use a variety of tools to conquer any challenge.
                    </p>
                </div>
                <img src={flashImage} />
            </section>
            <section className='welcome__desk'>
                <img src={flashDesk} />
                <div>
                    <h3>Your next win is just a fact away</h3>
                    <p>
                        Each new thing you learn is an achievement. Quizlet breaks down topics and subjects, so you
                        accomplish something new every step of the way.
                    </p>
                </div>
            </section>
            <section className='welcome__puzzle'>
                <div>
                    <h3>Don't get frustrated. Get it done.</h3>
                    <p>When even the smallest lessons feel like a victory, it’s easy to keep going.</p>
                </div>
                <img src={flashPuzzle} />
            </section>
            <Quotes />
            <div className='welcome__ready-to-start'>
                Ready to start getting better grades?
                <button className='button wrapped-button'>Get started</button>
            </div>
            {/* <div>Take your learning with you</div> */}
        </div>
    );
}

function Quotes() {
    const [index, setIndex] = useState(0);

    const quotes = [
        [
            'Quizlet has helped me to understand just how fun and important and fun studying can be! This school year, in chemistry class I put my terms on Quizlet and I already feel better about my upcoming test.',
            'LittleButtercup, AGE 17',
        ],
        [
            'I discovered Quizlet in seventh grade. It helped my grades SOOOOO much. Thank you for making studying fun and productive!',
            'nicoleb18, AGE 19',
        ],
        [
            'When it came to studying I was a mess. Now I am at this new school and they introduced me to Quizlet. I am no longer stressed when it comes to studying for assignments. THANK YOU QUIZLET!!!',
            'sierrafr, AGE 20',
        ],
        [
            'Quizlet is a great way to study. I introduced it to my friends and we are all improving. Whenever I think of Quizlet, I think of the pure joy of studying in a few minutes instead of hours.',
            'sierrafr, AGE 20',
        ],
    ];
    return (
        <div className='welcome__quotes'>
            <div className='welcome__quote'></div>
            <div className='welcome__quotee'></div>
        </div>
    );
}

function Footer() {
    const footerColumns = [
        [
            'Subject',
            ['Be The Change', 'Arts and Humanities', 'Languages', 'Math', 'Science', 'Social Science', 'Other'],
        ],
        [
            'Features',
            ['Quizlet Live', 'Quizlet Learn', 'Diagrams', 'Flashcards', 'Mobile', 'Premium Content', 'Partnerships'],
        ],
        ['Help', ['Sign up', 'Help Center', 'Honor Code', 'Community Guidelines', 'Teachers']],
        [
            'About',
            [
                'Company',
                'Blog',
                'Press',
                'Careers',
                'How Quizlet Works',
                'Advertise',
                'Privacy',
                'Ad and Cookie Policy',
                'Terms',
            ],
        ],
        ['Language', ['English (USA)']],
    ];
    return (
        <div>
            <div className='welcome__footer-columns'>
                {footerColumns.map(([header, topics]: [string, string[]]) => (
                    <div className='welcome__footer-column'>
                        <div key={header}>{header}</div>
                        {topics.map((topic) => (
                            <div key={topic}>{topic}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='welcome__footer-bar'>
                <div className='welcome__footer-bar-left'>
                    <div>Twitter</div>
                    <div>Facebook</div>
                    <div>Instagram</div>
                </div>
                <div className='welcome__footer-bar-right'>2020 Quizlet Inc</div>
            </div>
        </div>
    );
}

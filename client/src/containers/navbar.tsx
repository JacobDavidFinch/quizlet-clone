import React from 'react';
import { FaBars, FaSearch, FaChevronDown } from 'react-icons/fa';
import { useWindowSize } from '../hooks/useWindowSize';

type NavBar = {
    isAuthenticated: boolean;
};

export const Navbar = ({ isAuthenticated }: NavBar) => {
    const windowSize = useWindowSize();

    return (
        <div className='navbar'>
            <div className='icon'>
                <div aria-label='Quizlet'>
                    <svg fill='currentColor' viewBox='0 0 244 53' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M26.99 1.09c15.382 0 26.99 11.36 26.99 25.883 0 6.687-2.54 12.583-6.676 17.04l7.182 7.98H42.37l-2.49-2.847c-3.6 2.482-8.102 3.638-12.89 3.638C11.68 52.784 0 41.496 0 26.974 0 12.017 12.116 1.09 26.99 1.09zm0 41.7c2.03 0 3.844-.43 5.586-1.15L22.2 29.993h12.117l5.587 6.4c2.03-2.518 2.974-5.537 2.974-9.42 0-8.698-6.6-15.817-15.89-15.817-9.287 0-15.814 7.046-15.814 15.817 0 8.915 6.527 15.818 15.815 15.818zM61.035 15.76H71.99v20.706c0 4.89 3.048 6.686 6.676 6.686 3.627 0 6.675-1.797 6.675-6.686V15.758h10.956v21.64C96.296 48.04 88.026 53 78.666 53s-17.63-4.96-17.63-15.6V15.757zm42.75 36.235h10.81V15.758h-10.81v36.235zm-.992-45.69c0-3.56 2.92-6.303 6.36-6.303 3.518 0 6.36 2.743 6.36 6.303 0 3.485-2.842 6.23-6.36 6.23-3.44 0-6.36-2.745-6.36-6.23zm35.738 18.873h-16.74v-9.418h35.332l-20.15 26.817h19.133v9.418h-37.94l20.365-26.817zm23.67 26.817h10.81V1.883H162.2v50.11zm17.063-18.19c0-11.503 8.272-18.908 19.372-18.908 11.173 0 18.5 8.196 18.5 18.334 0 0 0 2.03-.217 3.684h-26.843c.218 4.314 3.48 6.883 9.648 6.883 6.966 0 10.883-2.085 12.987-3.523v9.347c-3.41 2.157-7.182 3.308-13.567 3.308-12.263 0-19.88-7.405-19.88-18.765v-.36zm26.99-4.026c0-3.235-3.337-5.967-7.618-5.967-4.498 0-8.27 2.66-8.488 5.967h16.105zm19.172-4.313h-4.86v-9.706h4.86V1.882h10.52v13.876H244v9.706h-8.054v26.53h-10.52v-26.53z'
                            fillRule='evenodd'
                        ></path>
                    </svg>
                </div>
            </div>
            <div className='actions'>
                {windowSize.width && windowSize.width > 778 ? (
                    <>
                        <div className='search'>
                            <FaSearch /> Search
                        </div>
                        <div className='browse'>
                            <BrowseSvg />
                            Browse
                        </div>
                        <div className='create'>
                            <CreateCardSvg />
                            Create
                        </div>
                    </>
                ) : (
                    <>
                        <div className='search'>
                            <CreateCardSvg />
                        </div>
                        <div className='browse'>
                            <FaSearch />
                        </div>
                        <div className='create'>
                            <FaBars />
                        </div>
                    </>
                )}
            </div>
            <AuthActions isAuthenticated={isAuthenticated} />
        </div>
    );
};

/* {windowSize.width && windowSize.width > 885 ? (<div>Username</div>) : null} */

function CreateCardSvg() {
    return (
        <svg id='create-set' viewBox='0 0 24 24'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.375 18c0 .898.728 1.625 1.625 1.625h12c.898 0 1.625-.727 1.625-1.625v-4a.625.625 0 1 0-1.25 0v4a.375.375 0 0 1-.375.375H6A.375.375 0 0 1 5.625 18V6c0-.207.168-.375.375-.375h4.25a.625.625 0 1 0 0-1.25H6c-.897 0-1.625.728-1.625 1.625v12z'
            ></path>
            <path d='M6 19.625v-.375.375zM4.375 18h.375-.375zM18 19.625V20v-.375zM19.625 18h-.375.375zm0-4H20h-.375zm-1.25 0h.375-.375zm0 4H18h.375zm-.375.375v.375-.375zm-12 0V18v.375zM5.625 18H6h-.375zm0-12H5.25h.375zM6 5.625V6v-.375zm4.25 0V5.25v.375zm0-1.25V4v.375zm-4.25 0v.375-.375zM4.375 6H4h.375zM6 19.25c-.69 0-1.25-.56-1.25-1.25H4a2 2 0 0 0 2 2v-.75zm12 0H6V20h12v-.75zM19.25 18c0 .69-.56 1.25-1.25 1.25V20a2 2 0 0 0 2-2h-.75zm0-4v4H20v-4h-.75zm-.25-.25a.25.25 0 0 1 .25.25H20a1 1 0 0 0-1-1v.75zm-.25.25a.25.25 0 0 1 .25-.25V13a1 1 0 0 0-1 1h.75zm0 4v-4H18v4h.75zm-.75.75a.75.75 0 0 0 .75-.75H18v.75zm-12 0h12V18H6v.75zM5.25 18c0 .414.336.75.75.75V18h-.75zm0-12v12H6V6h-.75zM6 5.25a.75.75 0 0 0-.75.75H6v-.75zm4.25 0H6V6h4.25v-.75zM10.5 5a.25.25 0 0 1-.25.25V6a1 1 0 0 0 1-1h-.75zm-.25-.25a.25.25 0 0 1 .25.25h.75a1 1 0 0 0-1-1v.75zM6 4.75h4.25V4H6v.75zM4.75 6c0-.69.56-1.25 1.25-1.25V4a2 2 0 0 0-2 2h.75zm0 12V6H4v12h.75z'></path>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.938 4.438v2.625h2.625a.438.438 0 0 1-.001.875h-2.625v2.625c0 .24-.196.437-.437.437a.439.439 0 0 1-.438-.438V7.938h-2.625A.439.439 0 0 1 13 7.5a.44.44 0 0 1 .438-.438h2.624V4.438a.439.439 0 0 1 .875 0z'
                stroke='currentColor'
            ></path>
        </svg>
    );
}

function BrowseSvg() {
    return (
        <svg id='subjects' viewBox='0 0 24 24'>
            <rect x='4.8' y='3.605' width='2.4' height='16.8' rx='1.2'></rect>
            <rect x='9.6' y='3.606' width='2.4' height='16.8' rx='1.2'></rect>
            <rect x='13.331' y='4.262' width='2.4' height='16.8' rx='1.2' transform='rotate(-16 13.331 4.262)'></rect>
        </svg>
    );
}

function AuthActions({ isAuthenticated }) {
    return (
        <div className='authentication'>
            {isAuthenticated ? (
                <div>
                    <div>User Icon</div>
                    <div>Username</div>
                    <FaChevronDown />
                </div>
            ) : (
                <>
                    <button className='search'>Search</button>
                    <button className='login button wrapped-button'>Log in</button>
                    <button className='sign-up button wrapped-button'>Sign up</button>
                </>
            )}
        </div>
    );
}

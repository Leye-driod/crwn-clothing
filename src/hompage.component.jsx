import React from 'react';
import App from './App';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className="content">
                    <h1 classname="title"> Hats</h1>
                    <span className="subtitle">Shop Now</span>
                </div>               
            </div>
            <div className='menu-item'>
                <div className="content">
                    <h1 classname="title">JACKETS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className="content">
                    <h1 classname="title"> SNEAKERS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 classname="title"> WOMEN</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 classname="title"> MENS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
    
);

export default HomePage;
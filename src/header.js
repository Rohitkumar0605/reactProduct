import React from 'react';
import logo from './assets/logo.png';

const Header = () => {
    return (
        <div style={{backgroundColor: '#ff6200', color: '#fff'}}>
           <img src={logo} alt='not found' width="200px" height="100px" />
            <span className='data' align='center' style={{ color: '#fff', fontSize: '40px', margin: '20%' }}>ING Banking Products</span>
        </div>
    )
}

export default Header;
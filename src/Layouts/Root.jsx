import React from 'react';
import { Outlet } from 'react-router';
import HeaderTop from '../Components/Header/HeaderTop';

const Root = () => {
    return (
        <>
            <header>
                <HeaderTop></HeaderTop>
                <div className='max-w-[1540px] mx-auto'>
                </div>
            </header>
            <main>
                <div className='max-w-[1540px] mx-auto'>
                    <Outlet></Outlet>
                </div>
            </main>
           <footer>
                <div className='max-w-[1540px] mx-auto'>

                </div>
           </footer>
        </>
    );
};

export default Root;
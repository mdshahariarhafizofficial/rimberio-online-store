import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <header>
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
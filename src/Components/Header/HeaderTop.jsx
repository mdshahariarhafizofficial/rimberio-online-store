import React from 'react';
import { Link } from 'react-router';

const HeaderTop = () => {
    return (
        <div className='py-3 border-b border-gray-200'>
            <div className='max-w-[1540px] mx-auto flex justify-between'>
                <div>
                    <p className='text-gray-600 font-semibold text-sm'>Get up to 50% off new season styles, limited time only</p>
                </div>
                <div className='space-x-5'>
                    <Link className='text-gray-600 hover:text-primary font-semibold text-sm'>Help Center</Link>
                    <Link className='text-gray-600 hover:text-primary font-semibold text-sm'>Order Tracking</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
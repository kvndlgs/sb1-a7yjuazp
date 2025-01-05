// import React from 'react';
import { Wallet } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { INITIAL_CREDITS } from '../config/constants';


export const Balance = () => {
    return (
        <div className='flex w-full max-w-sm items-center space-x-2 mx-auto'>
            <div className='flex mx-auto'>
            <Input 
              readOnly
              value={`${INITIAL_CREDITS} ETH`}
              className='appearence:none rounded-l-lg rounded-r-none text-neutral-700 active:none focus:none'
            />
            <Button className='rounded-r-lg rounded-l-none  bg-mauve-500 hover:bg-mauve-200'>
                <Wallet className='w-20' />
            </Button>
            </div>
            {/*
        <span className='bg-mauve-500 text-white p-3.5 rounded-tl-lg rounded-bl-lg'>
            <Wallet />
        </span>
        <input type='text' value={INITIAL_CREDITS} className='outline-none focus-none text-neutral-700 font-bold px-4' readOnly />
        <span className='text-neutral-700 mr-4'>
            <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99757 0L7.82275 0.593801V17.823L7.99757 17.9974L15.995 13.2701L7.99757 0Z" fill="#343434" />
                <path d="M7.99766 0L0 13.2701L7.99766 17.9974V9.63484V0Z" fill="#8C8C8C" />
                <path d="M7.99794 19.512L7.89941 19.6322V25.7695L7.99794 26.0571L16.0003 14.7871L7.99794 19.512Z" fill="#3C3C3B" />
                <path d="M7.99766 26.0571V19.512L0 14.7871L7.99766 26.0571Z" fill="#8C8C8C" />
                <path d="M7.99756 17.9973L15.995 13.27L7.99756 9.63477V17.9973Z" fill="#141414" />
                <path d="M0 13.27L7.99766 17.9973V9.63477L0 13.27Z" fill="#393939" />
            </svg>

        </span>
            */}
    </div>
    )
}
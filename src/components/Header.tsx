import Logo from './Logo';
import { User } from 'lucide-react';
import { Balance } from './Balance'

export default function Header() {
    return (
        <div className='bg-[#4B455C] w-full h-[80px] flex justify-between items-center z-50 px-2 shadow-lg'>


            <Logo />
           <Balance />
            <div>
                <button className='p-3 bg-mauve-500 rounded-full flex text-white mr-2 shadow-sm'>
                    <User />
                </button>
            </div>
            {/*
             <div className='flex items-center justify-around p-4 gap-4'>
                <button className='px-[16px] py-[6px] bg-[#9A7FE6] rounded-md drop-shadow-mauve'>
                    Log in
                </button>
                <button className='px-[16px] py-[6px] bg-lizard rounded-md drop-shadow-lizard'>
                    Sign up
                </button>
            </div>
    */}
        </div>
    )
}
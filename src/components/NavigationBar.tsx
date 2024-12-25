import { Dice2, Menu, Crown, Wallet, Coins } from 'lucide-react';

export default function NavigationBar(){
    return (
        <div className='bg-[#1F1D25] fixed bottom-0 py-2 left-0 w-full h-16 mx-auto overflow-hidden md:hidden sm:border'>
            <div className='grid grid-cols-5 h-full mx-auto'>
                <a className='inline-flex flex-col items-center justify-center px-5 gap-1 text-sm' href='/'> <Menu /> MENU </a>
                <a className='inline-flex flex-col items-center justify-center px-5 gap-1 text-sm' href='/'> <Wallet /> WALLET </a>
                <a className='inline-flex flex-col items-center justify-center px-5 gap-1 text-sm' href='/'> <Dice2 /> CASINO </a>
                <a className='inline-flex flex-col items-center justify-center px-5 gap-1 text-sm' href='/'> <Crown /> POKER </a>
                <a className='inline-flex flex-col items-center justify-center px-5 gap-1 text-sm' href='/'> <Coins /> STRGL </a>
            </div>
        </div>
    )
}
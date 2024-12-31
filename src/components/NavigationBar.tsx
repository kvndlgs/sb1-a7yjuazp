import { Dice2, Menu, Crown, Wallet, Coins } from 'lucide-react';

export default function NavigationBar(){
    return (
        <div className='bg-[#1F1D25] fixed bottom-0 py-2 left-0 w-full h-16 mx-auto overflow-hidden sm:hidden border-t-2 border-[#222]'>
            <div className='grid grid-cols-5 h-full mx-auto'>
                <a className='inline-flex flex-col items-center justify-center px-2 gap-1 text-[12px] text-white hover:text-mauve-500' href='/'> <Menu className='w-5 -mb-1' /> MENU </a>
                <a className='inline-flex flex-col items-center justify-center px-2 gap-1 text-[12px] text-white hover:text-mauve-500' href='/'> <Wallet className='w-5 -mb-1' /> WALLET </a>
                <a className='inline-flex flex-col items-center justify-center px-2 gap-1 text-[12px] text-white hover:text-mauve-500' href='/'> <Dice2 className='w-5 -mb-1' /> CASINO </a>
                <a className='inline-flex flex-col items-center justify-center px-2 gap-1 text-[12px] text-white hover:text-mauve-500' href='/'> <Crown className='w-5 -mb-1' /> POKER </a>
                <a className='inline-flex flex-col items-center justify-center px-2 gap-1 text-[12px] text-white hover:text-mauve-500' href='/'> <Coins className='w-5 -mb-1' /> STRGL </a>
            </div>
        </div>
    )
}
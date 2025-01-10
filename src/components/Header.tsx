import Logo from './Logo';
import { FC } from 'react'; 
import { Balance } from './Balance';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { useAuth } from '../context/auth-context';
import { DialogProvider, useDialog } from './DialogProvider'; 

export const Header: FC = () => {

const { session } = useAuth();
const { openDialog } = useDialog();
    return (
        <DialogProvider>
        <div className='bg-[#4B455C] w-full h-[80px] flex justify-between items-center z-50 px-3 shadow-lg'>
            <Logo />
        {session ? (
            <>
           <Balance />
            <div>
                <Popover>
                    <PopoverTrigger>
                <button>
                    <Avatar>
                     <AvatarImage src='../src/components/default-avatar.png' /> 
                     <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                </button>
                </PopoverTrigger>
                <PopoverContent>
                <div className='flex flex-col gap-3'>
                    <div> <a href='/auth/user-profile'> Profile </a></div>
                    <div> <a href='/'> Transactions </a></div>
                    <div> <a href='/'> Bonus </a></div>
                    <div><Button>Sign Out</Button></div>
                </div>
                </PopoverContent>
                </Popover>
            </div>
            </>
       ) : (
            
             <div className='flex items-center justify-around p-4 gap-4'>

                <button onClick={openDialog} className='px-[16px] py-[6px] bg-[#9A7FE6] rounded-md drop-shadow-mauve'>
                    Log in
                </button>
      
                <button onClick={openDialog}  className='px-[16px] py-[6px] bg-lizard rounded-md drop-shadow-lizard'>
                    Sign up
                </button>
            </div>
       )}
        </div>
        </DialogProvider>
    );
}
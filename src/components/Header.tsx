import Logo from './Logo';
import { FC } from 'react'; 
import { Balance } from './Balance';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { useAuth } from '../context/auth-context';

export const Header: FC = () => {

const { session } = useAuth();
    return (
        <div className='bg-[#4B455C] w-full h-[80px] flex justify-between items-center z-50 px-3 shadow-lg'>
            <Logo />
        {session ? (
            <>
           <Balance />
            <div>
                <button>
                    <Avatar>
                     <AvatarImage src='./default-avatar.png' /> 
                     <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                </button>
            </div>
            <Button> Signout </Button>
            </>
       ) : (
            
             <div className='flex items-center justify-around p-4 gap-4'>
                <button className='px-[16px] py-[6px] bg-[#9A7FE6] rounded-md drop-shadow-mauve'>
                    Log in
                </button>
                <button  className='px-[16px] py-[6px] bg-lizard rounded-md drop-shadow-lizard'>
                    Sign up
                </button>
            </div>
       )}
        </div>
    );
}
// import React from 'react';
import { Coins } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
//import { BetHistory } from '../types/game';


const fakeBets = {
    allBets: [
    {
        id: 0,
        game: 'Keno',
        time: '13:46:22',
        user: 'Bred Sheeran',
        multiplier: 'X2.000',
        bet: '$500',
        result: '$0'
    },
    {
        id: 1,
        game: 'Keno',
        time: '13:46:29',
        user: 'Bred Sheeran',
        multiplier: 'X2.000',
        bet: '$500',
        result: '$0'
    },
    {
        id: 2,
        game: 'Dice',
        time: '13:47:11',
        user: 'Niga nig',
        multiplier: 'X2.000',
        bet: '$10',
        result: '$20'
    },
    {

        id:3,
        game: 'Keno',
        time: '13:47:28',
        user: 'Bred Sheeran',
        multiplier: 'x2.000',
        bet: '$500',
        result: '$1000'
    },
    {
        id: 4,
        game: 'Keno',
        time: '13:47:30',
        user: 'Bred Sheeran',
        multiplier: 'X2.000',
        bet: '$500',
        result: '$0'
    },
    {
        id: 5,
        game: 'Dice',
        time: '13:47:32',
        user: 'Niga nig',
        multiplier: 'X2.000',
        bet: '$10',
        result: '$0'
    },
    {
        id: 6,
        game: 'Keno',
        time: '13:48:34',
        user: 'Bred Sheeran',
        multiplier: 'X2.000',
        bet: '$500',
        result: '$0'
    },
    ],
    userBets: [
        {
            id: 0,
            game: 'Keno',
            time: '13:46:22',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$0'
        },
        {
            id: 1,
            game: 'Keno',
            time: '13:46:29',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$0'
        },
        {
            id: 2,
            game: 'Keno',
            time: '13:47:28',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$1000'
        },
        {
            id: 3,
            game: 'Keno',
            time: '13:47:30',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$0'
        },
        {
            id: 4,
            game: 'Keno',
            time: '13:48:34',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$0'
        },
    ],
    bigBets: [
        {
            id: 0,
            game: 'Keno',
            time: '13:46:22',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$500'
        },
        {
            id: 1,
            game: 'Keno',
            time: '13:46:29',
            user: 'Bred Sheeran',
            bet: '$500',
            result: '$0'
        },
        {
            id: 2,
            game: 'Keno',
            time: '13:47:28',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$1000'
        },
        {
            id: 3,
            game: 'Keno',
            time: '13:47:30',
            multiplier: 'X2.000',
            user: 'Bred Sheeran',
            bet: '$500',
            result: '$0'
        },
        {
            id: 4,
            game: 'Keno',
            time: '13:48:34',
            user: 'Bred Sheeran',
            multiplier: 'X2.000',
            bet: '$500',
            result: '$0'
        },
    ]
}



export const BetHistoryTable = () => {   
    return (
        <Tabs className='w-full' defaultValue='all-bets'>
        <TabsList className='flex items-center justify-around p-4 bg-transparent'>
            <TabsTrigger className='bg-mauve text-white' value='all-bets'>
                ALL BETS
            </TabsTrigger>
            <TabsTrigger value='my-bets'>
                MY BETS
            </TabsTrigger>
            <TabsTrigger value='high-rolls'>
                HIGH ROLLS
            </TabsTrigger>
            <TabsTrigger value='rare-wins'>
                RARE WINS
            </TabsTrigger>
        </TabsList>
        <div>
            <TabsContent value='all-bets'>
            <div>
                <div className='w-full flex items-center justify-between py-2 px-5'>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> GAME </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md md:flex hidden'>TIME</div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> USER </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> MULTIPLIER </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md md:flex hidden'> BET </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> PAYOUT </div>
                </div>
            </div>
            <div>
            {
                    fakeBets.allBets.map((bet) => (
                        <div key={bet.id} className='flex items-center justify-between rounded-lg px-5 py-3 bg-neutral-700 my-2 mx-2'>
                            <div>{ bet.game }</div>
                            <div className='md:flex hidden'>{bet.time} </div>
                            <div> { bet.user } </div>
                            <div className='px-2 py-1.5 rounded-full bg-neutral-900 text-xs'> {bet.multiplier} </div>
                            <div className='flex items-center gap-1 md:flex hidden'> <Coins className='h-4'/> {bet.bet }  </div>
                            <div> {bet.result } </div>
                        </div>
                    ))
                }
            </div>
            </TabsContent>
            <TabsContent value='my-bets'>
            <div>
                <div className='w-full flex items-center justify-between py-2 px-5'>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> GAME </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md md:flex hidden'>TIME</div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> USER </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> MULTIPLIER </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md md:flex hidden'> BET </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> PAYOUT </div>
                </div>
            </div>
            <div>
            {
                    fakeBets.userBets.map((bet) => (
                        <div key={bet.id} className='flex items-center justify-between rounded-lg px-5 py-3 bg-neutral-700 my-2 mx-2'>
                            <div>{ bet.game }</div>
                            <div className='md:flex hidden'>{bet.time} </div>
                            <div> { bet.user } </div>
                            <div className='px-2 py-1.5 rounded-full bg-neutral-900 text-xs'> {bet.multiplier} </div>
                            <div className='flex items-center gap-1 md:flex hidden'> <Coins className='h-4'/> {bet.bet }  </div>
                            <div> {bet.result } </div>
                        </div>
                    ))
                }
            </div>
            </TabsContent>
            <TabsContent value='rare-wins'>
            <div>
                <div className='w-full flex items-center justify-between py-2 px-5'>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> GAME </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md md:flex hidden'>TIME</div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> USER </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> MULTIPLIER </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md md:flex hidden'> BET </div>
                    <div className='text-neutral-300 font-bold text-sm md:text-md'> PAYOUT </div>
                </div>
            </div>
            <div>
            {
                    fakeBets.bigBets.map((bet) => (
                        <div key={bet.id} className='flex items-center justify-between rounded-lg px-5 py-3 bg-neutral-700 my-2 mx-2'>
                            <div>{ bet.game }</div>
                            <div className='md:flex hidden'>{bet.time} </div>
                            <div> { bet.user } </div>
                            <div className='px-2 py-1.5 rounded-full bg-neutral-900 text-xs'> {bet.multiplier} </div>
                            <div className='flex items-center gap-1 md:flex hidden'> <Coins className='h-4'/> {bet.bet }  </div>
                            <div> {bet.result } </div>
                        </div>
                    ))
                }
            </div>
            </TabsContent>
        </div>
        </Tabs>
  )
}
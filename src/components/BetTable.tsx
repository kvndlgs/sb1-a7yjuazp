// import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from './ui/table';
//import { BetHistory } from '../types/game';




export const BetHistoryTable = () => {   
    return (
        <Tabs className='w-full' defaultValue='all-bets'>
        <TabsList className='w-full'>
            <TabsTrigger value='all-bets'>
                All bets
            </TabsTrigger>
            <TabsTrigger value='my-bets'>
                My bets
            </TabsTrigger>
            <TabsTrigger value='high-rolls'>
                High rolls
            </TabsTrigger>
        </TabsList>
        <Table className='w-full m-0 p-0'>
            <TabsContent className='w-full' value='all-bets'>
            <TableHeader className='w-ful'>
                <TableRow>
                    <TableHead> Game </TableHead>
                    <TableHead> User </TableHead>
                    <TableHead> Bet </TableHead>
                    <TableHead> Result </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className='w-full'>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Dice </TableCell>
                    <TableCell> Niga Niga </TableCell>
                    <TableCell> 20 USDT </TableCell>
                    <TableCell> +20 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> +500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
            </TableBody>
            </TabsContent>
            <TabsContent value='my-bets'>
            <TableHeader className='w-ful'>
                <TableRow>
                    <TableHead> Game </TableHead>
                    <TableHead> User </TableHead>
                    <TableHead> Bet </TableHead>
                    <TableHead> Result </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> +500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
            </TableBody>
            </TabsContent>
            <TabsContent value='high-rolls'>
            <TableHeader className='w-full'>
                <TableRow>
                    <TableHead> Game </TableHead>
                    <TableHead> User </TableHead>
                    <TableHead> Bet </TableHead>
                    <TableHead> Result </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> +500 USDT </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Keno </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
            </TableBody>
            </TabsContent>
        </Table>
        </Tabs>
  )
}
// import React from 'react';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from '../components/ui/table';
//import { BetHistory } from '../types/game';




export const BetHistoryTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead> Game </TableHead>
                    <TableHead> User </TableHead>
                    <TableHead> Bet </TableHead>
                    <TableHead> Result </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell> 1 </TableCell>
                    <TableCell> Bred Sheeran </TableCell>
                    <TableCell> 500 USDT </TableCell>
                    <TableCell> -500 USDT </TableCell>
                </TableRow>
            </TableBody>
        </Table>
  )
}
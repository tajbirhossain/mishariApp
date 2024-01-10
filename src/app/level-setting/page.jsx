'use client';
import React, { useState } from 'react'
import { DM_Sans } from 'next/font/google';
import { Input } from '@/components/ui/input'
import {
    SelectGroup,
    SelectTrigger,
    Select,
    SelectItem,
    SelectValue,
    SelectContent,
    SelectLabel,
} from '@/components/ui/select';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon, MoreHorizontal, Heart } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Success from '/public/icon/success.png';
import away from '/public/icon/away.svg';
import closeRed from '/public/image/close-red.svg';
import editBlue from '/public/icon/edit-blue.svg';
import deleteBlue from '/public/icon/delete-blue.svg';
import dollarSign from '/public/icon/dollar-sign.svg';
import gigSign from '/public/icon/gig-sign.svg';
import starSign from '/public/icon/star-sign.svg';
import CardImage1 from '/public/image/image1.png';
import CardImage2 from '/public/image/card-2.png';
import bank from '/public/image/bank.svg';
import cursorGray from '/public/image/cursor.svg';
import arrowDown from '/public/image/arrow-down.svg';
import manImg from '/public/image/man.jpg'
import Image from 'next/image';



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ColumnChart from '@/components/ColumnChart'





function createData(name, lvl1, lvl2, lvl3) {
    return { name, lvl1, lvl2, lvl3 };
}

const rows = [
    createData('Level Name', 'Level 01', 'Level 02', 'Level 03'),
    createData('Level Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
    createData('Commission Rate', '5%', '7.5%', '8.5%'),
    createData('Minimum Withdrawal Amount', '$ 50', '$ 40', '$ 30'),
    createData('Maximum Withdrawal Amount', '$ 500', '$ 1200', '$ 2000'),
    createData('Minimum  Number of Gigs', '0', '0', '0'),
    createData('Maximum  Number of Gigs', '50', '100', '250'),
];


const dmsans = DM_Sans({ subsets: ['latin'] });

const LevelSetting = () => {
    const [date, setDate] = useState({
        from: new Date(),
        to: addDays(new Date(), 20),
    });




    return (
        <div className='my-8 px-4'>
            <header className='flex items-center justify-between'>
                <div className="flex justify-start gap-4 mx-3">
                    <Input
                        className="w-[350px]"
                        placeholder="Search User"
                        Icontype="search"
                    />
                    <Select>
                        <SelectTrigger className="w-[200px] text-primary ">
                            <SelectValue placeholder="Designer " className="text-primary" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="text-primary ">
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={'outline'}
                                className={cn(
                                    'w-[200px] justify-between text-left font-normal text-primary ',
                                    !date && 'text-muted-foreground'
                                )}
                            >
                                <p>
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {format(date.from, 'LLL dd')} -{' '}
                                                {format(date.to, 'LLL dd')}
                                            </>
                                        ) : (
                                            format(date.from, 'LLL dd')
                                        )
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                </p>

                                <CalendarIcon className="mr-2 h-4 w-4 text-thard" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </header>
            <main className='mt-12'>
                <div className={cn(
                    'flex justify-between px-5', dmsans.className)} >
                    <div className="w-full xl:w-[65%] ">
                        <div className="bg-white border-thard border-[1px] rounded-xl ">
                            <div className="p-3 flex gap-x-4">
                                <h2 className="text-2xl  font-bold text-primary ">Level Settings</h2>
                                <Button
                                    variant={('outline', 'sm')}
                                    className=" bg-gray-50 border-none"
                                >
                                    <MoreHorizontal absoluteStrokeWidth className="text-primary" />
                                </Button>
                            </div>
                            <div className="p-3">
                                <TableContainer component={Paper} elevation={0} className='mb-4'>
                                    <Table sx={{ minWidth: 650 }} className='w-full' aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='text-[#6D749F] text-xl font-medium pb-2 w-[280px]'></TableCell>
                                                <TableCell className='text-[#6D749F] text-xl font-medium pb-2' align="right">
                                                    <div className='flex items-center'>
                                                        Level 01
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-[#6D749F] text-xl font-medium pb-2' align="right">
                                                    <div className='flex items-center'>
                                                        Level 02
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-[#6D749F] text-xl font-medium pb-2' align="right">
                                                    <div className='flex items-center'>
                                                        Leavel 03
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" className='border-0 text-[#2B3674B0] text-xl font-medium'>
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="left" className='border-0 text-[#A3AED0] font-normal'>
                                                        {row.lvl1}
                                                    </TableCell>
                                                    <TableCell align="left" className='border-0 text-[#A3AED0] font-normal'>
                                                        {row.lvl2}
                                                    </TableCell>
                                                    <TableCell align='left' className='border-0 text-[#A3AED0] font-normal'>
                                                        {row.lvl3}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <div className="flex justify-end pr-10">
                                    <button className='text-sm font-bold w-[130px] h-[32px] bg-[#2B3674] border-0 text-white '>Edit Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LevelSetting
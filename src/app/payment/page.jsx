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





function createData(profile, name, status, joinedDate, manage) {
    return { profile, name, status, joinedDate, manage };
}

const rows = [
    createData(manImg, 'Sofia Frank', 'Approved', '24Jan2021', 1),
    createData(manImg, 'Sofia Frank', 'Approved', '24Jan2021', 2),
    createData(manImg, 'Sofia Frank', 'Approved', '24Jan2021', 3),
    createData(manImg, 'Sofia Frank', 'Pending', '24Jan2021', 4),
    createData(manImg, 'Sofia Frank', 'Rejected', '24Jan2021', 5),
];


const dmsans = DM_Sans({ subsets: ['latin'] });

const Users = () => {
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
            <main className='mt-6'>
                <div className={cn(
                    'flex justify-between lg:flex-row flex-col-reverse px-5', dmsans.className)} >
                    <div className="w-full lg:w-[55%] ">
                        <div className="flex items-center mb-6">
                            <button className='text-sm font-medium border-2 border-[#05CD99] rounded-[25px] h-10 w-[120px] mr-3 '>Approved</button>
                            <button className='text-sm font-medium border-2 border-[#FFCE20] rounded-[25px] h-10 w-[120px] mr-3 '>Pending</button>
                            <button className='text-sm font-medium border-2 border-[#FF0000] rounded-[25px] h-10 w-[120px] '>Rejected</button>
                        </div>
                        <div className="bg-white border-thard border-[1px] rounded-xl ">
                            <div className="p-3 flex gap-x-4">
                                <h2 className="text-2xl  font-bold text-primary ">Status</h2>
                                <Button
                                    variant={('outline', 'sm')}
                                    className=" bg-gray-50 border-none"
                                >
                                    <MoreHorizontal absoluteStrokeWidth className="text-primary" />
                                </Button>
                            </div>
                            <div className="p-3">
                                <TableContainer component={Paper} elevation={0}>
                                    <Table sx={{ minWidth: 650 }} className='w-full' aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='text-[#A3AED0]'>
                                                    <div className='flex items-center'>
                                                        User
                                                        <Image
                                                            src={arrowDown}
                                                            className='ml-2'
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-[#A3AED0]' align="right">
                                                    <div className='flex items-center'>
                                                        Date
                                                        <Image
                                                            src={arrowDown}
                                                            className='ml-2'
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-[#A3AED0]' align="right">
                                                    <div className='flex items-center'>
                                                        Status
                                                        <Image
                                                            src={arrowDown}
                                                            className='ml-2'
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-[#A3AED0]' align="right">
                                                    <div className='flex items-center'>
                                                        Manage
                                                        <Image
                                                            src={arrowDown}
                                                            className='ml-2'
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-[#A3AED0]' align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" className='border-0 text-[#2B3674] font-bold'>
                                                        <div className='flex items-center'>
                                                            <Image src={row.profile} className='w-10 h-10 rounded-full object-cover mr-2.5' />
                                                            {row.name}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="left" className='border-0 text-[#2B3674] font-bold'>{row.joinedDate}</TableCell>
                                                    <TableCell align="left" className='border-0 text-[#2B3674] font-bold'>
                                                        <div className="flex">
                                                            <Image src={row.status === "Approved" ? Success : row.status === "Pending" ? away : closeRed} className='w-5 h-5 mr-1 block' />
                                                            {row.status}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="left" className='border-0 text-[#2B3674] font-bold'>
                                                        <div className="flex items-center">
                                                            <Image src={Success} className='w-6 h-6 mr-3 ' />
                                                            <Image src={closeRed} className='w-6 h-6 mr-3 ' />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        <button className='text-sx font-medium text-[#280559] w-[90px] h-[31px] rounded-[20px] border-[1px] border-[#280559] '>View</button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                    <div className="border-[1px] border-thard rounded-lg w-full lg:w-[calc(100%-55%-30px)] lg:mb-0 mb-6 p-10">
                        <h2 className="text-2xl font-bold text-primary mb-7 ">Payment Details</h2>
                        <div className="flex items-center justify-between mb-6">
                            <Image src={bank} className='mr-3' />
                            <p className='text-xl font-medium text-[#3E587F] '>205 10956602345 (Central Bank - London)</p>
                            <div className="flex items-center pl-2">
                                <Image src={cursorGray} className='mr-1' />
                                <p className='text-xs font-medium text-[#B7B7B7] '>Click to see more info</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xl">Total Payment</p>
                            <p className="text-xl">$ 996</p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-xl">Commision</p>
                            <p className="text-xl">$ 49</p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-2xl font-bold">Net Total</p>
                            <p className="text-2xl font-bold">$ 947</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className='w-1/2 h-[205px] rounded-[18px] object-cover mr-3 relative overflow-hidden '>
                                <div className='w-full h-full '>
                                    <h3>Swipe Circles</h3>
                                    <p>By Peter Will</p>
                                </div>
                                <Image src={CardImage2} className='w-full h-full absolute top-0 left-0 object-cover ' />
                            </div>
                            <div className="flex pl-5 w-1/2">
                                <Image src={manImg} className='w-[50px] h-[50px] rounded-full object-cover mr-3 ' />
                                <div>
                                    <h3 className='text-xl font-bold '>Sofia Frank</h3>
                                    <p className='text-base text-[#A3AED0] mb-1 break-all '>sofiafrank123@gmail.com</p>
                                    <button className='text-sm font-medium text-[#280559] border-[1px] border-[#280559] rounded-[10px] w-20 h-[26px] ml-3 '>Chat</button>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-lg font-bold mb-1 '>Design Summary</h3>
                        <p className='text-lg font-normal mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex gap-x-4 mt-5 justify-center mb-5">
                            <Image
                                src={CardImage1}
                                alt="CardImage1"
                                className="w-[23%] rounded-lg h-[130px] object-cover"
                            />
                            <Image
                                src={CardImage1}
                                alt="CardImage1"
                                className="w-[23%] rounded-lg h-[130px] object-cover"
                            />
                            <Image
                                src={CardImage1}
                                alt="CardImage1"
                                className="w-[23%] rounded-lg h-[130px] object-cover"
                            />
                            <div className="w-[23%] relative ">
                                <Image
                                    src={CardImage1}
                                    alt="CardImage1"
                                    className="w-[100%] rounded-lg h-[130px] object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-inner w-full h-full rounded-lg bg-[#00000059] grid place-items-center">
                                    <span className='text-[40px] font-bold'>23+</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <button className='w-[84px] h-[34px] bg-[#05CD9929] text-sm font-bold text-[#05CD99] '>Approve</button>
                            <button className='w-[84px] h-[34px] bg-[#FFF2F2] text-sm font-bold text-[#FF0000] ml-4 '>Reject</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Users
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
import editBlue from '/public/icon/edit-blue.svg';
import deleteBlue from '/public/icon/delete-blue.svg';
import dollarSign from '/public/icon/dollar-sign.svg';
import gigSign from '/public/icon/gig-sign.svg';
import starSign from '/public/icon/star-sign.svg';
import CardImage1 from '/public/image/image1.png';
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
    createData(manImg, 'Sofia Frank', 'Active', '24Jan2021', 1),
    createData(manImg, 'Sofia Frank', 'Active', '24Jan2021', 2),
    createData(manImg, 'Sofia Frank', 'Active', '24Jan2021', 3),
    createData(manImg, 'Sofia Frank', 'Away', '24Jan2021', 4),
    createData(manImg, 'Sofia Frank', 'Active', '24Jan2021', 5),
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
                <button className='w-[182px] h-[50px] rounded-[10px] bg-[#2B3674] text-[20px] font-bold text-white'>Create User</button>
            </header>
            <main>
                <div className={cn(
                    'grid grid-cols-1 gap-1 lg:grid-cols-2 mt-12 gap-x-8 px-5', dmsans.className)} >
                    <div className="bg-white border-thard border-[1px] rounded-xl order-2 lg:order-1">
                        <div className="p-3 flex gap-x-4">
                            <h2 className="text-2xl  font-bold text-primary ">Users</h2>
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
                                                    Name
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
                                                    Joined Date
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
                                                <TableCell align="left" className='border-0 text-[#2B3674] font-bold'>
                                                    <div className="flex">
                                                        <Image src={row.status === "Active" ? Success : away} className='w-5 h-5 mr-1 block' />
                                                        {row.status}
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left" className='border-0 text-[#2B3674] font-bold'>{row.joinedDate}</TableCell>
                                                <TableCell align="left" className='border-0 text-[#2B3674] font-bold'>
                                                    <div className="flex items-center">
                                                        <div className="grid place-items-center w-[30px] h-[30px] rounded-full bg-[rgba(70,118,251,0.15)]">
                                                            <Image src={editBlue} />
                                                        </div>
                                                        <div className="grid place-items-center w-[30px] h-[30px] rounded-full bg-[rgba(255,0,0,0.1)] ml-2.5">
                                                            <Image src={deleteBlue} />
                                                        </div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    <div className="border-[1px] border-thard rounded-lg order-1 lg:order-1 lg:mb-0 mb-6 p-10">
                        <h2 className="text-2xl  font-bold text-primary ">Designer</h2>
                        <div className="flex justify-between mt-4 ">
                            <div className="flex gap-x-4 items-center">
                                <Avatar className=" w-[90px] h-[90px]">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>SG</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="text-2xl font-bold text-primary">
                                        Sofia Frank
                                    </h4>
                                    <p className="text-gray-300">sofiafrank123@gmail.com</p>
                                    <div className="flex">
                                        <Image
                                            src={Success}
                                            alt="success"
                                            width={20}
                                            height={20}
                                            className="object-cover"
                                        />
                                        <span className="font-bold mx-1 text-primary">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block py-5 mt-5">
                            <div className="mb-6">
                                <h3 className='font-bold'>Description</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="flex mb-5">
                                <span className='w-[150px] flex items-center py-2 px-3 rounded-[10px] border-[1px] border-[#2B3674] mr-5 bg-[#2B3674]'>
                                    <div className="w-10 h-10 grid place-items-center rounded-full mr-2 bg-white">
                                        <Image src={dollarSign} />
                                    </div>
                                    <div className='text-white'>
                                        <h3 className='text-sm font-semibold'>Earnings</h3>
                                        <p className='text-xl font-bold'>350</p>
                                    </div>
                                </span>
                                <span className='w-[150px] flex items-center py-2 px-3 rounded-[10px] border-[1px] border-[#2B3674] mr-5'>
                                    <div className="w-10 h-10 grid place-items-center rounded-full mr-2 bg-white">
                                        <Image src={gigSign} />
                                    </div>
                                    <div className='text-[#2B3674]'>
                                        <h3 className='text-sm font-semibold'>Gigs</h3>
                                        <p className='text-xl font-bold'>52</p>
                                    </div>
                                </span>
                                <span className='w-[150px] flex items-center py-2 px-3 rounded-[10px] border-[1px] border-[#2B3674]'>
                                    <div className="w-10 h-10 grid place-items-center rounded-full mr-2 bg-white">
                                        <Image src={starSign} />
                                    </div>
                                    <div className='text-[#2B3674]'>
                                        <h3 className='text-sm font-semibold'>Rating</h3>
                                        <p className='text-xl font-bold'>4.8</p>
                                    </div>
                                </span>
                            </div>
                            <div className='p-10 rounded-xl border-[1px] border-[rgba(163,174,208,0.4)] mb-10'>
                                <div className="mb-4">
                                    <ColumnChart />
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="mr-4 flex items-center">
                                        <div className="w-5 h-2 rounded-lg bg-[#2EC4B6] mr-2.5"></div>
                                        <span className='text-xs text-[#4F4F4F]'>Earnings</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-5 h-2 rounded-lg bg-[#FF3366] mr-2.5"></div>
                                        <span className='text-xs text-[#4F4F4F]'>Withdrawal</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <button className='px-7 py-3 rounded bg-[#ECF1FF] text-[#4676FB] text-xs font-medium mr-5'>Edit user</button>
                                <button className='px-7 py-3 rounded bg-[#FFF2F2] text-[#FF0000] text-xs font-medium'>Delete user</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Users
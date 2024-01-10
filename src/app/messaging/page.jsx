'use client';
import React, { useState } from 'react'
import { DM_Sans } from 'next/font/google';
import { useFont } from '@fontsource/poppins';
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
import playBtn from '/public/image/play-buttton.svg'
import soundProg from '/public/image/voice-progress.svg'
import Image from 'next/image';



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

const Messaging = () => {
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
            <main>
                <div className={cn(
                    'flex justify-between flex-col lg:flex-row mt-12 px-5', dmsans.className)} >
                    <div className="w-full lg:w-[27%] bg-white border-thard border-[1px] rounded-xl mb-6 lg:mb-0 p-5">
                        <div className="flex gap-x-4 mb-4">
                            <h2 className="text-2xl  font-bold text-primary ">Users</h2>
                            <Button
                                variant={('outline', 'sm')}
                                className=" bg-gray-50 border-none"
                            >
                                <MoreHorizontal absoluteStrokeWidth className="text-primary" />
                            </Button>
                        </div>
                        <div className="border-[1px] border-[#A3AED0] rounded-lg overflow-hidden w-full lg:max-w-[330px]">
                            <div className="h-[100px] flex items-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-[#2B3674] active">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-white'>Jacob Jones</h3>
                                    <p className='font-poppins text-xs font-normal text-white'>Marketing Coordinator</p>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white duration-300 hover:bg-[#2B3674] group">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674] duration-300 group-hover:text-white'>Leslie Alexander</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E] duration-300 group-hover:text-white'>Web Designer</p>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white duration-300 hover:bg-[#2B3674] group">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674] duration-300 group-hover:text-white'>Eleanor Pena</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E] duration-300 group-hover:text-white'>Dog Trainer</p>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white duration-300 hover:bg-[#2B3674] group">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674] duration-300 group-hover:text-white'>Kathryn Murphy</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E] duration-300 group-hover:text-white'>Medical Assistant</p>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white duration-300 hover:bg-[#2B3674] group">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674] duration-300 group-hover:text-white'>Wade Warren</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E] duration-300 group-hover:text-white'>Web Designer</p>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white duration-300 hover:bg-[#2B3674] group">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674] duration-300 group-hover:text-white'>Marvin McKinney</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E] duration-300 group-hover:text-white'>Nursing Assistant</p>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center px-6 bg-white duration-300 hover:bg-[#2B3674] group">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674] duration-300 group-hover:text-white'>Marvin McKinney</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E] duration-300 group-hover:text-white'>Nursing Assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[calc(73%-40px)] w-full flex justify-between border-[1px] border-thard rounded-lg p-5">
                        <div className='border-[1px] border-[#A3AED0] rounded-lg overflow-hidden w-[315px]'>
                            <div className="h-[100px] flex items-center px-6 border-b-[1px] border-[#8a8eaa5e]">
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674]'>Send a push notification</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>to  Jacob Jones</p>
                                </div>
                            </div>
                            <div className="h-[100px] flex flex-col justify-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-[#2B3674] active">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center pr-2">
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <h3 className='text-base font-poppins text-white'>Jacob Jones</h3>
                                            <p className='font-poppins text-xs font-normal text-white'>Marketing Coordinator</p>
                                        </div>
                                    </div>
                                    <p className='text-white text-xs font-normal'>6m</p>
                                </div>
                                <p className='text-xs text-white font-normal'>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="h-[100px] flex flex-col justify-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center pr-2">
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <h3 className='text-base font-poppins text-[#2B3674]'>Eleanor Pena</h3>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Dog Trainer</p>
                                        </div>
                                    </div>
                                    <p className='text-[#7A7E9E] text-xs font-normal'>6m</p>
                                </div>
                                <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="h-[100px] flex flex-col justify-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center pr-2">
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <h3 className='text-base font-poppins text-[#2B3674]'>Kathryn Murphy</h3>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Medical Assistant</p>
                                        </div>
                                    </div>
                                    <p className='text-[#7A7E9E] text-xs font-normal'>6m</p>
                                </div>
                                <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="h-[100px] flex flex-col justify-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center pr-2">
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <h3 className='text-base font-poppins text-[#2B3674]'>Kathryn Murphy</h3>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Medical Assistant</p>
                                        </div>
                                    </div>
                                    <p className='text-[#7A7E9E] text-xs font-normal'>6m</p>
                                </div>
                                <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="h-[100px] flex flex-col justify-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center pr-2">
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <h3 className='text-base font-poppins text-[#2B3674]'>Wade Warren</h3>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Web Designer</p>
                                        </div>
                                    </div>
                                    <p className='text-[#7A7E9E] text-xs font-normal'>6m</p>
                                </div>
                                <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="h-[100px] flex flex-col justify-center px-6 border-b-[1px] border-[#8a8eaa5e] bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center pr-2">
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <h3 className='text-base font-poppins text-[#2B3674]'>Marvin McKinney</h3>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Nursing Assistant</p>
                                        </div>
                                    </div>
                                    <p className='text-[#7A7E9E] text-xs font-normal'>6m</p>
                                </div>
                                <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="h-[100px] flex flex-col justify-center px-6 bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center pr-2">
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <h3 className='text-base font-poppins text-[#2B3674]'>Marvin McKinney</h3>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Nursing Assistant</p>
                                        </div>
                                    </div>
                                    <p className='text-[#7A7E9E] text-xs font-normal'>6m</p>
                                </div>
                                <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className='overflow-hidden w-[calc(100%-345px)]'>
                            <div className="h-[88px] flex items-center px-6 border-[1px] border-[#A3AED0] mb-5 rounded-lg bg-white">
                                <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                <div>
                                    <h3 className='text-base font-poppins text-[#2B3674] duration-300 group-hover:text-white'>Wade Warren</h3>
                                    <p className='font-poppins text-xs font-normal text-[#7A7E9E] duration-300 group-hover:text-white'>Web Designer</p>
                                </div>
                            </div>
                            <div className="p-6 border-[1px] border-[#A3AED0] mb-6 rounded-lg bg-white">
                                <div className="flex mb-5">
                                    <div className='flex items-start max-w-[70%]'>
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                        <div>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E] mb-3'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.
                                            </p>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>10:15 pm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end mb-6">
                                    <div className='flex items-start max-w-[70%]'>
                                        <div>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E] mb-3'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.
                                            </p>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>10:15 pm</p>
                                        </div>
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover ml-4' />
                                    </div>
                                </div>
                                <div className="w-full flex relative mb-6">
                                    <div className="w-full h-[1px] bg-[#7A7E9E] absolute left-0 top-1/2 translate-y-[-50%]"></div>
                                    <p className='text-[11px] text-[#7A7E9E] bg-white text-center z-10 mx-auto px-3'>August 22</p>
                                </div>
                                <div className='flex mb-6'>
                                    <div className='flex items-start max-w-[70%]'>
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4 mt-2.5' />
                                        <div>
                                            <div className='border-[1px] border-[#2B3674] rounded-full p-3 flex items-center justify-between relative overflow-hidden mb-2'>
                                                <button className='w-[30px] h-[30px] rounded-full bg-white border-0 flex items-center justify-center mr-3 z-10'>
                                                    <Image src={playBtn} />
                                                </button>
                                                <div className='z-10 w-[calc(100%-0.75rem-30px)]'>
                                                    <Image src={soundProg} className='w-full' />
                                                    <p className='text-[11px] text-white font-normal'>0:56</p>
                                                </div>
                                                <div className="absolute w-[70%] h-full bg-[#2B3674] top-0 left-0"></div>
                                            </div>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>10:15 pm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end mb-6'>
                                    <div className='flex items-start max-w-[70%]'>
                                        <div>
                                            <div className='border-[1px] border-[#2B3674] rounded-full p-3 flex items-center justify-between relative overflow-hidden mb-2'>
                                                <button className='w-[30px] h-[30px] rounded-full bg-white border-0 flex items-center justify-center mr-3 z-10'>
                                                    <Image src={playBtn} />
                                                </button>
                                                <div className='z-10 w-[calc(100%-0.75rem-30px)]'>
                                                    <Image src={soundProg} className='w-full' />
                                                    <p className='text-[11px] text-white font-normal'>0:56</p>
                                                </div>
                                                <div className="absolute w-[70%] h-full bg-[#2B3674] top-0 left-0"></div>
                                            </div>
                                            <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>10:15 pm</p>
                                        </div>
                                        <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover ml-4 mt-2.5' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Messaging
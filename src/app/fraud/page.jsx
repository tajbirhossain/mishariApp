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
import playGray from '/public/image/play-gray.svg'
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

const Fraud = () => {
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
                <button className='w-[232px] h-[50px] rounded-[10px] bg-[#2B3674] text-[20px] font-bold text-white'>Add Forbidden</button>
            </header>
            <main>
                <div className={cn(
                    'flex justify-between flex-col-reverse lg:flex-row mt-12 px-5', dmsans.className)} >
                    <div className="w-full lg:w-[27%] bg-white border-thard border-[1px] rounded-xl p-5">
                        <div className="flex gap-x-4 mb-4">
                            <h2 className="text-2xl  font-bold text-primary ">Notifications</h2>
                            <Button
                                variant={('outline', 'sm')}
                                className=" bg-gray-50 border-none"
                            >
                                <MoreHorizontal absoluteStrokeWidth className="text-primary" />
                            </Button>
                        </div>
                        <div className="border-[1px] border-[#A3AED0] rounded-lg overflow-hidden w-full lg:max-w-[330px]">
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
                    </div>
                    <div className="w-full lg:w-[calc(73%-40px)] mb-6 lg:mb-0 flex flex-col-reverse xl:flex-row justify-between border-[1px] border-thard rounded-lg p-5">
                        <div className='overflow-hidden w-full xl:w-[calc(100%-415px)] xl:mb-0 mb-6'>
                            <div className="w-full border-[1px] border-[#A3AED0] rounded-lg p-4 mb-7">
                                <div className="flex items-center mb-5">
                                    <div className="flex items-center mr-10 w-fit">
                                        <Image src={manImg} className='w-[32px] h-[32px] object-cover rounded-full mr-3' />
                                        <Image src={playGray} className='mr-3' />
                                        <Image src={manImg} className='w-[32px] h-[32px] object-cover rounded-full' />
                                    </div>
                                    <div className="flex items-center">
                                        <button className='w-[84px] h-[34px] bg-[#05CD9929] text-sm font-bold text-[#05CD99] mr-4 '>Approve</button>
                                        <button className='w-[84px] h-[34px] bg-[#FFF2F2] text-sm font-bold text-[#FF0000] '>Reject</button>
                                    </div>
                                </div>
                                <p className='text-xs text-[#7A7E9E] mb-5 '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. <span className='font-extrabold text-[#FF3D3D] '>Contact me on whatsapp.</span>
                                </p>
                                <p className='text-xs text-[#7A7E9E] mb-4 '>
                                    12:15 pm • August 16
                                </p>
                                <p className='text-[10px] text-[#7A7E9E] text-end '>
                                    Auto Detected
                                </p>
                            </div>
                            <div className="w-full border-[1px] border-[#A3AED0] rounded-lg p-4 mb-7">
                                <div className="flex items-center mb-5">
                                    <div className="flex items-center mr-10 w-fit">
                                        <Image src={manImg} className='w-[32px] h-[32px] object-cover rounded-full mr-3' />
                                        <Image src={playGray} className='mr-3' />
                                        <Image src={manImg} className='w-[32px] h-[32px] object-cover rounded-full' />
                                    </div>
                                    <div className="flex items-center">
                                        <button className='w-[84px] h-[34px] bg-[#05CD9929] text-sm font-bold text-[#05CD99] mr-4 '>Approve</button>
                                        <button className='w-[84px] h-[34px] bg-[#FFF2F2] text-sm font-bold text-[#FF0000] '>Reject</button>
                                    </div>
                                </div>
                                <p className='text-xs text-[#7A7E9E] mb-5 '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. <span className='font-extrabold text-[#FF3D3D] '>Contact me on whatsapp.</span>
                                </p>
                                <p className='text-xs text-[#7A7E9E] mb-4 '>
                                    12:15 pm • August 16
                                </p>
                            </div>
                        </div>
                        <div className='overflow-hidden w-full xl:w-[385px]'>
                            <h2 className="text-2xl  font-bold text-primary ">Web Designer</h2>
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
                                <div className="h-[100px] flex flex-col justify-center px-6 mb-2 border-[1px] border-[#E8EBF3] rounded-[10px] bg-white">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center pr-2">
                                            <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                            <div>
                                                <h3 className='text-base font-poppins text-[#2B3674]'>Kathryn Murphy</h3>
                                                <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Medical Assistant</p>
                                            </div>
                                        </div>
                                        <p className='text-[#7A7E9E] text-xs font-normal'>Rejected</p>
                                    </div>
                                    <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="h-[100px] flex flex-col justify-center px-6 mb-2 border-[1px] border-[#E8EBF3] rounded-[10px] bg-white">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center pr-2">
                                            <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                            <div>
                                                <h3 className='text-base font-poppins text-[#2B3674]'>Wade Warren</h3>
                                                <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Web Designer</p>
                                            </div>
                                        </div>
                                        <p className='text-[#7A7E9E] text-xs font-normal'>Rejected</p>
                                    </div>
                                    <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="h-[100px] flex flex-col justify-center px-6 mb-2 border-[1px] border-[#E8EBF3] rounded-[10px] bg-white">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center pr-2">
                                            <Image src={manImg} className='w-[37px] h-[37px] rounded-full object-cover mr-4' />
                                            <div>
                                                <h3 className='text-base font-poppins text-[#2B3674]'>Marvin McKinney</h3>
                                                <p className='font-poppins text-xs font-normal text-[#7A7E9E]'>Nursing Assistant</p>
                                            </div>
                                        </div>
                                        <p className='text-[#7A7E9E] text-xs font-normal'>Approved</p>
                                    </div>
                                    <p className='text-xs text-[#7A7E9E] font-normal'>Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="h-[100px] flex flex-col justify-center px-6 border-[1px] border-[#E8EBF3] rounded-[10px] bg-white">
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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Fraud
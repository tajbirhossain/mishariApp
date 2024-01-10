'use client';
import { addDays, format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { DM_Sans } from 'next/font/google';
import CardImage1 from '/public/image/image1.png';
import CardValue from '@/components/Card'
import SpeciesComponent from '@/components/ex'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import dataSVG from '/public/icon/down.svg';
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
import { Calendar as CalendarIcon, MoreHorizontal, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Success from '/public/icon/success.png';
import Cancel from '/public/icon/cancel.png';

const dmsans = DM_Sans({ subsets: ['latin'] });

export default function Home() {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const [love, setLove] = useState(false);
  const array = [1, 2, 3, 4, 5, 6];
  const [arraydata, setArrayData] = useState(0)
  console.log(arraydata);
  return (
    <>
      <section className="my-8 px-4 ">
        <div className="flex justify-start gap-4 m-3">
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

        <div
          className={cn(
            'grid grid-cols-1 gap-1 lg:grid-cols-2 mt-12 gap-x-8 px-5',
            dmsans.className
          )}
        >
          <div className="bg-white border-thard border-[1px] rounded-xl order-2 lg:order-1">
            <div className="p-3 flex gap-x-4">
              <h2 className="text-2xl  font-bold text-primary ">Gigs</h2>
              <Button
                variant={('outline', 'sm')}
                className=" bg-gray-50 border-none"
              >
                <MoreHorizontal absoluteStrokeWidth className="text-primary" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-7">
              <Card className="border-2 border-primary bg-primaryCard h-[100%]">
                <div className="p-5 relative ">
                  <Image
                    src={CardImage1}
                    alt="CardImage1"
                    className="w-full rounded-lg object-cover"
                  />

                  <div
                    className=" bg-white rounded-full p-2 absolute right-7 top-7 flex items-center justify-center cursor-pointer"
                    onClick={() => setLove(pre => !pre)} >
                    {love ? (
                      <Heart absoluteStrokeWidth className="text-blue-800 w-4 h-4" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                        fill="#1e40af"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                      </svg>
                    )}
                  </div>
                </div>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-primary font-semibold">
                        Swipe Circles
                      </h4>
                      <p className="text-sm">By Peter Will</p>
                      <Button className="rounded-full mt-4">See More</Button>
                    </div>
                    <Avatar className=" w-[30px] h-[30px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[1px] border-[#A3AED0]  h-[100%]">
                <div className="p-5 relative ">
                  <Image
                    src={CardImage1}
                    alt="CardImage1"
                    className="w-full rounded-lg object-cover"
                  />

                  <div
                    className=" bg-white rounded-full p-2 absolute right-7 top-7 flex items-center justify-center cursor-pointer"
                    onClick={() => setLove(pre => !pre)} >
                    {love ? (
                      <Heart absoluteStrokeWidth className="text-blue-800 w-4 h-4" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                        fill="#1e40af"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                      </svg>
                    )}
                  </div>
                </div>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-primary font-semibold">
                        Swipe Circles
                      </h4>
                      <p className="text-sm">By Peter Will</p>
                    </div>
                    <Avatar className=" w-[30px] h-[30px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex justify-between">
                    <Button className="rounded-full mt-4">See More</Button>
                    <div className="flex justify-evenly gap-x-2">
                      <Button
                        variant={'outline'}
                        className="rounded-full mt-4 border-none hover:bg-none hover:text-accent-none p-0"
                      >
                        <Image src={Success} alt="success" />
                      </Button>
                      <Button
                        variant={'outline'}
                        className="rounded-full mt-4 border-none hover:bg-none hover:text-accent-none p-0"
                      >
                        <Image src={Cancel} alt="success" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-[1px] border-[#A3AED0]  h-[100%]">
                <div className="p-5 relative ">
                  <Image
                    src={CardImage1}
                    alt="CardImage1"
                    className="w-full rounded-lg object-cover"
                  />

                  <div
                    className=" bg-white rounded-full p-2 absolute right-7 top-7 flex items-center justify-center cursor-pointer"
                    onClick={() => setLove(pre => !pre)} >
                    {love ? (
                      <Heart absoluteStrokeWidth className="text-blue-800 w-4 h-4" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                        fill="#1e40af"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                      </svg>
                    )}
                  </div>
                </div>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-primary font-semibold">
                        Swipe Circles
                      </h4>
                      <p className="text-sm">By Peter Will</p>
                    </div>
                    <Avatar className=" w-[30px] h-[30px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex justify-between">
                    <Button className="rounded-full mt-4">See More</Button>
                    <div className="flex justify-evenly gap-x-2">
                      <Button
                        variant={'outline'}
                        className="rounded-full mt-4 border-none hover:bg-none hover:text-accent-none p-0"
                      >
                        <Image src={Success} alt="success" />
                      </Button>
                      <Button
                        variant={'outline'}
                        className="rounded-full mt-4 border-none hover:bg-none hover:text-accent-none p-0"
                      >
                        <Image src={Cancel} alt="success" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-[1px] border-[#A3AED0]  h-[100%]">
                <div className="p-5 relative ">
                  <Image
                    src={CardImage1}
                    alt="CardImage1"
                    className="w-full rounded-lg object-cover"
                  />

                  <div
                    className=" bg-white rounded-full p-2 absolute right-7 top-7 flex items-center justify-center cursor-pointer"
                    onClick={() => setLove(pre => !pre)} >
                    {love ? (
                      <Heart absoluteStrokeWidth className="text-blue-800 w-4 h-4" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                        fill="#1e40af"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                      </svg>
                    )}
                  </div>
                </div>
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-primary font-semibold">
                        Swipe Circles
                      </h4>
                      <p className="text-sm">By Peter Will</p>
                    </div>
                    <Avatar className=" w-[30px] h-[30px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex justify-between">
                    <Button className="rounded-full mt-4">See More</Button>
                    <div className="flex justify-evenly gap-x-2">
                      <Button
                        variant={'outline'}
                        className="rounded-full mt-4 border-none hover:bg-none hover:text-accent-none p-0"
                      >
                        <Image src={Success} alt="success" />
                      </Button>
                      <Button
                        variant={'outline'}
                        className="rounded-full mt-4 border-none hover:bg-none hover:text-accent-none p-0"
                      >
                        <Image src={Cancel} alt="success" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="border-[1px] border-thard rounded-lg order-1 lg:order-1 lg:mb-0 mb-6 p-10">
            <h2 className="text-2xl  font-bold text-primary ">Designer</h2>
            <div className="flex justify-between mt-4 flex-col xl:flex-row ">
              <div className="flex gap-x-4 items-center xl:mb-0 mb-4">
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
              <div className="flex gap-x-2 ">
                <Button variant={'outline'} className="bg-green-100 text-green-500 font-bold border-0" >
                  Approve
                </Button>
                <Button variant={'outline'} className="bg-red-100 text-red-500 font-bold border-0" >
                  Rejact
                </Button>
              </div>
            </div>
            <div className="block p-5 mt-5">
              <div className=" relative ">
                <Image
                  src={CardImage1}
                  alt="CardImage1"
                  className="w-[100%] rounded-lg h-[250px] object-cover"
                />

                <div
                  className=" bg-white rounded-full p-3 absolute right-7 top-7 flex items-center justify-center cursor-pointer"
                  onClick={() => setLove(pre => !pre)}
                >
                  {love ? (
                    <Heart absoluteStrokeWidth className=" text-blue-800 w-5 h-5" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      fill="#1e40af"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                  )}
                </div>
              </div>
              <div>
                <p className="font-semibold text-1xl text-primary mt-4">
                  Description
                </p>
                <p className="font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium optio doloribus unde voluptatibus, odio quae?
                </p>
              </div>
              <div className="flex gap-x-4 mt-5 justify-center">
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
              <div className="flex gap-x-2 mt-5 justify-end ">
                <Button
                  variant={'outline'}
                  className="bg-blue-100 text-blue-500 font-bold border-0"
                >
                  Edit Gig
                </Button>
                <Button
                  variant={'outline'}
                  className="bg-red-100 text-red-500 font-bold border-0"
                >
                  Delete Gig
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Anaothers Part */}
        {/* <Image
          src={dataSVG}
          alt=""
          style={{ fill: 'blue !important' }}
          className="my-20 text-red-100 w-[50px] h-[20px]"
        />
        <SpeciesComponent /> */}
      </section>
    </>
  );
}

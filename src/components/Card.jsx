import React from 'react'
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CardImage1 from '/public/image/image1.png';
function CardValue() {
    const [love, setLove] = useState(false);
  return (
    <Card className="border-2 border-primary bg-primaryCard h-[100%]">
      <div className="p-5 relative ">
        <Image src={CardImage1} alt="CardImage1" className="w-100 rounded-lg" />

        <div
          className=" bg-white rounded-full p-1 absolute right-7 top-7 flex items-center justify-center cursor-pointer"
          onClick={() => setLove(pre => !pre)}
        >
          {love ? (
            <Heart absoluteStrokeWidth className=" text-blue-800" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="23"
              width="23"
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
            <h4 className="text-primary font-semibold">Swipe Circles</h4>
            <p className="text-sm">By Peter Will</p>
            <Button className="rounded-full mt-4">See More</Button>
          </div>
          <Avatar className=" w-[30px] h-[30px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SG</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardValue;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { linkedin } from '@/utils';
import { TestimonialCardProps } from '@/constants';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ profilePic, name, position, testimonial, linkedinUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-md  flex flex-col justify-between space-y-4 max-w-xs md:max-w-sm md:w-full mx-auto p-4 h-full">
      <div className='flex items-center'>
        <p className=" text-black-Textsecondary text-sm md:text-lg font-Plus-jakarta font-normal text-left p-4 ">{testimonial}</p>
      </div>

      <div className="flex flex-row items-center justify-between bg-[#d9d9d9] rounded-xl px-2 py-1 sm:px-4 sm:py-2  ">
        <div className='flex items-center space-x-2'>
          <Image src={profilePic} alt={`${name} profile picture`} width={43} height={43} className="rounded-full" priority />

          <div className='flex flex-col flex-grow space-y-[2px] items-start'>
            <span className="font-semibold text-black-Textsecondary text-md">{name}</span>
            <span className="text-black-Textsecondary text-sm font-normal">{position}</span>
          </div>
        </div>

        <Link href={linkedinUrl} target="_blank">
          <Image src={linkedin} alt="LinkedIn Icon" width={24} height={24} priority />
        </Link>
      </div>
    </div>
  );
};




export default TestimonialCard;

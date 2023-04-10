// Copyright (c) 2023 MTG Group. All rights reserved.

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { config } from '@constants/config';

export function LogoWithTitle() {
  return (
    <div className='flex lg:flex-1'>
      <Link href='/' className='-m-1.5 p-1.5'>
        <div className='flex items-center'>
          <div>
            <Image className='h-30 w-auto' src='/logo.jpg' alt='' width={50} height={50} />
          </div>
          <div className='pl-4 flex flex-col'>
            <span className='text-2xl uppercase font-medium text-green-800' style={{ letterSpacing: '0.2rem' }}>
              {config.name}
            </span>
            <p className='text-orange-300'>{config.caption}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

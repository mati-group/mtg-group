// Copyright (c) 2023 MTG Group. All rights reserved.

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { config } from '@constants/config';

export function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <div className='flex items-center'>
        <div>
          <Image className='h-30 w-auto' src='/logo.jpg' alt='' width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

// Copyright (c) 2023 MTG Group. All rights reserved.

import { Logo } from './logo';

export function Footer() {
  return (
    <div className='relative isolate z-10' style={{ backgroundColor: '#343352' }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div>
          <Logo />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

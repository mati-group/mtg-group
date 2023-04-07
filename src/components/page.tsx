// Copyright (c) 2023 MTG Group. All rights reserved.

import { ReactElement } from 'react';

export const Page = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return <main className='mx-auto flex flex-col max-w-7xl p-6 lg:px-8'>{children}</main>;
};

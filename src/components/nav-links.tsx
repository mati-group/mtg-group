// Copyright (c) 2023 MTG Group. All rights reserved.

import { navLinks } from '@constants/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLinks({ view = 'desktop' }: { view?: 'desktop' | 'mobile' }) {
  const pathname = usePathname();

  const classes = 'text-sm font-semibold leading-6 text-green-100 hover:text-green-200';
  const mobileClasses = '-mx-3 block rounded-lg px-3 py-2 text-base leading-7';
  const activeClasses = 'text-orange-400';

  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={` ${classes} ${view === 'mobile' ? ` ${mobileClasses}` : ''} ${
              link.path === pathname ? activeClasses : ''
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

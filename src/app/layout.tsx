// Copyright (c) 2023 MTG Group. All rights reserved.

import './globals.css';

import { Footer } from '@components/footer';
import { Header } from '@components/header';
import localFont from 'next/font/local';

const geomanist = localFont({
  src: [
    {
      path: '../assets/fonts/geomanist-thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-thin-italic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-extralight-italic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-light-italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-medium-italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-book.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-book-italic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-black-italic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../assets/fonts/geomanist-ultra.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/geomanist-ultra-italic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const metadata = {
  title: 'MaTi Group',
  description: 'Information about the MTG Group',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={geomanist.className}>
      <body className='min-h-full'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

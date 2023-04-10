// Copyright (c) 2023 MTG Group. All rights reserved.

export function Footer() {
  return (
    <footer className='container mx-auto px-4'>
      <div className='flex items-center justify-center text-sm font-thin'>
        &copy; {new Date().getFullYear()} MaTi Group. All rights reserved.
      </div>
    </footer>
  );
}

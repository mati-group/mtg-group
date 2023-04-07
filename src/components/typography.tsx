// Copyright (c) 2023 MTG Group. All rights reserved.

const headingClasses = {
  1: 'font-black leading-10 tracking-tight text-gray-600 text-6xl',
  2: 'font-extrabold leading-9 tracking-tight text-gray-600 text-5xl',
  3: 'font-extrabold leading-8 tracking-tight text-gray-600 text-4xl',
  4: 'font-extrabold leading-7 tracking-tight text-gray-600 text-3xl',
  5: 'font-bold leading-6 tracking-tight text-gray-600 text-2xl',
  6: 'font-bold leading-6 tracking-tight text-gray-600 text-xl',
};

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }: { level: number; as?: any }) => (
  <Component className={headingClasses[level as keyof typeof headingClasses]} {...props} />
);

export const Heading = ({ level = 1, ...props }) => <HeadingBase level={level} {...props} />;

export const Paragraph = ({ ...props }) => <p className='text-gray-600' {...props} />;

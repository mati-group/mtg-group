// Copyright (c) 2023 MTG Group. All rights reserved.

const headingClasses = {
  1: 'font-black leading-10 tracking-wider text-gray-600 text-6xl',
  2: 'font-bold leading-9 tracking-wider text-gray-600 text-5xl',
  3: 'font-bold leading-8 tracking-wider text-gray-600 text-4xl',
  4: 'font-bold leading-7 tracking-wider text-gray-600 text-3xl',
  5: 'font-book leading-6 tracking-wide text-gray-600 text-2xl',
  6: 'font-book leading-6 tracking-wide text-gray-600 text-xl',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeadingBase = ({ level, as: Component = `h${level}`, ...props }: { level: number; as?: any }) => (
  <Component className={headingClasses[level as keyof typeof headingClasses]} {...props} />
);

export const Heading = ({ level = 1, ...props }) => <HeadingBase level={level} {...props} />;

export const Paragraph = ({ ...props }) => <p {...props} />;

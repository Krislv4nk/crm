import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export interface DashBoardButtonProms {
  current?: boolean;
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function DashBoardButton({
  current,
    pathname,
   src,
  alt,
  children,
}:  DashBoardButtonProms) {
  return (
    <li>
      <Link
  href={pathname}
  className={clsx(
    'flex items-center justify-center h-10 px-4 mx-1 gap-3.5 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600 transition-colors duration-200',
    current &&
      'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm'
  )}
>
  <span className="font-medium text-lg">{children}</span>
</Link>

    </li>
  );
}
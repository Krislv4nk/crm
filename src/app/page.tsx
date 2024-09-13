"use client";

import Image from 'next/image';
import DashBoardButton from './components/dash-board-button';
import { usePathname, useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickEnter = () => {
    router.push('/');
  };

  return (
    <main className="bg-purple-200">
      <h1 className="text-xl flex items-center justify-center">Home page</h1>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image width={995} height={762} src="/images/world.svg" alt="world" />
        <DashBoardButton
          current={pathname === '/home'}
          pathname="/dashboard"
          src="/icons/squares.svg"
          alt="dashboard icon"
        >
         Go to  Dashboard
        </DashBoardButton>
      </div>
    </main>
  );
}


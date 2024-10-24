'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSignIn = pathname === '/sign-in';
  return (
    <main className='dark:bg-neutral-900 bg-neutral-100 h-screen'>
      <div className='mx-auto max-w-screen-2xl p-4'>
        <nav className='flex justify-between items-center'>
          <Image src='/images/icon.png' alt='Logo' width={50} height={50} />
          <div className='flex gap-4 items-center'>
            <Button asChild variant='secondary'>
              <Link href={isSignIn ? '/sign-up' : '/sign-in'}>
                {isSignIn ? 'Sign up' : 'Login'}
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </nav>
        <div className='flex flex-col items-center justify-center pt-4 md:pt-14'>
          {children}
        </div>
      </div>
    </main>
  );
}

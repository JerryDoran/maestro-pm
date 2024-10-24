import DottedSeparator from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function SignInCard() {
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Welcome back!</CardTitle>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator color='#4d4d4e' />
      </div>
      <CardContent className='p-7'>
        <form className='space-y-4'>
          <Input
            required
            type='email'
            value={''}
            onChange={() => {}}
            placeholder='Enter email address'
            disabled={false}
          />
          <Input
            required
            type='password'
            value={''}
            onChange={() => {}}
            placeholder='Enter password'
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size='lg' className='w-full'>
            Login
          </Button>
        </form>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator color='#4d4d4e' />
      </div>
      <CardContent className='p-7 flex flex-col gap-y-4'>
        <Button
          variant='secondary'
          size='lg'
          className='w-full flex gap-2'
          disabled={false}
        >
          <FcGoogle className='size-6' />
          Login with Google
        </Button>
        <Button
          variant='secondary'
          size='lg'
          className='w-full flex gap-2'
          disabled={false}
        >
          <FaGithub className='size-6' />
          Login with Github
        </Button>
      </CardContent>
    </Card>
  );
}

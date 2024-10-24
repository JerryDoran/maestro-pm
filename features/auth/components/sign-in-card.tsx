import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

import DottedSeparator from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

export default function SignInCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ values });
  }

  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Welcome back!</CardTitle>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator color='#4d4d4e' />
      </div>
      <CardContent className='p-7'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter email address'
                      {...field} // prevents having to pass form properties manually when spreading the field prop
                    />
                  </FormControl>
                  <FormMessage className='text-orange-500' />
                </FormItem>
              )}
            />
            <FormField
              name='password'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter password'
                      {...field} // prevents having to pass form properties manually when spreading the field prop
                    />
                  </FormControl>
                  <FormMessage className='text-orange-500' />
                </FormItem>
              )}
            />

            <Button disabled={false} size='lg' className='w-full'>
              Login
            </Button>
          </form>
        </Form>
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
      <div className='px-7'>
        <DottedSeparator color='#4d4d4e' />
      </div>
      <CardContent className='p-7 flex items-center justify-center'>
        <p className='text-sm'>
          Don&apos; have an account?
          <Link href='/sign-up'>
            <span className='text-blue-600'> Sign up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import DottedSeparator from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function SignUpCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
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
        <CardTitle className='text-2xl'>Sign Up</CardTitle>
        <CardDescription>
          By signing up, you agree to our{' '}
          <Link href='/privacy'>
            <span className='text-blue-600'>Privacy Policy</span>
          </Link>{' '}
          and{' '}
          <Link href='/terms'>
            <span className='text-blue-600'>Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator color='#4d4d4e' />
      </div>
      <CardContent className='p-7'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Enter your name'
                      {...field} // prevents having to pass form properties manually when spreading the field prop
                    />
                  </FormControl>
                  <FormMessage className='text-orange-500' />
                </FormItem>
              )}
            />
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
              Sign up
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
          Sign up with Google
        </Button>
        <Button
          variant='secondary'
          size='lg'
          className='w-full flex gap-2'
          disabled={false}
        >
          <FaGithub className='size-6' />
          Sign up with Github
        </Button>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator color='#4d4d4e' />
      </div>
      <CardContent className='p-7 flex items-center justify-center'>
        <p className='text-sm'>
          Already have an account?
          <Link href='/sign-in'>
            <span className='text-blue-600'> Sign in</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

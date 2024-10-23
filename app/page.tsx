import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Input />
      <Button size='lg'>Primary123</Button>
      <Button variant='secondary' size='lg'>
        Secondary
      </Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='muted'>Muted</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='teritary'>Teritrary</Button>
    </div>
  );
}

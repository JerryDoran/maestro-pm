import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex gap-4'>
      <Button size='lg'>Primary</Button>
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

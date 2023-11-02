import Hero from './components/hero/Hero';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-light  dark:bg-primary'>
      <Hero />
    </main>
  );
}

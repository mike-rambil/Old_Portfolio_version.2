'use client';

import { useEffect, useState } from 'react';
import { NEW_SITE } from '../utils/site';

const EXCUSES = [
  'resolving peer dependencies with 2024 Micheal…',
  'node_modules is 4GB, please hold…',
  'rebasing feelings onto main…',
  'clearing cache (and conscience)…',
  'asking the hamster in the server to run faster…',
  'have you tried the new site?',
];

const EXCUSE_MS = 2200;
const REDIRECT_SECONDS = 3;

type Phase = 'idle' | 'installing' | 'stalled' | 'redirecting';

export default function StayOnV2() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState(0);
  const [excuse, setExcuse] = useState(0);
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  // Race to 99% in a confident, misleading way.
  useEffect(() => {
    if (phase !== 'installing') return;
    const id = setInterval(
      () => setProgress((p) => Math.min(99, p + Math.ceil(Math.random() * 6))),
      80
    );
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === 'installing' && progress >= 99) setPhase('stalled');
  }, [phase, progress]);

  // Stall at 99% and make excuses until we run out of them.
  useEffect(() => {
    if (phase !== 'stalled') return;
    const outOfExcuses = excuse >= EXCUSES.length - 1;
    const t = setTimeout(
      () => (outOfExcuses ? setPhase('redirecting') : setExcuse((e) => e + 1)),
      EXCUSE_MS
    );
    return () => clearTimeout(t);
  }, [phase, excuse]);

  // Give up and send them to the new site anyway.
  useEffect(() => {
    if (phase !== 'redirecting') return;
    if (countdown <= 0) {
      window.location.assign(NEW_SITE);
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  function stayOnV2() {
    setProgress(0);
    setExcuse(0);
    setCountdown(REDIRECT_SECONDS);
    setPhase('installing');
  }

  const status = {
    idle: '',
    installing: `Installing micheal@2.0.0… ${progress}%`,
    stalled: `99% · ${EXCUSES[excuse]}`,
    redirecting: `Build failed: v2 is retired. Sending you to v3 in ${countdown}…`,
  }[phase];

  return (
    <section className='max-[320px]:w-[275px] w-full max-w-lg md:max-w-2xl mx-auto mt-14 mb-24 text-center'>
      <p className='text-sm text-black dark:text-white'>
        You found <span className='font-bold'>Micheal v2.0</span>, lovingly
        retired.
      </p>
      <p className='text-xs mt-2 text-black/70 dark:text-gray-500'>
        The projects, the blog and the better jokes moved to v3.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
        <a href={NEW_SITE} className='button'>
          Take me to v3 &gt;
        </a>
        <button
          onClick={stayOnV2}
          disabled={phase !== 'idle'}
          className='text-xs underline underline-offset-4 text-black/70 dark:text-gray-500 hover:text-black dark:hover:text-main disabled:no-underline disabled:cursor-wait'
        >
          No thanks, stay on v2
        </button>
      </div>

      {phase !== 'idle' && (
        <div className='mt-8 mx-auto max-w-md text-left'>
          <div
            role='progressbar'
            aria-label='Staying on v2'
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={phase === 'redirecting' ? 100 : progress}
            className='h-3 w-full rounded-sm bg-light-secondary/20 dark:bg-neutral1 overflow-hidden shadow-inner shadow-black/40'
          >
            <div
              className={`h-full motion-safe:transition-[width] duration-100 ${
                phase === 'redirecting'
                  ? 'bg-accent'
                  : 'bg-light-secondary-900 dark:bg-main'
              } ${phase === 'stalled' ? 'motion-safe:animate-pulse' : ''}`}
              style={{ width: `${phase === 'redirecting' ? 100 : progress}%` }}
            />
          </div>
          <p
            aria-live='polite'
            className='mt-3 min-h-[2.5rem] text-xs text-black dark:text-secondary'
          >
            <span className='text-light-secondary dark:text-main'>$ </span>
            {status}
          </p>
        </div>
      )}
    </section>
  );
}

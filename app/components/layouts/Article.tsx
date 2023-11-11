import { m } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <m.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      // style={{ position: 'relative' }}
    >
      {children}
    </m.article>
  );
}

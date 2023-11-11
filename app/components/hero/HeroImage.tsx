import { m } from 'framer-motion';
import Image from 'next/image';
import hero from '/public/images/hero.svg';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function HeroImage() {
  return (
    <>
      <m.div initial='hidden' animate='enter' exit='exit' variants={variants}>
        <Image
          alt="Micheal Palliparambil's Picture"
          src={hero}
          width={250}
          height={226}
          priority
        />
      </m.div>
    </>
  );
}

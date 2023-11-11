import Image from 'next/image';
import hero from '/public/images/hero.svg';

export default function HeroImage() {
  return (
    <>
      <Image
        alt="Micheal Palliparambil's Picture"
        src={hero}
        width={250}
        height={226}
        priority
      />
    </>
  );
}

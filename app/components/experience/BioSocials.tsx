import Skills from './Skills';

export default function BioSocials() {
  return (
    <>
      <article className='max-w-xl'>
        <section>
          <h2 className='portfolio-h2 '>Getting to know me</h2>
          <p className='portfolio-paragraph'>
            I am a problem solver able to break down complex issues and deliver
            efficient solutions. I am constantly learning and keeping up with
            the latest technologies and best practices in web development and
            DevOps.
          </p>
          <p className='portfolio-paragraph'>
            I thrive in fast-paced environments where I can utilize my skills to
            build robust and scalable applications. I am seeking new
            opportunities where I can contribute my technical abilities and
            passion for problem-solving.
          </p>
        </section>
        <section>
          <h2 className='portfolio-h2'>I ♥</h2>
          <p className='portfolio-paragraph'>
            I ♥ flying, playing guitar, programming, machine learning, reading
            and complaining about how tough life is!
          </p>
        </section>
        <Skills />
      </article>
    </>
  );
}

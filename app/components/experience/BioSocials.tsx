import Skills from './Skills';

export default function BioSocials() {
  return (
    <>
      <article className='max-w-xl'>
        <section>
          <h2 className='portfolio-h2'>Getting to know me</h2>
          <p className='portfolio-paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            aspernatur aperiam sit nesciunt reiciendis molestiae? Reprehenderit
            repudiandae, perspiciatis velit beatae dolorum minus a voluptatem
            ipsam aut sequi nesciunt? Minima, amet? Vitae suscipit dolorum quas
            temporibus odit velit, excepturi labore nemo nam et ut, assumenda
            harum. Et harum mollitia sit impedit velit. Ullam illum earum,
            voluptatem debitis at quae nemo modi! Illum corrupti voluptatibus
            architecto fugiat ipsum esse rem accusamus dolor, cum optio laborum,
            odit totam corporis assumenda veniam laudantium commodi cumque
            inventore nesciunt ea pariatur! officiis.
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

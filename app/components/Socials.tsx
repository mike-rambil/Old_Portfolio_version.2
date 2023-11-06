export default function Socials() {
  return (
    <>
      <a
        className='text-black'
        rel='noopener'
        target='_blank'
        href='https://github.com/mike-rambil'
      >
        {/* @ts-ignore */}
        <box-icon
          border='square'
          type='logo'
          name='github'
          size='md'
          animation='tada-hover'
          /* @ts-ignore */
        ></box-icon>
      </a>

      <a
        href='https://www.linkedin.com/in/mike-rambil?trk=profile-badge'
        target='_blank'
        className='text-black'
        rel='noopener'
      >
        {/* @ts-ignore */}
        <box-icon
          border='square'
          type='logo'
          name='linkedin-square'
          size='md'
          animation='tada-hover'
          /* @ts-ignore */
        ></box-icon>
      </a>
      <a
        className='text-black'
        rel='noopener'
        target='_blank'
        href='https://instagram.com/three_miles_out?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr'
      >
        {/* @ts-ignore */}
        <box-icon
          border='square'
          type='logo'
          name='instagram'
          size='md'
          animation='tada-hover'
          /* @ts-ignore */
        ></box-icon>
      </a>
      <a
        className='text-black'
        rel='noopener'
        target='_blank'
        href='mailto:mikerambil@gmail.com'
      >
        {/* @ts-ignore */}
        <box-icon
          border='square'
          type='logo'
          name='gmail'
          size='md'
          animation='tada-hover'
          /* @ts-ignore */
        ></box-icon>
      </a>
    </>
  );
}

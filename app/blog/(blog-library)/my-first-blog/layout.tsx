export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className='min-w-full w-full flex flex-col  mx-auto mt-14 h-screen bg-light text-black dark:bg-neutral1 -translate-y-14'>
      <div
        style={{ padding: '19px' }}
        className='max-w-4xl w-full flex flex-col  mx-auto mt-14 h-screen'
      >
        {children}
      </div>
    </div>
  );
}

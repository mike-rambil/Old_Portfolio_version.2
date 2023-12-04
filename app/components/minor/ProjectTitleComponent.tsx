export default function ProjectTitleComponent({
  index,
  project,
}: {
  index: number;
  project: any;
}) {
  return (
    <>
      <h3
        key={index}
        className='bg-[#405a4d] dark:bg-[#34403a]  px-1 py-2 rounded-sm max-w-[400px] mx-auto dark:text-white mt-4 mb-2 text-sm flex'
      >
        <div className=' mx-auto text-teal-400 font-extrabold'>
          {project?.name}
        </div>
        <div>
          {project.images?.length ? (
            <div className='bg-blue-700 text-blue-300 px-1 rounded-full font-bold  text-[10px]'>
              {project?.platform}
            </div>
          ) : (
            <div className='bg-neutral dark:bg-main  px-1 rounded-full text-teal-500 dark:text-black font-bold  text-[10px]'>
              {project?.platform}
            </div>
          )}
        </div>
      </h3>
    </>
  );
}

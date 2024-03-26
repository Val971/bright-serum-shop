export default function Hero() {
  const test = () => {
    console.log('test');
  };
  return (
    <div className='bg-lightPink md:h-screen flex flex-col-reverse md:flex-row px-8 md:px-20 justify-center gap-10 items-center py-20'>
      <div className='flex flex-col gap-8 w-full md:w-auto  '>
        <div className=' flex flex-col'>
          <h1 className='text-4xl md:text-6xl'>Your </h1>
          <h1 className='text-4xl md:text-6xl'> beautiful </h1>
          <h1 className='text-4xl md:text-6xl'> morning</h1>
        </div>
        <p className='w-60 md:text-md'>
          Perfect your skin care routine with our body and facial products.
        </p>
        <div className='flex flex-col md:flex-row gap-5'>
          <button
            onClick={() => test()}
            className='bg-black p-3 min-w-[9rem] text-[#fff]'>
            Shop Now
          </button>
          <button className=' border-black border-2 p-2.5 min-w-[12rem]'>
            Ask Us Anything
          </button>
        </div>
      </div>
      <div>
        <img
          alt='hero image'
          className='w-[45rem]'
          // width='550'
          // height='550'
          src={`src/assets/HeroImg.png`}
        />
      </div>
    </div>
  );
}

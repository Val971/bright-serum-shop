export default function Hero() {
  return (
    <div className='bg-lightPink h-screen flex flex-col-reverse md:flex-row px-8 md:px-20 justify-center gap-10 items-center'>
      <div className='flex flex-col gap-8 w-full md:w-auto'>
        <div className=' flex flex-col'>
          <h1 className='text-5xl'>Your </h1>
          <h1 className='text-5xl'> beautiful </h1>
          <h1 className='text-5xl'> morning</h1>
        </div>
        <p className='w-60'>
          Perfect your skin care routine with our body and facial products.
        </p>
        <div className='flex flex-col md:flex-row gap-5'>
          <button className='bg-black p-3 min-w-[9rem] text-[#fff]'>
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
          width='550'
          height='550'
          src={`src/assets/HeroImg.png`}
        />
      </div>
    </div>
  );
}

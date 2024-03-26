export default function Featured() {
  return (
    <div className='bg-lightPink px-8 flex flex-col gap-16 py-20 items-center'>
      <h2 className=' text-3xl md:text-4xl'>Featured Products</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-20 '>
        <div className='flex flex-col items-center'>
          <img
            className='mb-5'
            alt='article 1'
            src={`src/assets/featured1.png`}
          />
          <p className='text-lg'>Serum Nº 1</p>
          <p className='text-lg'>$44.95</p>
        </div>
        <div className='flex flex-col items-center'>
          <img
            className='mb-5'
            alt='article 1'
            src={`src/assets/featured2.png`}
          />
          <p>Serum Nº 1</p>
          <p>$44.95</p>
        </div>
        <div className='flex flex-col items-center'>
          <img
            className='mb-5'
            alt='article 1'
            src={`src/assets/featured3.png`}
          />
          <p>Serum Nº 1</p>
          <p>$44.95</p>
        </div>
      </div>
    </div>
  );
}

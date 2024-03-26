export default function Banner() {
  return (
    <div className="bg-[url('src/assets/landingBg.png')] text-[#fff] bg-fixed bg-no-repeat flex flex-col px-8 justify-center gap-5 items-center py-20">
      <h2 className=' text-3xl md:text-4xl'> Explore Our Catalog</h2>
      <p>Find the best product for your face and body</p>
      <button className='bg-[#fff] p-3 min-w-[9rem] text-black'>
        Discover
      </button>
    </div>
  );
}

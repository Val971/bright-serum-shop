export default function ChooseUs() {
  return (
    <div className='bg-[#FCF9F8]  flex flex-col md:flex-row px-8 justify-center gap-20 items-center py-20'>
      <img
        alt='product img'
        width='450'
        height='450'
        src='src/assets/newProdutImg.png'
      />
      <div className='max-w-[25rem]'>
        <h2 className=' text-3xl md:text-4xl'>Why to choose our product</h2>
        <br />
        <p>
          Your skin is sensitive to air pollution, sun, stress, and many other
          things you are not in control of. We are here to help you win this
          battle for glorious skin.
        </p>
        <br />
        <p>
          Natice is a Holy Grail that your skin has been looking for, full of
          natural ingredients and moisture-attracting buddies like hyaluronic
          acid to keep your skin looking healthy and happy.
        </p>
      </div>
    </div>
  );
}

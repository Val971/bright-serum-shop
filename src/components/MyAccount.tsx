export default function MyAccount() {
  return (
    <div className=' bg-[#F9F9F9]  md:h-screen px-8 md:px-20 py-20 flex justify-center'>
      <div className=' flex flex-col md:flex-row justify-center gap-20'>
        <div className='flex flex-col gap-5 '>
          <h2 className='font-semibold text-2xl'>Account</h2>
          <p>Homme / Store / Account</p>
          <div className='flex items-center gap-5 justify-between'>
            <img className='w-28' src='/src/assets/featured1.png' />
            <div className='flex flex-col'>
              <div className='flex justify-between w-full'>
                <p className='font-semibold text-lg'>Nactice Nº1</p>{' '}
                <img
                  alt='close icon'
                  className='w-[1rem] h-[1rem] cursor-pointer'
                  src='/src/assets/close.png'
                />
              </div>
              <p>Size: S</p>
              <div className='flex justify-between gap-28'>
                <p>Qty: 1</p> <p>$44.95</p>
              </div>
            </div>
          </div>
          <hr />
          <h3 className='font-semibold text-2xl'>Shopping cart</h3>
          <div className='flex items-center gap-5'>
            <img
              alt='product img'
              className='w-[5rem]'
              src='/src/assets/featured1.png'
            />
            <img
              alt='product img'
              className='w-[5rem]'
              src='/src/assets/featured2.png'
            />
            <div>
              <p>2 items ($464.90)</p> <span>Go to checkout</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 md:w-[40rem]'>
          <h2 className='font-semibold text-2xl '>Join us or sign in</h2>
          <p>
            Track your future orders, checkout faster, and sync your favorites.
            Just enter your email and we’ll send you a special link that will
            sign you in instantly.
          </p>
          <p>
            An account will be automatically created for you if you don’t have
            one yet.
          </p>

          <input
            className=' border-[#8faec6] text-black bg-transparent border-[1px] p-2.5 min-w-[12rem]'
            placeholder='Enter your email address'
          />
          <button className='bg-black p-3 min-w-[9rem] text-[#fff]'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

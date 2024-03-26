export default function Cart() {
  return (
    <div className=' bg-[#F9F9F9]  md:h-screen px-8 md:px-20 py-20 flex justify-center'>
      <div className=' flex flex-col md:flex-row justify-center gap-10'>
        <div className='flex flex-col gap-5 '>
          <h2 className='font-semibold text-2xl'>Shopping cart</h2>
          <p>Homme / Store / Shopping cart</p>
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
          <div className='flex items-center gap-5 justify-between'>
            <img className='w-28' src='/src/assets/featured2.png' />
            <div className='flex flex-col'>
              <div className='flex justify-between w-full'>
                <p className='font-semibold text-lg'>Nactice Nº2</p>{' '}
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
          <div className='flex justify-between items-center'>
            {' '}
            <h3 className='font-semibold text-2xl'>Total</h3>
            <p className='font-semibold'>$44.95</p>
          </div>
          <p>
            Have a promo coupon?{' '}
            <span className='text-[#1a7ac4] cursor-pointer'>
              Redeem your coupon
            </span>
          </p>
          <p>
            Looking for more?{' '}
            <span className='text-[#1a7ac4] cursor-pointer'>
              Continue shopping
            </span>
          </p>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='font-semibold text-2xl '>Checkout</h2>
          <p>
            Enter your email address. This address will be used to send you
            order status updates.
          </p>

          <input
            className=' border-[#8faec6] text-black bg-transparent border-[1px] p-2.5 min-w-[12rem]'
            placeholder='Enter your email'
          />
          <div className='flex items-center mb-4'>
            <input
              id='default-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            <label htmlFor='default-checkbox' className='ms-2 text-sm'>
              Keep me up to date on news and exclusive offers
            </label>
          </div>

          <div>
            <div className='flex flex-col md:flex-row gap-5'>
              <button className='bg-black p-3 min-w-[9rem] text-[#fff]'>
                Checkout
              </button>
              <p className='md:w-[16rem]'>
                All data is transmitted encrypted via a secure TLS connection
              </p>
            </div>
          </div>
          <h2 className='font-bold text-2xl'>Next</h2>
          <hr />
          <div className='flex flex-col'>
            <p className='font-semibold'>Payment information</p>
            <p>Choose a payment method and enter your payment details.</p>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold'>Order confirmation</p>
            <p>Place your order and receive a confirmation email.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

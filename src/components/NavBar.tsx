import { useState } from 'react';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='bg-white'>
      <nav className='flex justify-between cursor-pointer items-center w-[92%] p-4  mx-auto'>
        <div className='flex gap-20'>
          <a href='/' className='font-extrabold text-2xl'>
            Bright
          </a>

          <div
            className={`nav-links ${
              openMenu ? 'top-[9%]' : 'top-[-100%]'
            } duration-500 md:static absolute bg-[#fff] md:min-h-fit min-h-[37vh] left-0  md:w-auto  w-full flex items-center px-5`}>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
              <li>
                <a className='hover:text-gray-500' href='#'>
                  Store
                </a>
              </li>
              <li>
                <a className='hover:text-gray-500' href='#'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-500'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <img alt='icon search' src='/src/assets/search.png' />
          <a href='/account/'>
            <img alt='icon search' src='/src/assets/account.png' />
          </a>
          <a href='/shoppingCart/'>
            <img alt='icon bag' src='/src/assets/bag.png' />
          </a>
          <img
            className='text-3xl cursor-pointer md:hidden'
            onClick={() => setOpenMenu(!openMenu)}
            alt='icon menu'
            src='/src/assets/menu.png'
          />
        </div>
      </nav>
    </header>
  );
}

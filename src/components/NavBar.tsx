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
                  Products
                </a>
              </li>
              <li>
                <a className='hover:text-gray-500' href='#'>
                  About Us
                </a>
              </li>
              <li>
                <a className='hover:text-gray-500' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          {/* <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>
            Sign in
          </button> */}
          <img alt='icon search' src='/src/assets/search.png' />
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

//   <div classNameNameName={`flex justify-between items-center w-full h-20 px-4 text-white bg-[#fff] fixed nav`}>
//   <div>
//     {/* <h1 classNameNameName="text-5xl font-signature ml-2"><a classNameNameName="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
//     <h1 classNameNameName='text-4xl font-bold font-signature ml-2'>
//       <a
//         classNameNameName='link-underline link-underline-black'
//         href=''
//         target='_blank'
//         rel='noreferrer'>
//         BRIGHT
//       </a>
//     </h1>
//   </div>

//   <ul classNameNameName='hidden md:flex'>
//     <li classNameNameName='nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline'>
//       <a href='#'>Home</a>
//     </li>
//     <li classNameNameName='nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline'>
//       <a href='#'>Products</a>
//     </li>
//     <li classNameNameName='nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline'>
//       <a href='#'>About Us</a>
//     </li>
//     <li classNameNameName='nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline'>
//       <a href='#'>Contact</a>
//     </li>
//     <li classNameNameName='nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline'>
//       <a href='#'>Home</a>
//     </li>
//   </ul>

//   <div
//     onClick={() => setNav(!nav)}
//     classNameNameName='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
//     {nav ? 'Oooo' : 'ooo'}
//   </div>
//   {/* <div
//     onClick={() => setNav(!nav)}
//     classNameNameName='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
//     {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//   </div> */}

//   {nav && (
//     <ul classNameNameName='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
//       <li classNameNameName='px-4 cursor-pointer capitalize py-6 text-4xl'>
//         <a onClick={() => setNav(!nav)} href='#'>
//           Home
//         </a>
//       </li>
//       <li classNameNameName='px-4 cursor-pointer capitalize py-6 text-4xl'>
//         <a onClick={() => setNav(!nav)} href='#'>
//           Products
//         </a>
//       </li>
//       <li classNameNameName='px-4 cursor-pointer capitalize py-6 text-4xl'>
//         <a onClick={() => setNav(!nav)} href='#'>
//           About Us
//         </a>
//       </li>
//       <li classNameNameName='px-4 cursor-pointer capitalize py-6 text-4xl'>
//         <a onClick={() => setNav(!nav)} href='#'>
//           Contact
//         </a>
//       </li>
//     </ul>
//   )}
// </div>

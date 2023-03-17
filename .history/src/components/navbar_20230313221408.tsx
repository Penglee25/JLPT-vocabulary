import React from 'react'

export default function Navbar() {

  return (
    <div style={{backgroundColor: '#091c29'}} className='fixed top-0 w-screen z-20'>
            <div className="w-10/12 mx-auto py-3 flex items-center justify-between text-white font-dosis">
                
                <div className={`hidden md:block ${animate? '': 'translate-x-20 opacity-0'} transform transition duration-2500`}>
                {content.nav.links.map((link, index) => (
                    <ScrollLink to={link.to} smooth={true} key={index}>
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-red-400 anim'>{link.text}</span>
                    </ScrollLink>
                ))}
                </div>
                <div className='md:hidden -mr-1 flex'>
                    <button onClick={() => setIsOpen(!isOpen)} 
                        className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-indigo-500 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
                    >
                        {/* <span>Open Main Menu</span> */}
                        {isOpen?
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                          :
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        }
                    </button>
                </div>
            </div>
            {isOpen &&
                <NavMobile onClick={() => setIsOpen(false)} />
            }
        </div>
  )
}

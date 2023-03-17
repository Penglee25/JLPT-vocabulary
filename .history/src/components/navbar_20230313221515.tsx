import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    
const NavMobile = ({onClick}: any) => {
    const animate = useStartAnimation()

    return (
        <div className={`md:hidden flex flex-col text-white font-dosis w-11/12 mx-auto pl-2 pb-5 ${animate? '': 'translate-x-60 -translate-y-7 opacity-0'} transform transition duration-1000`}> 
            {content.nav.links.map((link, index) => (
                <ScrollLink to={link.to} smooth={true} key={index} className='px-3 py-1 cursor-pointer rounded-md hover:bg-indigo-600' onClick={onClick}>
                    <span className='font-bold text-lg'>{link.text}</span>
                </ScrollLink>
            ))}
        </div>
    )
}

  return (
    <div style={{backgroundColor: '#091c29'}} className='fixed top-0 w-screen z-20'>
            <div className="w-10/12 mx-auto py-3 flex items-center justify-between text-white font-dosis">
               
                </div>
                <div className='md:hidden -mr-1 flex'>
                    <button onClick={() => setIsOpen(!isOpen)} 
                        className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-indigo-500 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
                    >
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                          :
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                    </button>
                </div>
            </div>
            {isOpen &&
                <NavMobile onClick={() => setIsOpen(false)} />
            }
        </div>
  )
}


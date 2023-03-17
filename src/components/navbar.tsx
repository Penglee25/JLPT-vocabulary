import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navLinks } from '../utils/data';

const useStartAnimation = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    }, []);

    return animated;
}

const NavMobile = ({ onClick }: any) => {
    const animate = useStartAnimation()

    return (
        <div className={`md:hidden flex flex-col text-white font-dosis w-11/12 mx-auto pl-2 pb-5 ${animate ? '' : 'translate-x-60 -translate-y-7 opacity-0'} transform transition duration-1000`}>
            {
                navLinks.map((nav: any, i) => (
                    <Link key={i} href={nav.path} passHref>
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-white anim'>{nav.name}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const animate = useState(true)

    return (
        <div style={{ backgroundColor: '#091c29' }} className='fixed top-0 w-full z-20 px-6'>
            <div className="w-full mx-auto py-3 flex items-center justify-between text-red-300 font-dosis transform transition duration-2500 text-2xl font-bold cursor-pointer">
                <Link href={navLinks[0].path} passHref>
                    <h3> JLPT </h3>
                </Link>
                <div className={`hidden md:block ${animate ? '' : 'translate-x-20 opacity-0'} transform transition duration-2500`}>
                    {
                        navLinks.map((nav: any, i) => (
                            <Link key={i} href={nav.path} passHref>
                                <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-white anim'>{nav.name}</span>
                            </Link>
                        ))
                    }
                </div>

                <div className='md:hidden -mr-1 flex'>
                    <button onClick={() => setIsOpen(!isOpen)}
                        className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500'
                    >
                        {isOpen ?
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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


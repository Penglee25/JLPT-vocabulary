import Link from 'next/link'
import { useState } from 'react'

import { navLinks } from '../utils/data'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const animate = useState(true)


    const NavMobile = ({ onClick }: any) => {
        // const animate = useStartAnimation()

        // return (
        //     <div className={`md:hidden flex flex-col text-white font-dosis w-11/12 mx-auto pl-2 pb-5 ${animate? '': 'translate-x-60 -translate-y-7 opacity-0'} transform transition duration-1000`}> 

        //     </div>
        // )
    }

    return (
        <div style={{ backgroundColor: '#091c29' }} className='fixed top-0 w-full z-20 px-6'>
            <div className="w-full mx-auto py-3 flex items-center justify-between text-red-300 font-dosis transform transition duration-2500 text-2xl font-bold cursor-pointer">
                <h3> JLPT </h3>

                <div className={`hidden md:block ${animate ? '' : 'translate-x-20 opacity-0'} transform transition duration-2500`}>
                    {
                        nav
                    }
                    <Link href={`/levels/level1`}>
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-white anim'>N1</span>
                    </Link>
                    <Link href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-white anim'>N2</span>
                    </Link>
                    <Link href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-white anim'>N3</span>
                    </Link>
                    <Link href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-white anim'>N4</span>
                    </Link>
                    <Link href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-white anim'>N5</span>
                    </Link>
                </div>

                <div className='md:hidden -mr-1 flex'>
                </div>
            </div>


        </div>
    )
}


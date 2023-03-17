import { useState } from 'react'

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
            <div className="w-full mx-auto py-3 flex items-center justify-between text-white font-dosis transform transition duration-2500 text-2xl font-bold cursor-pointer">
                <h3> JLPT </h3>

                <div className={`hidden md:block ${animate ? '' : 'translate-x-20 opacity-0'} transform transition duration-2500`}>
                    <a href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-red-400 anim'>N1</span>
                    </a>
                    <a href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-red-400 anim'>N2</span>
                    </a>
                    <a href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-red-400 anim'>N4</span>
                    </a>
                    <a href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-red-400 anim'>N1</span>
                    </a>
                    <a href="#">
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-red-400 anim'>N1</span>
                    </a>
                </div>

                <div className='md:hidden -mr-1 flex'>
                </div>
            </div>


        </div>
    )
}


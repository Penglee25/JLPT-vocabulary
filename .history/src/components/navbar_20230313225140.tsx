import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)


    const NavMobile = ({ onClick }: any) => {
        // const animate = useStartAnimation()

        // return (
        //     <div className={`md:hidden flex flex-col text-white font-dosis w-11/12 mx-auto pl-2 pb-5 ${animate? '': 'translate-x-60 -translate-y-7 opacity-0'} transform transition duration-1000`}> 

        //     </div>
        // )
    }

    return (
        <div className='posi'>
            <div style={{ backgroundColor: '#091c29' }} className='fixed top-0 w-full z-20'>
            <div className="w-full mx-auto py-3 flex items-center justify-between text-white font-dosis">

            </div>
            <div className='md:hidden -mr-1 flex'>
            </div>
        </div>
        </div>
  )
}


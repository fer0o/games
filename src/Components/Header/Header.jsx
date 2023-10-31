import {useState} from 'react'
import {HiOutlineMagnifyingGlass, HiMoon, HiSun}from 'react-icons/hi2'
'react-icons/bs BSMoonFill'

function Header() {
  const [toogle,setToogle] = useState(true)
  return (
    <div className='flex items-center lg:p-3 px-1'>
        <img src='https://www.svgrepo.com/show/132200/ps4-wireless-game-control.svg' className='w-16 h-16'  alt='pscontroler svg'/>
        <div className='flex items-center mx-5 rounded-full p-2 w-full bg-slate-200'>
            <HiOutlineMagnifyingGlass/>
            <input type='text' placeholder='Search Games' className='px-2 bg-orange-500 text-white bg-transparent outline-none'/>
        </div>
        <div>
          {
            toogle? <HiMoon className='text-4xl bg-slate-200 p-1 rounded-full' onClick={()=> setToogle(!toogle)}/> : <HiSun className='text-4xl bg-slate-200 p-1 rounded-full' onClick={()=>setToogle(!toogle)}/>
          }
        </div>
    </div>
  )
}

export default Header
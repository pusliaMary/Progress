import {
  Link
} from 'react-router-dom'


import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

export const Navigation = () => {

    useGSAP(() => {
    gsap.to('.link', { y:50, delay: 1, duration:2, stagger:1, scale: 1.2})
    gsap.from('.link', {opacity:0, delay: 1, duration:2, stagger:1 })
  })
    
    return (
        <nav className="container"> <Link to='/' ></Link>
            <Link to='/EasyMode' className='link firstPage'>Easy Mode</Link>
            <Link to='/MediumCategory' className='link' >Medium Mode</Link>
            <Link to='/HardMode' className='link' >Hard Mode</Link>
        </nav>
    )
}
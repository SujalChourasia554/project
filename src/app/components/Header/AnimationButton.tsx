import React from 'react'
import { gsap } from 'gsap';
export default function AnimationButton() {
    gsap.from('li', {duration: 0.5, autoAlpha: 0, x: '-=200', scale: 3, stagger: 0.2})

  return (
    <div className='w-[500px]'>
        <ul className="menu2"> 
        <li><a className="">TestMe</a></li>
        </ul>
    </div>
  )
}

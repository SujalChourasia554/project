"use client"

import React, {  useRef } from 'react'
import CopyRight from './CopyRight'
import { gsap } from 'gsap'

const Footer = () => {

  const company = ["About", "Blog", "All Products", "LOcations Map", "FAQ", "Contact us"]
  const Services = ["Order tracking", "Wish List", "Login", "My Account", "Terms & Conditions", "Promotional Offers"]
  const CustomerCare = ["Login","My Account","Wish List","Order tracking","FAQ", "Contact us"]



  
  // THIS IS ANIMATION PART
  // ======================================================================================
  const LiRefC2 = useRef<(HTMLLIElement | null)[]>([]);
  const LiRefC3 = useRef<(HTMLLIElement | null)[]>([]);
  const LiRefC4 = useRef<(HTMLLIElement | null)[]>([]);

  const activateAnimation = (ref: gsap.TweenTarget) => {
    gsap.to(ref, {
      x: 19,
      duration: 0.3,
    });
  };

  const deactivateAnimation = (ref: gsap.TweenTarget) => {
    gsap.to(ref, {
      x: 0,
      duration: 0.3,
    });
  };
  // ======================================================================================



  return (
    <div>
    <div className='bg-[#171B2A] p-6 xl:pt-0 xl:px-12 text-white'>
        <div id="footer-container" className='grid grid-cols-1 w-full  custom_small:grid-cols-2 custom_screen:flex custom_screen:flex-wrap '>
            <div id='c1' className='w-full custom_screen:w-[23%] h-full font-nunito_Medium md:pr-5 ' >
            <div>
                  <div id="footer_logo">
                    <img src="/images/logo-2.png" alt="" className="mb-5 " />
                  </div>

                  <p className=" text-[0.9rem] mb-[1.5rem] leading-7 text-start text-white  md:text-[1rem]  custom_screen:text-[1rem] ">
                    Lorem ipsum dolor sit amet consec adipisicing elit.
                    Voluptas nesciunt explicabo, reprehenderit Lorem, ipsum.
                  </p>

                  <div id="dets" className="">

                    <div className=" mb-4 flex items-center justify-start md:justify-start text-[0.8rem] md:text-[1rem] custom_screen:text-[1rem] text-white ">
                      {/* THIS IS LOCATION SVG */}
                      <svg className=" text-[0.9rem] md:text-[1rem] custom_screen:text-[1rem] mr-3 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path> </svg>
                      Brooklyn, New York, United States
                    </div>

                    <div className=" mb-4 flex items-center justify-start md:justify-start  text-[0.8rem] md:text-[1rem] custom_screen:text-[1rem] text-white">
                      {/* THIS IS PHONE SVG */}
                      <svg className="text-[0.9rem] md:text-[1rem] custom_screen:text-[1rem] mr-3 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path> </svg>
                      <h1 className='hover:cursor-pointer hover:text-color-orange transition ease-in-out duration-300'>+0123-456789</h1>
                    </div>

                    <div className="mb-4 flex items-center justify-start md:justify-start text-[0.8rem] md:text-[1rem] custom_screen:text-[1rem] text-white">
                      {/* THIS IS EMAIL SVG */}
                      <svg className="text-[0.9rem] md:text-[1rem] custom_screen:text-[1rem] mr-3 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path> </svg>
                      <h1 className='hover:cursor-pointer hover:text-color-orange transition ease-in-out duration-300'>example@exapmle.com</h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mb-16 md:justify-start ">
                    <div id="all_logos" className="flex gap-4  text-white mt-4">
                      <svg className="text-[0.9rem] hover:cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path> </svg>
                      <svg className="text-[0.9rem] hover:cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path> </svg>
                      <svg className="text-[0.9rem] hover:cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path> </svg>
                      <svg className="text-[0.9rem] hover:cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path> </svg>
                    </div>
                  </div>
                </div>
            </div>
            <div id='c2' className='w-full h-full  custom_small:pl-5 custom_screen:w-[18%] custom_small:mt-2' >
            <h5 className="  mb-[1.5rem] text-[1.4rem]  text-start text-white font-poppins font-bold">
                    Company
                  </h5>
                  <ul className="mb-16 list-none  text-start cursor-pointer font-nunito_Medium ">

                  {company.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (el && (LiRefC2.current[index] = el))}
                  onMouseEnter={() => activateAnimation(LiRefC2.current[index])}
                  onMouseLeave={() => deactivateAnimation(LiRefC2.current[index])}
                  className="relative mb-[0.9rem] group flex text-[0.9rem] md:text-[1rem] custom_screen:mb-[1.2rem] custom_screen:text-[1rem]"
                >
                  <div id="slash">
                    <h1 className="w-6 px-2 absolute -left-[25px] hidden group-hover:inline text-color-orange">//</h1>
                  </div>
                  <a className="dark:text-neutral-200 hover:text-color-orange">{item}</a>
                </li>
              ))}
                      
                  </ul>
            </div>
            <div id='c3' className='w-full custom_screen:w-[18%] h-full lg:mt-2' >
            <h5 className=" font-poppins font-bold mb-[1.5rem] text-[1.4rem]  text-start text-white "> Services</h5>
                  <ul className="mb-16 list-none  text-start cursor-pointer font-nunito_Medium">
                  {Services.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (el && (LiRefC3.current[index] = el))}
                  onMouseEnter={() => activateAnimation(LiRefC3.current[index])}
                  onMouseLeave={() => deactivateAnimation(LiRefC3.current[index])}
                  className="relative mb-[0.9rem] group flex text-[0.9rem] md:text-[1rem] custom_screen:mb-[1.2rem] custom_screen:text-[1rem]"
                >
                  <div id="slash">
                    <h1 className="w-6 px-2 absolute -left-[25px] hidden group-hover:inline text-color-orange">//</h1>
                  </div>
                  <a className="dark:text-neutral-200 hover:text-color-orange">{item}</a>
                </li>
              ))}

                  </ul>
            </div>
            <div id='c4' className='w-full custom_small:pl-5 lg:pl-0 custom_screen:w-[18%] h-full lg:mt-2' >
            <h5 className="mb-[1.5rem] text-[1.4rem] font-poppins font-bold  text-start text-white">
                    Customer Care
                  </h5>

                  <ul className="mb-16 list-none cursor-pointer font-nunito_Medium">
                    <ul className="mb-0 list-none  text-start cursor-pointer relative">

                    {CustomerCare.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (el && (LiRefC4.current[index] = el))}
                  onMouseEnter={() => activateAnimation(LiRefC4.current[index])}
                  onMouseLeave={() => deactivateAnimation(LiRefC4.current[index])}
                  className="relative mb-[0.9rem] group flex text-[0.9rem] md:text-[1rem] custom_screen:mb-[1.2rem] custom_screen:text-[1rem]"
                >
                  <div id="slash">
                    <h1 className="w-6 px-2 absolute -left-[25px] hidden group-hover:inline text-color-orange">//</h1>
                  </div>
                  <a className="dark:text-neutral-200 hover:text-color-orange">{item}</a>
                </li>
              ))}
                      
                    </ul>
                  </ul>
            </div>
            <div id='c5' className='w-full custom_screen:w-[23%] h-full lg:mt-2' >
            <h5 className="text-[1.5rem] mb-[1.3rem] font-poppins font-bold text-start text-white">
                    Newsletter
                  </h5>

                  <ul className="mb-0 list-none  text-start">
                    <li>
                      <p className="text-[0.9rem] lg:text-[1rem] leading-7 mb-6  text-start text-white md:pr-5  font-nunito_Medium">
                        Subscribe to our weekly Newsletter and recieve updates
                        via email
                      </p>
                    </li>
                    <li>
                      <div id="input" className="flex mb-6 md:mt-[1.5rem] ">

                        <input type="text" className="w-[83%] px-5 text-black focus:outline-none" placeholder="Email" />

                        <div id="logo-box" className="w-[18%] h-[4.05rem] bg-color-orange  flex justify-center items-center hover:bg-black transition ease-in-out duration-200 hover:cursor-pointer">
                          <svg className="" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                        </div>
                      </div>
                    </li>
                    <li className="text-[1.2rem] mb-6">
                      <a className="font-poppins font-bold">We accept</a>
                    </li>
                    <li>
                      <img src="/images/payment.png" alt="" />
                    </li>
                  </ul>
            </div>
        </div>
    </div>
    
      <div id="copy-right">
        <CopyRight></CopyRight>
      </div>
      </div>
  )
}

export default Footer

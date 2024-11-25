import { Link } from 'react-router-dom'
import KeychainArray from './KeychainArray'
import { useRef, useState } from 'react'

export default function Keychains() {
  const [showLeftButton, setShowLeftButton] = useState(false) // Controls the visibility of the left button
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const scrollContainerRef = useRef(null)

  const sharedArray = KeychainArray()

  // Scroll to the right
  const handleScrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    setShowLeftButton(true) // Show the left button once scrolling right occurs
  }

  // Scroll to the left
  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
  }

  return (
    <section className='flex flex-col pt-10 bg-darkbg text-blanco'>
      <div className='pl-6 md:pl-32'>
        <h1 className='md:text-[28px] exo-2 text-[20px] md:leading-[32px] leading-[30px] tracking-[0.196px] sm:pb-[10px] bg-gradient-to-r from-[#b1dbc2] via-blanco to-[#eff7f2] inline-block text-transparent bg-clip-text'>
          Japan Originals. Keychains.
        </h1>
      </div>
      <div className='relative md:pb-[115px] pb-[45px]'>
        <div
          id='card'
          ref={scrollContainerRef}
          className='pl-6 pb-4 md:pl-32 pt-[32px] sm:pt-[28px] flex overflow-x-auto scroll-smooth scroll-container'>
          {sharedArray.map((character, index) => (
            <Link
              key={index}
              to={`/dimm/Keychain/${character.id}`}>
              <div
                className='rounded-2xl md:hover:bg-cardlightgray w-[310px] md:w-[315px] flex-nowrap bg-[#10101079] hover-scale-101 md:ease-in-out md:duration-500 mr-[20px]'
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                {character.images.map((image, ImgIndex) => (
                  <div
                    key={ImgIndex}
                    className='mx-auto overflow-hidden flex justify-center'>
                    <img
                      key={ImgIndex}
                      alt={character.alt}
                      src={image}
                      className='w-auto h-[400px] md:h-[300px] rounded-t-2xl object-cover'
                    />
                  </div>
                ))}
                <div className='flex flex-col px-5 pb-7 border-t-[1px] border-cardlightgray mt-4'>
                  <p className='mt-[16px] font-semibold text-[9px] leading-[16px] tracking-[1.5px] text-lightgray uppercase exo-2'>
                    {character.bio}
                  </p>
                  <p className='figure-name-keychains'>{character.nickname}</p>
                  <p className='items-details-keychains w-fit'>
                    {character.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='md:flex hidden gap-x-[4px] mt-3 justify-center'>
          {sharedArray.map((_, index) => (
            <div
              key={index}
              className={`h-[1px] w-8 rounded-full bg-cardlightgray transition-all duration-300 ${
                hoveredIndex === index ? 'bg-blanco' : 'bg-cardlightgray'
              }`}></div>
          ))}
        </div>
        {/* Conditionally render the Left Scroll Button */}
        {showLeftButton && (
          <button
            aria-label='Left Click Button'
            className='invisible md:visible absolute left-10 top-[45%] transform -translate-y-1/2 transition-colors duration-300 ease-in-out hover:bg-gray-50/80 bg-gray-50/50 p-1 rounded-full shadow-md'
            onClick={handleScrollLeft}>
            <svg
              height={42}
              width={42}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g
                id='SVGRepo_bgCarrier'
                strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  d='M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z'
                  fill='#0F0F0F'></path>
              </g>
            </svg>
          </button>
        )}

        {/* Right Scroll Button */}
        <button
          aria-label='Right Click Button'
          className='invisible md:visible absolute right-2 top-[45%] transform -translate-y-1/2 bg-gray-50/50 hover:bg-gray-50/80 transition-colors duration-300 ease-in-out p-1 rounded-full shadow-md backdrop-blur-sm'
          onClick={handleScrollRight}>
          <svg
            height={42}
            width={42}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g
              id='SVGRepo_bgCarrier'
              strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z'
                fill='#0F0F0F'></path>
            </g>
          </svg>
        </button>
      </div>
    </section>
  )
}

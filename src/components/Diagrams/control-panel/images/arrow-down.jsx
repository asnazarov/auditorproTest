import React from "react";

const ArrowDown = ({className, openModalChoice}) => {
  return (

    <svg className={className}
         style={{
           listStyle: 'none',
           outline: 'none',
           transform: openModalChoice && 'rotate(180deg)',
         }}
         width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke={openModalChoice ? '#1D8BC5' : 'black'} strokeOpacity="0.5" strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
  )
}

export default ArrowDown;
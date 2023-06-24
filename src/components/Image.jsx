import React from 'react'
import WomanMobile from '../images/illustration-woman-online-mobile.svg';
import PatternMobile from '../images/bg-pattern-mobile.svg'

function Image() {
  return (
    <>
        <div id='patternImage' className='absolute top-[100px] z-20'>
            <img src={PatternMobile} alt="Pattern" />
        </div>
        <div id='womanImage' className='relative z-30'>
            <img src={WomanMobile} alt="Woman" />
        </div>
    </>
  )
}

export default Image
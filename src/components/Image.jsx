import React from 'react'
import WomanMobile from '../images/illustration-woman-online-mobile.svg';
import PatternMobile from '../images/bg-pattern-mobile.svg';
import PatternDesk from '../images/bg-pattern-desktop.svg';
import WomanDesk from '../images/illustration-woman-online-desktop.svg';
import Box from '../images/illustration-box-desktop.svg';


function Image() {
  return (
    <>
        <div id='patternImage' className='absolute top-[100px] z-20 lg:w-[964px] lg:h-[944px] lg:left-[195px] lg:top-[142px] lg:overflow-hidden 2xl:left-[339px] 2xl:top-[202px]'>
            <img src={PatternMobile} alt="Pattern" className='lg:hidden' />
            <img src={PatternDesk} alt="Pattern" className='hidden lg:block absolute lg:left-[-550px] lg:top-[-245px]' />
        </div>
        <div id='womanImage' className='relative z-30 lg:w-[472px] lg:h-[359px] lg:top-[255px] lg:left-[194px] overflow-hidden 2xl:left-[339px] 2xl:top-[320px]'>
            <img src={WomanMobile} alt="Woman" className='lg:hidden' />
            <div id='womanDesktop' className='hidden lg:block lg:w-[472px] lg:h-[359px] lg:absolute lg:left-[-75px]'>
                <img src={WomanDesk} alt="Woman" />
            </div>
        </div>
        <div id='boxImage' className='hidden lg:block lg:absolute lg:w-[191px] lg:z-40'>
            <img src={Box} alt="Box" className='lg:absolute lg:left-[104px] lg:top-[32px] 2xl:left-[244px] 2xl:top-[100px]' />
        </div>
    </>
  )
}

export default Image
import React from 'react'
import Arrow from '../images/icon-arrow-down.svg'

function Text() {
  return (
    <>
        <div id='title' className='text-veryDarkBlue text-[32px] font-bold font-["Kumbh_Sans"] mb-[38px]'>
            <h1>FAQ</h1>
        </div>
        <div id='questions'>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans']">
                    <div className='questionText'>
                        <p>How many team members can I invite?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver">
                    <p>Three</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans']">
                    <div className='questionText'>
                        <p>What is the maximum file upload size?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver">
                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans']">
                    <div className='questionText'>
                        <p>How do I reset my password?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver">
                    <p>With care</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans']">
                    <div className='questionText'>
                        <p>Can I cancel my subscription?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver">
                    <p>No</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans']">
                    <div className='questionText'>
                        <p>Do you provide additional support?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver">
                    <p>For more money, yes.</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default Text
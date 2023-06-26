import React, {useState, useEffect} from 'react'
import Arrow from '../images/icon-arrow-down.svg'

function Text() {

    const [allAnswers, setAllAnswers] = useState([]);
    const [icons, setIcons] = useState([]);
    let currentAnswerDiv = null;

useEffect(() => {
  // Grab the answers and place them in an array
  let theAnswers = document.querySelectorAll('.answer');
  const allAnswersArray = Array.from(theAnswers)
  setAllAnswers(allAnswersArray)

  let theIcons = document.querySelectorAll('.imgDiv')
  const allIconArray = Array.from(theIcons)
  setIcons(allIconArray)
}, [])

icons.forEach((icon) => {
  icon.addEventListener('click', (event) => {
    let answerDiv = icon.parentElement.nextSibling;
    let question = icon.previousSibling.parentElement;

    if (currentAnswerDiv === answerDiv) {
      // The same answerDiv is clicked, so close it
      answerDiv.classList.add('hidden');
      question.style.fontWeight = 400;
      icon.style.transform = 'rotate(0deg)';
      currentAnswerDiv = null;
    } else {
      // A different answerDiv is clicked, so close the current one and open this one
      if (currentAnswerDiv !== null) {
        let currentOpen = currentAnswerDiv.parentElement.firstChild
        let currentIcon =currentOpen.firstChild.nextSibling
        currentAnswerDiv.classList.add('hidden');
        currentOpen.style.fontWeight = 400;
        currentIcon.style.transform = 'rotate(0deg)';
      }
      answerDiv.classList.remove('hidden');
      question.style.fontWeight = 700;
      icon.style.transform = 'rotate(180deg)';
      currentAnswerDiv = answerDiv;
    }
  });
});
        
  return (
    <>
        <div id='title' className='text-veryDarkBlue text-[32px] font-bold font-["Kumbh_Sans"] mb-[38px] lg:text-left lg:mb-[45px]'>
            <h1>FAQ</h1>
        </div>
        <div id='questions' className='lg:relative lg:z-50'>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans'] lg:text-[14px] cursor-pointer hover:text-orange">
                    <div className='questionText'>
                        <p>How many team members can I invite?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div id='answerOne' className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver pt-[13px] text-left">
                    <p>Three</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans'] lg:text-[14px] cursor-pointer hover:text-orange">
                    <div className='questionText'>
                        <p>What is the maximum file upload size?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div id='answerTwo' className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver pt-[13px] text-left">
                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans'] lg:text-[14px] cursor-pointer hover:text-orange">
                    <div className='questionText'>
                        <p>How do I reset my password?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div id='answerThree' className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver pt-[13px] text-left">
                    <p>With care</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv pb-[18px]">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans'] lg:text-[14px] cursor-pointer hover:text-orange">
                    <div className='questionText'>
                        <p>Can I cancel my subscription?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div id='answerFour' className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver pt-[13px] text-left">
                    <p>No</p>
                </div>
                <div className="rectangleDiv w-full pt-[18px]">
                    <div className="rectangle border-[1px] border-offWhite w-full"></div>
                </div>
            </div>
            <div className="questionDiv">
                <div className="question flex flex-wrap justify-between items-center text-darkBlue text-[13px] font-['Kumbh_Sans'] lg:text-[14px] cursor-pointer hover:text-orange">
                    <div className='questionText'>
                        <p>Do you provide additional support?</p>
                    </div>
                    <div className="imgDiv">
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div id='answerFive' className="answer hidden font-['Kumbh_Sans'] text-[12px] leading-[18px] text-silver pt-[13px] text-left">
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
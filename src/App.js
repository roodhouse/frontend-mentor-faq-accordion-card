import './App.css';
import Image from './components/Image';
import Text from './components/Text';

function App() {
  return (
    <div className="App h-screen">
      <div id='wrapper' className='h-full pt-[148px] px-6 pb-[85px] bg-gradient-to-b from-backGroundColorOne from-0% to-backgroundColorTwo to-100% lg:flex lg:flex-col lg:w-full lg:justify-center lg:items-center 2xl:relative 2xl:overflow-hidden'>
        <div id='image'className='absolute w-[237px] h-[180px] top-[35px] left-[65px]'>
          <Image />
        </div>
        <div id='text' className='bg-white rounded-[23px] pt-[115px] px-6 pb-[48px] lg:max-w-[920px] w-full lg:h-[590px] lg:pl-[475px] lg:pr-[95px]'>
          <Text />
        </div>
      </div>
    </div>
  );
}

export default App;

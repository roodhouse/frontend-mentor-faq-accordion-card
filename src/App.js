import './App.css';
import Image from './components/Image';
import Text from './components/Text';

function App() {
  return (
    <div className="App h-screen">
      <div id='wrapper' className='h-full pt-[148px] px-6 pb-[85px] bg-gradient-to-b from-backGroundColorOne from-0% to-backgroundColorTwo to-100%'>
        <div id='image'className='absolute w-[237px] h-[180px] top-[35px] left-[65px]'>
          <Image />
        </div>
        <div id='text' className='bg-white rounded-[23px] pt-[132px]'>
          <Text />
        </div>
      </div>
    </div>
  );
}

export default App;

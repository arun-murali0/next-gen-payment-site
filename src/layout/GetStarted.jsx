import style from '../style';
import { arrowUp } from '../assets';

export default function GetStarted() {
  return (
    <div
      className={`${style.flexCenter} text-white rounded-full h-[140px] w-[140px] bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${style.flexCenter} h-[100%] w-[100%] flex-col bg-black rounded-full`}
      >
        <div className={`${style.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Get</span>
          </p>
          <img
            src={arrowUp}
            alt='arrow up'
            className='h-[23px] w-[23px] object-contain'
          />
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  );
}

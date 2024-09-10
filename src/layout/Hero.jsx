import style from '../style';
import { discount } from '../assets';
import {GetStarted} from "./index"
export default function Hero() {
  return (
    <section
      id='Home'
      className={`${style.paddingY} flex flex-col md:flex-row`}
    >
      <div
        className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex items-center flex-row px-4 py-2 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='h-[32px] w-[32px]' />
          <p className={`${style.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For{' '}
            <span className='text-white'> 1 month</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-center items-center'>
          <h1 className='text-white text-[52px] font-semibold flex-1 ss:text-[72px] ss:leading-[100px]'>
            The Next <span className='text-gradient'>Generation</span> {''}
            payment Method
          </h1>
          <div className='ss:flex hidden mr-0 md:mr-4'>
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The Hero component renders a section with discount information, a heading, payment method details,
 * and an image of a robot.
 * @returns The code snippet is a React functional component named `Hero` that returns a section
 * element containing various elements such as images, text, and components styled using Tailwind CSS
 * classes. The section has two main div elements - one containing discount information and text
 * content, and the other containing an image of a robot with gradient overlays. The component also
 * includes a heading, paragraph, and a call-to-action button component
 */
import style from '../style';
import { discount, robot } from '../assets';
import { GetStarted } from './index';
export default function Hero() {
  return (
    <section
      id='Home'
      className={`${style.paddingY} flex flex-col md:flex-row`}
    >
      <div
        className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex items-center flex-row px-4 py-2 bg-discount-gradient rounded-[10px] mb-10'>
          <img src={discount} alt='discount' className='h-[32px] w-[32px]' />
          <p className={`${style.paragraph} ml-2`}>
            <span className='text-white my-1'>20%</span> Discount For{' '}
            <span className='text-white my-1'> 1 month</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-center items-center'>
          <h1 className='flex-1 text-white ss:text-[72px] text-[52px] ss:leading-[75px] leading-[120%] '>
            The Next <span className='text-gradient'>Generation</span> {''}
          </h1>
          <div className='ss:flex hidden mr-0 md:mr-4'>
            <GetStarted />
          </div>
        </div>
        <h1 className='text-white text-[52px] font-semibold ss:text-[60px] ss:leading-[100px] leading-[120%] w-full font-poppins'>
          Payment Method.
        </h1>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex flex-1 ${style.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[0] w-[48%] h-[35%] top-0  pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full  pink__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20  blue__gradient' />
      </div>
    </section>
  );
}

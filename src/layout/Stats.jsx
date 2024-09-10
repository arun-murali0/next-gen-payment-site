/* This code snippet is a React component named `Stats` that renders a section containing statistics.
Here's a breakdown of what it does: */
import { stats } from '../constants';
import Style from '../style';

export default function Stats() {
  return (
    <section
      id='stats'
      className={`${Style.flexStart} flex-row flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className='flex flex-1 justify-center items-center flex-row m-3'>
          <h4 className='text-white text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] font-poppins font-semibold'>
            {stat.value}
          </h4>
          <h4 className='text-white text-[16px] xs:text-[18px] xs:leading-[26px] leading-[21px] text-gradient uppercase font-poppins font-medium ml-4'>
            {stat.title}
          </h4>
        </div>
      ))}
    </section>
  );
}

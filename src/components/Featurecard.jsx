import styles from '../style';
import { features } from '../constants';

export default function Featurecard({ title, icon, index, content }) {
  return (
    <section
      id='feature_card'
      className={`flex flex-row p-6 rounded-[20px] feature-card ${
        index != features.length - 1 ? 'mb-8' : 'mb-0'
      }`}
    >
      <div
        className={`w-[54px] h-[54px] rounded-full bg-dimBlue ${styles.flexCenter}`}
      >
        <img src={icon} className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex flex-1 flex-col ml-3'>
        <h4 className='font-poppins text-white mb-1 text-[18px] leading-[23px] font-semibold'>
          {title}
        </h4>
        <p className='font-poppins text-dimWhite mb-1 text-[16px] leading-[24px] font-semibold'>
          {content}
        </p>
      </div>
    </section>
  );
}

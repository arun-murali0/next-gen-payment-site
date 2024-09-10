/**
 * The Billing component renders a section for controlling billing and invoicing with images for Apple
 * and Google Play stores.
 * @returns The `Billing` component is being returned. It contains a section for controlling billing
 * and invoicing with images for Apple and Google Play store icons.
 */
import { apple, google, bill } from '../assets';
import styles, { layout } from '../style';

export default function Billing() {
  return (
    <section id='product' className={`${layout.sectionReverse} ${styles.paddingX}`}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='google_play'
            className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer max-xs:my-3 max-xs:w-full '
          />
          <img
            src={google}
            alt='google_play'
            className='w-[144.17px] h-[43.08px] object-contain cursor-pointer max-xs:w-full  max-xs:my-3'
          />
        </div>
      </div>
    </section>
  );
}

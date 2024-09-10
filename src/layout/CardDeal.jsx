import styles, { layout } from '../style';
import Button from '../components/Button';
import { card } from '../assets';

export default function CardDeal() {
  return (
    <section className={`${layout.section} ${styles.paddingX}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          rem rerum animi quos explicabo earum esse nisi distinctio! Nulla,
          maiores?
        </p>

        <Button styles={`mt-10`} text={'Get Started'} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='billing' className='w-[100%] h-[100%]' />
      </div>
    </section>
  );
}

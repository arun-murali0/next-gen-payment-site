/**
 * The `Business` function renders a section with information about credit cards and features a list of
 * `FeatureCard` components based on the `features` data.
 * @returns The `Business` component is being returned. It consists of a section with the id 'features'
 * containing a heading, paragraph, and a Button component for getting started. It also includes a list
 * of FeatureCard components generated based on the features data from the constants file.
 */
import { features } from '../constants';
import Styles, { layout } from '../style';
import Button from '../components/Button';
import FeatureCard from '../components/Featurecard';

export default function Business() {
  return (
    <section id='features' className={`${layout.section} ${Styles.paddingX}`}>
      <div className={layout.sectionInfo}>
        <h2 className={Styles.heading2}>
          You do the business, <br className='sm:block hidden' /> we’ll handle
          the money.
        </h2>
        <p className={`${Styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button text={'Get Started'} styles={'mt-10'} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

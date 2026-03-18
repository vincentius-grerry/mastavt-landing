import classNames from 'classnames';
import Image from 'next/image';

type ITestimonialCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const TestimonialCard = ({title, description, image, imageAlt, reverse}: ITestimonialCardProps) => {
  const verticalFeatureClass = classNames('mt-20', 'flex', 'flex-wrap', 'items-center', {
    'flex-row-reverse': reverse,
  });

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
        <div className="mt-6 text-xl leading-9">{description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <Image src={`${image}`} alt={imageAlt} width={600} height={480} />
      </div>
    </div>
  );
};

export default TestimonialCard;

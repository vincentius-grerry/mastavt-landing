import type {ReactNode} from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  maxWidth?: string;
  children: ReactNode;
};

const Section = ({title, description, yPadding, maxWidth = 'max-w-screen-lg', children}: ISectionProps) => (
  <div className={`mx-auto ${maxWidth} px-3 ${yPadding ?? 'py-16'}`}>
    {(title || description) && (
      <div className="mb-12 text-center">
        {title && <h2 className="text-4xl font-bold text-gray-900">{title}</h2>}
        {description && <div className="mt-4 text-xl md:px-20">{description}</div>}
      </div>
    )}
    {children}
  </div>
);

export default Section;

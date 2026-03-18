import type {ReactNode} from 'react';

type IFooterContentProps = {
  title: string;
  children: ReactNode;
};

const FooterContent = ({title, children}: IFooterContentProps) => (
  <div className="max-w-sm">
    <h3 className="text-lg font-semibold text-gray-900 md:text-white">{title}</h3>
    <div className="mt-4 text-sm leading-relaxed text-gray-500 md:text-gray-400">{children}</div>
  </div>
);

export default FooterContent;

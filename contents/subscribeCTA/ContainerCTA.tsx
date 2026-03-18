import {ReactNode} from 'react';

type IContainerCTAProps = {
  isDesktop: boolean;
  children: ReactNode;
};

const ContainerCTA = ({children, isDesktop}: IContainerCTAProps) => (
  <div
    className="rounded-xl px-5 py-12 md:px-12 md:py-20 shadow-sm flex items-center justify-center bg-gray-100 md:bg-transparent md:bg-no-repeat md:bg-center md:bg-[length:100%]"
    style={{
      backgroundImage: isDesktop
        ? "url('https://mastavt.com/sw-content/themes/sw-theme/assets/img/bg-newsletter.png')"
        : 'none',
    }}
  >
    {children}
  </div>
);

export default ContainerCTA;

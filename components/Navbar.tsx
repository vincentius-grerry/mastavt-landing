import Image from 'next/image';
import type {ReactNode} from 'react';

type INavbarProps = {
  logoUrl: string;
  children: ReactNode;
};

const Navbar = ({logoUrl, children}: INavbarProps) => (
  <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between">
    <div className="flex items-center">
      <Image src={logoUrl} width={141} height={75} alt="logo" />
    </div>

    <nav>
      <ul className="flex items-center gap-6 text-lg font-medium text-gray-800">{children}</ul>
    </nav>
  </div>
);

export default Navbar;

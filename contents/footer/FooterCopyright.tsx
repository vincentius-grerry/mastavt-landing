import {ReactNode} from 'react';

type ICenteredFooterCopyrightProps = {
  children: ReactNode;
};

const FooterCopyright = ({children}: ICenteredFooterCopyrightProps) => (
  <div className="border-t border-gray-800">
    <div className="mx-auto max-w-screen-xl px-6 py-6 text-center text-sm text-gray-400">{children}</div>
  </div>
);
export default FooterCopyright;

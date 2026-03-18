'use client';
import ContainerCTA from '@/contents/subscribeCTA/ContainerCTA';
import NewsletterCTA from '@/contents/subscribeCTA/NewsletterCTA';
import Section from '@/components/Section';
import {useMediaQuery} from '@mui/material';

const SubscribeCTA = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  return (
    <Section maxWidth="max-w-screen-xl">
      <ContainerCTA isDesktop={isDesktop}>
        <div className="w-full max-w-2xl text-center">
          <h4 className="text-lg font-semibold text-gray-900 md:text-xl">Subscribe for Newsletter</h4>
          <NewsletterCTA />
        </div>
      </ContainerCTA>
    </Section>
  );
};

export default SubscribeCTA;

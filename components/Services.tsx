'use client';
import InfoCard from '@/components/InfoCard';
import Section from '@/components/Section';
import {Google, Instagram, Laptop, NetworkCell, Settings, StackedLineChart} from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      icon: <Laptop className="text-amber-700" />,
      title: 'Web Development',
      description:
        'Services for creating company profile websites, online shops, personal websites, e-commerce, portal websites, etc',
    },
    {
      icon: <Settings className="text-green-500" />,
      title: 'Website Maintenance',
      description:
        'For those of you who no longer have time to take care of your website, we are ready to carry out website maintenance.',
    },
    {
      icon: <StackedLineChart className="text-purple-500" />,
      title: 'Web Promotion',
      description:
        "For those of you who have a business but don't have a website, we are ready to promote your business",
    },
    {
      icon: <NetworkCell className="text-blue-500" />,
      title: 'Social Media Management',
      description: 'Social media management services ranging from account setup to regular maintenance',
    },
    {
      icon: <Google className="text-green-600" />,
      title: 'Google & Facebook Ads',
      description: 'Boost your business now by using advertising and don\'t lose to competitors..',
    },
    {
      icon: <Instagram className="text-pink-500" />,
      title: 'Follower Social Media',
      description:
        'The best branding solution on Instagram for personal accounts, businesses, Instagram celebrities, and online shops.',
    },
  ];

  return (
    <Section
      yPadding="py-6"
      title="Our Services"
      description="Build your business through digital marketing strategies with us! Marketing your business online becomes more effective."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => (
          <InfoCard key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </Section>
  );
};

export default Services;

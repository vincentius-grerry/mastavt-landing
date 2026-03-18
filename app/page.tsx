import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Testimoni from '@/components/Testimoni';
import SubscribeCTA from '@/components/SubscribeCTA';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div className="text-gray-600 antialiased">
      <Hero />
      <Services />
      <Portfolio />
      <Testimoni />
      <SubscribeCTA />
      <Footer />
    </div>
  );
}

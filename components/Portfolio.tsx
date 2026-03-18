import InfoCard from '@/components/InfoCard';
import Section from '@/components/Section';
import Link from 'next/link';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Simpeg Gereja',
      description: 'Simpeg Gereja',
      imageSrc: 'https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/Picture1.jpg',
      action: (
        <Link
          href="https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/Picture1.jpg"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
    {
      title: 'SIAKAD STT GPI PAPUA',
      description: 'SIAKAD STT GPI PAPUA',
      imageSrc: 'https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/SIAKAD_STT.jpg',
      action: (
        <Link
          href="https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/SIAKAD_STT.jpg"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
    {
      title: 'DUKCAPIL AMBON',
      description: 'DUKCAPIL AMBON',
      imageSrc: 'https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/DUKCAPIL_AMBON.jpg',
      action: (
        <Link
          href="https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/DUKCAPIL_AMBON.jpg"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
    {
      title: 'Stikes Muhammadiyah Pringsewu',
      description: 'Stikes Muhammadiyah Pringsewu',
      imageSrc: 'https://mastavt.com/sw-content/portofolio/image/Stikes_Muhammadiyah_Pringsewu.jpg',
      action: (
        <Link
          href="https://mastavt.com/sw-content/portofolio/image/Stikes_Muhammadiyah_Pringsewu.jpg"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
    {
      title: 'Lampung Krakatatu Festival',
      description: 'Lampung Krakatatu Festival',
      imageSrc: 'https://mastavt.com/sw-content/portofolio/image/Lampung_Krakatau_Festival_2018.jpg',
      action: (
        <Link
          href="https://mastavt.com/sw-content/portofolio/image/Lampung_Krakatau_Festival_2018.jpg"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
    {
      title: 'SIMRS',
      description: 'SIMRS',
      imageSrc: 'https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/health.JPG',
      action: (
        <Link
          href="https://mastavt.com/sw-content/upload/portofolio/image/MVT_Portofolio/health.JPG"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
    {
      title: 'Barang Milik Gereja',
      description: 'Barang Milik Gereja',
      imageSrc: 'https://mastavt.com/sw-content/upload/portofolio/image/Produk_MVT_3.jpg',
      action: (
        <Link
          href="https://mastavt.com/sw-content/upload/portofolio/image/Produk_MVT_3.jpg"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
    {
      title: 'Sistem Diteksi Dini',
      description: 'Sistem Diteksi Dini',
      imageSrc: 'https://mastavt.com/sw-content/upload/portofolio/image/PDORDUK_MVT_1.jpg',
      action: (
        <Link
          href="https://mastavt.com/sw-content/upload/portofolio/image/PDORDUK_MVT_1.jpg"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="icofont-ui-zoom-in" />
        </Link>
      ),
    },
  ];

  return (
    <Section yPadding="py-6" title="Our Awesome Portfolio">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {portfolioItems.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            action={item.action}
          />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;

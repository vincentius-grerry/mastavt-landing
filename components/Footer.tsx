'use client';
import Link from 'next/link';
import Background from '@/components/Background';
import FooterContent from '@/contents/footer/FooterContent';
import FooterCopyright from '@/contents/footer/FooterCopyright';
import {AppConfig} from '@/utils/AppConfig';
import {Facebook, Instagram, Mail, Phone, Twitter, YouTube} from '@mui/icons-material';

const Footer = () => (
  <Background className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-6 py-8 md:py-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-25">
      <FooterContent title="About Us">
        <p>Masta is a digital marketing and web design service provider, creating any application you desire.</p>
        <p className="mt-3">Mastavt is located in Ambon City, Maluku, Indonesia.</p>
      </FooterContent>

      <FooterContent title="Contact">
        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          To request a quote, please email us. We are only available during business hours; outside of that time, please
          email us.
        </p>

        <ul className="mt-4 space-y-3 text-sm text-gray-400">
          <li className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-gray-500" />
            <Link href="tel:+6281215461588" className="hover:text-primary-500">
              +6281215461588
            </Link>
          </li>

          <li className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <Link href="mailto:vincentius.grerry@gmail.com" className="hover:text-primary-500">
              vincentius.grerry@gmail.com
            </Link>
          </li>
        </ul>
      </FooterContent>

      <FooterContent title="Follow Us">
        <ul className="mt-4 flex items-center justify-center md:justify-start gap-4">
          <li>
            <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary-500 transition">
              <Twitter className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary-500 transition">
              <Facebook className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary-500 transition">
              <Instagram className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-primary-500 transition">
              <YouTube className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </FooterContent>
    </div>

    <FooterCopyright>
      © {new Date().getFullYear()} |{' '}
      <Link href="https://mastavt.com" className="hover:text-primary-500">
        {AppConfig.title}
      </Link>{' '}
      | All Rights Reserved.
    </FooterCopyright>
  </Background>
);

export default Footer;

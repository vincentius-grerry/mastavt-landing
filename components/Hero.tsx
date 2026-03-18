import Link from 'next/link';
import TextRotator from '@/utils/TextRotator';
import Background from '@/components/Background';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import {Typography} from '@mui/material';

const Hero = () => (
  <Background image="https://mastavt.com/sw-content/slider/slider-f6f84fc0f41d7101fe99487e720d27e2.jpg">
    <Section yPadding="py-6">
      <Navbar logoUrl={'https://mastavt.com/sw-content/sw-1.png'}>
        <li>
          <Link
            href="#"
            className="inline-flex items-center justify-center ml-[20px] mr-[50px] px-[35px] h-[50px] leading-[35px] rounded-[50px_0px_50px_50px] tracking-[-0.02em] text-white bg-[#002e44] shadow-[3px_3px_11px_rgba(0,46,68,0.25)] hover:bg-[#293b5f] transition"
          >
            Lets Talk
          </Link>
        </li>
      </Navbar>
    </Section>

    <Section yPadding="py-6">
      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mt-0 md:mt-[-20px]">
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-tight tracking-tight">
            <span className="text-[#293b5f]">Website Creation Services</span>
            <br />
            <TextRotator />
          </h1>
          <div className="mt-4 mb-5 text-gray-700 text-base sm:text-lg">
            <Typography variant="subtitle2">
              Build your business through digital marketing strategies with us! <br />
              Marketing your business online has become more effective.
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:h-[50px] leading-[35px] rounded-[50px_0px_50px_50px] tracking-[-0.02em] text-white bg-[#002e44] shadow-[3px_3px_11px_rgba(0,46,68,0.25)] hover:bg-[#293b5f] transition"
            >
              Start a Project
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <span className="text-sm sm:text-base">
                Call us <strong className="ml-1">+6281215461588</strong>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="https://mastavt.com/sw-content/slider/app-development-animate.svg"
            alt="app development"
            width={500}
            height={400}
            className="w-full max-w-[400px] sm:max-w-[500px] animate-float"
          />
        </div>
      </div>
    </Section>
  </Background>
);

export default Hero;

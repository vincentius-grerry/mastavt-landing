'use client';
import TestimoniDetail from '@/contents/testimoni/TestimonialCard ';
import Section from '@/components/Section';

const Testimoni = () => (
  <Section yPadding="py-6">
    <TestimoniDetail
      title="We develop digital strategies products and services."
      description="MASTAVT Digital Marketing has three years of experience and has created dozens of elegant and professional business websites and online stores. To help businesses grow this year, MASTAVT offers web design services that follow the latest website trends, with a variety of elegant and user-friendly interfaces that are easy for admins to operate. - Maryo Indra Manjaruni (Founder)"
      image="https://mastavt.com/sw-content/about1.png"
      imageAlt="Let's connect"
      reverse
    />
  </Section>
);

export default Testimoni;

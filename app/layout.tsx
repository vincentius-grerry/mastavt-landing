import '@/styles/globals.css';
import {AppConfig} from '@/utils/AppConfig';

export const metadata = {
  title: {
    default: AppConfig.title,
    template: `%s | ${AppConfig.site_name}`,
  },
  description: AppConfig.description,
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    siteName: AppConfig.site_name,
    locale: AppConfig.locale,
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">{children}</body>
    </html>
  );
}

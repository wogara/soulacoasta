import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/main-header/main-header';
import MainFooter from '@/components/main-footer/main-footer';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Soulacoasta',
  description: 'Soulacoasta DJ site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}

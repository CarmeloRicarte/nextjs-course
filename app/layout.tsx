import './tailwind-global.scss';

import { Roboto } from '@next/font/google';

import StyledComponentsRegistry from './lib/registry';

// all app will have Roboto font
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'optional',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head className={roboto.className} />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

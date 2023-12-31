import './globals.scss';
// importing Metadata type so it can be used with our const metadata
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import HeaderCart from './HeaderCart';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // %s is our String placeholder and will be replaced with the {title: titleName} inside of About/Products/etc
  title: { default: 'Home | AccessIT', template: '%s | AccessIT' },
  description: 'AccessIT webshop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <span>AccessIT</span>
            {/* This is not optimized */}
            {/* <a href="/">Home</a> */}

            {/* This is optimized */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link data-test-id="products-link" href="/products">
              Products
            </Link>
            <HeaderCart />
          </nav>
        </header>
        {/* Will only update on site refresh */}
        {children}
      </body>
    </html>
  );
}

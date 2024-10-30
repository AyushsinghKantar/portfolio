import {Sora} from 'next/font/google';
import "./globals.css";
import { constructMetadata } from "@/lib/utils";



export const metadata = constructMetadata()

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={sora.className}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

// Fonts & global styles
import { Roboto } from "next/font/google";
import "./../scss/styles.scss";

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto-main',
  display: 'swap',
  weight: ['400', '700', '900'],
});

// Also you can generate metaData (https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function-1)
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // set correct frontend host
  title: "Artem Orlov - Frontend Developer | Portfolio",
  description: "Artem Orlov - Frontend Developer | Web Developer Portfolio | React Developer | Vue Developer | Nuxt | Next",
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}

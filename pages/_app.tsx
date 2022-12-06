import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';
import localFont from '@next/font/local';

const inter = localFont({
  src: [
    {
      path: './Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'auto',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

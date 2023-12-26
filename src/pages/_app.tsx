import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { InputProvider } from '@/contexts/inputContext';

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <InputProvider>
      <Component {...pageProps} />
    </InputProvider>
  );
}

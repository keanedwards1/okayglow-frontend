// pages/_app.tsx

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
/* import { trpc } from '@/utils/trpc';
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;


/* export default trpc.withTRPC(MyApp); */
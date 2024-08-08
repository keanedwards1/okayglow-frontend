// utils/trpc.ts

import { createTRPCNext } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../shared/src'; // Make sure this path is correct

export const trpc = createTRPCNext<AppRouter>({
  config() {
    const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/trpc';
    return {
      links: [
        httpBatchLink({
          url,
        }),
      ],
    };
  },
  ssr: false, // Disable SSR for now to simplify the setup
});
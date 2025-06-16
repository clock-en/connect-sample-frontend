'use client';

import { TransportProvider } from '@connectrpc/connect-query';
import { createGrpcWebTransport } from '@connectrpc/connect-web';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const connectTransport = createGrpcWebTransport({
  baseUrl: 'http://localhost:8080',
  interceptors: [
    (next) => async (req) => {
      console.log('Request', req);
      const res = await next(req);
      console.log('Response', res);
      return res;
    },
  ],
});

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransportProvider transport={connectTransport}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TransportProvider>
  );
};

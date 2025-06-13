'use client';

import { greet } from '@/pbgen/submodules/protobuf/greet/v1/greet-GreetService_connectquery';
import { useQuery } from '@connectrpc/connect-query';

export const Greeting = () => {
  const { data, isLoading } = useQuery(
    greet,
    { name: 'john' },
    { staleTime: 1000 }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Greeting: {data?.greeting}</div>;
};

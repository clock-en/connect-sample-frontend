'use client';

import { GreetService } from '@/pbgen/submodules/protobuf/greet/v1/greet_pb';
import { createConnectQueryKey, useTransport } from '@connectrpc/connect-query';
import { useQueryClient } from '@tanstack/react-query';

export const GreetingCache = () => {
  const myTransport = useTransport();
  const queryKey = createConnectQueryKey({
    schema: GreetService.method.greet,
    transport: myTransport,
    input: { name: 'john' },
    cardinality: 'finite',
  });

  console.log(queryKey);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(queryKey);

  console.log(data);

  if (!data) {
    return <div>Cache data is not found</div>;
  }

  return <div>Greeting Cache: {data.greeting}</div>;
};

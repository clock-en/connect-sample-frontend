'use client';

import { createClient } from '@connectrpc/connect';
import { GreetService } from '@/pbgen/submodules/protobuf/greet/v1/greet_pb';
import { createConnectTransport } from '@connectrpc/connect-web';
import { useEffect, useState } from 'react';

const transport = createConnectTransport({
  baseUrl: 'http://localhost:8080',
  // Not needed. Web browsers use HTTP/2 automatically.
  // httpVersion: "1.1"
});

export const Greeting = () => {
  const [greeting, setGreeting] = useState<string | null>(null);
  const client = createClient(GreetService, transport);
  const getGreeting = async () => {
    const res = await client.greet({ name: 'John' });
    setGreeting(res.greeting);
  };

  useEffect(() => {
    getGreeting();
  }, []);

  return <div>Greeting: {greeting}</div>;
};

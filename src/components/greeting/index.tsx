'use client';

import { greet } from '@/pbgen/submodules/protobuf/greet/v1/greet-GreetService_connectquery';
import { useQuery } from '@connectrpc/connect-query';

export const Greeting = () => {
  // 取得したデータは 30 秒間キャッシュするように設定
  const { data, isLoading } = useQuery(
    greet,
    { name: 'john' },
    { staleTime: 1000 * 60 * 0.5 }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>取得したデータは 30 秒間キャッシュされます</div>
      <div>Greeting: {data?.greeting}</div>
    </div>
  );
};

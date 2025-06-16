'use client';

import { greet } from '@/pbgen/submodules/protobuf/greet/v1/greet-GreetService_connectquery';
import { useSuspenseQuery } from '@connectrpc/connect-query';

export const GreetingSuspense = () => {
  // 取得したデータは 30 秒間キャッシュするように設定
  const { data } = useSuspenseQuery(
    greet,
    { name: 'john' },
    { staleTime: 1000 * 60 * 0.5 }
  );

  return (
    <div>
      <div>取得したデータは 30 秒間キャッシュされます</div>
      <div>Greeting: {data?.greeting}</div>
    </div>
  );
};

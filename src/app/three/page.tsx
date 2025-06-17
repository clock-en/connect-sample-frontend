import Link from 'next/link';

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <div>
        <Link href="/three/01-quickstart">&gt; 入門</Link>
      </div>
      <div>
        <Link href="/three/02-material">&gt; マテリアルとライティング</Link>
      </div>
      <div>
        <Link href="/three/03-modeldata">&gt; モデルデータの読み込み</Link>
      </div>
      <div>
        <Link href="/three/05-csm-modeling">
          &gt; CSM で生成したモデルデータを読み込み
        </Link>
      </div>
    </main>
  );
}

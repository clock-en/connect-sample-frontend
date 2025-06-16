import Link from 'next/link';

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <Link href="/three/01-quickstart">&gt; 入門</Link>
      </div>
    </main>
  );
}

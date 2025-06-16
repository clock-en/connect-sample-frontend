import { ThreeTemplate } from '@/components/three-template';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <ThreeTemplate />
      </div>
    </main>
  );
}

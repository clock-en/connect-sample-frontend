import { TreeQuickstartTemplate } from '@/components/three-template/quickstart-template';

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <a href="https://ics.media/tutorial-three/quickstart/">
          参考: https://ics.media/tutorial-three/quickstart/
        </a>
      </div>
      <div>
        <TreeQuickstartTemplate />
      </div>
    </main>
  );
}

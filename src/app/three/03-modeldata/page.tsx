import { TreeModelDataTemplate } from '@/components/three-template/modeldata-template';

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <div>
        <a href="https://ics.media/tutorial-three/model_basic/">
          参考: https://ics.media/tutorial-three/model_basic/
        </a>
      </div>
      <div>
        <TreeModelDataTemplate />
      </div>
    </main>
  );
}

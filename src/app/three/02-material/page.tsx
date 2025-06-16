import { TreeMaterialTemplate } from '@/components/three-template/material-template';

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <a href="https://ics.media/tutorial-three/material_basic/">
          参考: https://ics.media/tutorial-three/material_basic/
        </a>
      </div>
      <div>
        <TreeMaterialTemplate />
      </div>
    </main>
  );
}

import { TreeCsmModelingTemplate } from '@/components/three-template/csm-modeling-template';

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <TreeCsmModelingTemplate />
      </div>
    </main>
  );
}

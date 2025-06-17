import { TreeMouseEventTemplate } from '@/components/three-template/mouse-event-template';

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <div>
        <a href="https://ics.media/tutorial-three/raycast/">
          参考: https://ics.media/tutorial-three/raycast/
        </a>
      </div>
      <div>
        <TreeMouseEventTemplate />
      </div>
    </main>
  );
}

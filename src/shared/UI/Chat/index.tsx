import WithSubnavigation from './Navbar/Navbar';
import SimpleSidebar from './Right';
import { VideoHostCall } from './Video/Video';

export default function ChatComponent() {
  return (
    <>
      <header>
        <WithSubnavigation />
      </header>
      <main className="flex  h-[95.2vh] bg-purple-500  justify-between">
        <div className="flex  justify-end items-end w-[100vw] bg-amber-700">
          <VideoHostCall />
        </div>
        <div className="flex   justify-end items-end">
          <SimpleSidebar />
        </div>
      </main>
      <footer>
        <div className="flex  justify-end items-end w-[100vw] h-[43px] bg-red-500">
          jdcdbdc xhh
        </div>
      </footer>
    </>
  );
}

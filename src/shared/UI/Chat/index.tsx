import { ControlVideo } from './ControlVideo';
import WithSubnavigation from './Navbar/Navbar';
import SimpleSidebar from './Right';
import { VideoHostCall } from './Video/Video';

export default function ChatComponent() {
  return (
    <section className="flex fixed flex-col">
      <WithSubnavigation />

      <div className="flex flex-row justify-between bg-[#DFEBFF]  mt-1">
        <VideoHostCall />
        <SimpleSidebar />
      </div>
      <ControlVideo />
    </section>
  );
}

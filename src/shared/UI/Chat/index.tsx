import WithSubnavigation from './Navbar/Navbar';
import SimpleSidebar from './Right';

export default function ChatComponent() {
  return (
    <div>
      <WithSubnavigation />;
      <SimpleSidebar />
    </div>
  );
}

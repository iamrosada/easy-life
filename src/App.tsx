import { Providers } from '@/Providers';
import TopNavbar from '@/shared/UI/Navbar/Top';
import Skill from './shared/UI/Skill/Skill';
import SpeakComponent from './shared/UI/Speak/Speak';

function App() {
  return (
    <Providers>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Skill />
        <SpeakComponent />
      </main>
      <footer></footer>
    </Providers>
  );
}

export default App;

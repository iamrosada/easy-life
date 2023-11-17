import { Providers } from '@/Providers';
import TopNavbar from '@/shared/UI/Navbar/Top';
import Skill from './shared/UI/Skill/Skill';

function App() {
  return (
    <Providers>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Skill />
      </main>
      <footer></footer>
    </Providers>
  );
}

export default App;

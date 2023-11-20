import { Providers } from '@/Providers';
import TopNavbar from '@/shared/UI/Navbar/Top';
import Skill from './shared/UI/Skill/Skill';
import SpeakComponent, {
  OuServiceComponent,
  UserExperience,
} from './shared/UI/Speak/Speak';

function App() {
  return (
    <Providers>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Skill />
        <SpeakComponent />
        <OuServiceComponent />
        <UserExperience />
      </main>
      <footer></footer>
    </Providers>
  );
}

export default App;

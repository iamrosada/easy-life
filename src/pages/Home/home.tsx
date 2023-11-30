import { Providers } from '@/Providers';
import TopNavbar from '@/shared/UI/Navbar/Top';
import Skill from '../../shared/UI/Skill/Skill';
import SpeakComponent, {
  FooterComponent,
  OuServiceComponent,
  UserExperience,
} from '../../shared/UI/Speak/Speak';
import { PrimaryFeatures } from '@/shared/UI/Primary/PrimaryFeatures';
import { Pricing } from '@/shared/UI/Primary/Pricing';
import { Faqs } from '@/shared/UI/Primary/Faqs';

function HomeComponent() {
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
        <PrimaryFeatures />

        <Pricing />
        <Faqs />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </Providers>
  );
}

export default HomeComponent;

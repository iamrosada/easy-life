import { Providers } from '@/Providers';
import TopNavbar from '@/shared/UI/Navbar/Top';

function App() {
  return (
    <Providers>
      <header>
        <TopNavbar />
      </header>
      <main></main>
      <footer></footer>
    </Providers>
  );
}

export default App;

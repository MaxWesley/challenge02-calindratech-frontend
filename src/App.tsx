import { NavBar } from './components/NavBar';
import { InitialScreen } from './components/InitialScreen';
import { LastScreen } from './components/LastScreen';
import { Footer } from './components/Footer';

import { GlobalStyle } from './global/styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main>
        <InitialScreen />
        <LastScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;

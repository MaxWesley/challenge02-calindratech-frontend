import { InitialScreen } from './components/InitialScreen';
import { LastScreen } from './components/LastScreen';
import { NavBar } from './components/NavBar';
import { GlobalStyle } from './global/styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <InitialScreen />
      <LastScreen />
    </>
  );
}

export default App;

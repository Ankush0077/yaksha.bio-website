
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/yaksha_bio/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  
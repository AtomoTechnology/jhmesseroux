import { Footer } from './components/Footer';
import { Header } from './components/Header';
import '../src/styles/main.css';
import '../src/styles/app.css';
import { Languages } from './components/Languages';
import Projects from './components/Projects';
import Educations from './components/Educations';
import Contacts from './components/Contacts';
import PreFooter from './components/PreFooter';
import Clients from './components/Clients';

function App() {
  return (
    <div className="App">
      <Header />
      <Clients />
      <Languages />
      <Educations />
      <Contacts />
      <Projects />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;

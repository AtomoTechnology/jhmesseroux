import { Footer } from './components/Footer';
import { Header } from './components/Header';
import '../src/styles/main.css';
import '../src/styles/app.css';
import { Languages } from './components/Languages';
import { Projects } from './components/Projects';

function App() {
	return (
		<div className="App">
			<Header />
			<Languages />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;

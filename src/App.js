import './App.css';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import Theme from './components/Theme';
import './style/style.css'
function App() {
  return (
    <>
      <div className="home font-Inter">
        <Navbar />
        <Greeting/>
        <Theme/>
      </div>
    </>
  );
}

export default App;

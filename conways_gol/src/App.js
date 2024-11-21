import logo from './logo.svg';
import './App.css';
import My_topbar from './components/My_topbar';
import My_game from './components/My_game';
import My_footer from './components/My_footer';

function App() {
  return (
    <div>
      <My_topbar />
      <My_game />
      <My_footer />
    </div>
  );
}

export default App;

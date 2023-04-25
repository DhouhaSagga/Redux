import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headers from './component/Headers';
import Todoliste from './component/Todoliste';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Todoliste/>
    </div>
  );
}

export default App;

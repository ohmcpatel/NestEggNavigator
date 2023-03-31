import './App.css';
import Analytics from './components/Analytics';
import Header from './components/Header.js';
import Retirement from './components/Retirement';
import Finances from './Finances';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='HS'>
        <div className='LHS'>
          <Retirement />
          <Analytics />
        </div>
        <div className='RHS'>
          <Finances />
        </div>
      </div>


    </div>
  );
}

export default App;

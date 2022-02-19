import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesInfo from './components/countriesInfo';
import CoronaInfo from './view/coronaInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoronaInfo />} >
          <Route path=':code' element={<CountriesInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

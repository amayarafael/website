import About from './pages/about/About';
import Header from './other/components/header/Header';
import './App.css'
import { useState } from 'react';

function App() {
  const [ selectedPage, setSelectedPage ] = useState('About');

  return (
    <div className="App">
      <Header setSelectedPage={setSelectedPage}/>
      {
        selectedPage === 'About' ?
          <About/>
        :
        selectedPage === 'Portfolio' ?
          'Portfolio'
        :
        selectedPage === 'Services' ?
          'Services'
        :
          'None'
      }
    </div>
  );
}

export default App;
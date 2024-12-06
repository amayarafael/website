import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';
import SendForm from './pages/send-form/SendForm';
import Header from './other/components/header/Header';
import './App.css'
import { useState } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState('About');

  return (
    <div className="App">
      <Header setSelectedPage={setSelectedPage} />
      {
        selectedPage === 'About' ?
          <About setSelectedPage={setSelectedPage} />
          :
          selectedPage === 'Portfolio' ?
            <Portfolio />
            :
            selectedPage === 'Services' ?
              <Services />
              :
              selectedPage === 'Send-Form' ?
                <SendForm />
                :
                'None'
      }
    </div>
  );
}

export default App;
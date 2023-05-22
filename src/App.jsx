import './App.css';
import Header from './components/header';
import Recomendation from './components/recomendation';
import Sell from './components/sell';
import Review from './components/review';
import Partnership from './components/partnership';
import Subscribe from './components/subscribe';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Recomendation />
      <Sell />
      <Review />
      <Partnership />
      <Subscribe />
      <Footer />
      <div className='bg1'></div>
      <div className='bg2'></div>
      <div className='bg3'></div>
      <div className='bg4'></div>
      <div className='bg5'></div>
      <div className='bg6'></div>
      <div className='bg7'></div>
    </div>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

const getMainMarginTop = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 900) {
    return '64px';
  }
  return '76px';
};

const App = () => {
  return (
    <div className="App" style={{minHeight:'100vh',background:'#181f1b',color:'#e6f4ea',display:'flex',flexDirection:'column'}}>
      <Navbar />
      <main style={{flex:1, marginTop: getMainMarginTop()}}>
        <Outlet />
      </main>
      <hr style={{borderColor:'#232d28',margin:'2rem 0'}} />
      <Footer />
    </div>
  );
};

export default App;
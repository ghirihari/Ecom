import './App.css';
import Header from './Components/Header'
import MainScreen from './Components/MainScreen';
import SideBar from './Components/SideBar';

import {useState} from 'react'

function App() {
  const [open, toggle] = useState(false) 
  const tabs = ['Best Sellers','Categories','New Arrivals','Official Merchandise'];
  let sidebarClass = (open===true)?'sidebar open':'sidebar' 

  return (
    <div className="App">
      <Header open={open} toggle={toggle} tabs={tabs}/>
      <SideBar class={sidebarClass} tabs={tabs}/>
      <MainScreen toggle={toggle}/>
    </div>
  );
}

export default App;

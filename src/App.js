import './App.css';
// import Header from './Components/Header'
import MainScreen from './Components/MainScreen';
import SideBar from './Components/SideBar';
import AppBar from './Components/AppBar';

import {useState} from 'react'

function App() {
  const [open, toggle] = useState(false) 
  const tabs = ['Best Sellers','Categories','New Arrivals','Official Merchandise'];
  let sidebarClass = (open===true)?'sidebar open':'sidebar' 

  return (
    <div className="App">
      <AppBar title="Ghost Of Uchiha" tabs={tabs} toggle={toggle}/>
      <SideBar class={sidebarClass} tabs={tabs}/>
      <MainScreen toggle={toggle}/>
    </div>
  );
}

export default App;

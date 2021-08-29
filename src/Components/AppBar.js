import React from 'react'
import {  } from 'react-icons/bs';
import {BsSearch, BsList,TiShoppingCart,BiLogIn} from 'react-icons/all'

const Tabs = (props) => {
    return props.tabs.map((item)=> <label className="tab-item" key={item}>{item}</label>)
}

const ButtonWithIcon = (props) => {
  return (
    <button className={"button "+props.color+"-btn"}>
        {props.children}
    </button>
  )
}

const AppBar = (props) => {
    return (
        <div>
          <div className="appbar">
            <div className="listButton" onClick={()=>props.toggle(open=>!open)}>
                <BsList/>
            </div>
            <div className="title-container">
              <label className="title">{props.title}</label>
            </div>
            <div className="tab-container">
                <Tabs tabs={props.tabs}/>
            </div>

            <div className="searchBar">
              <div style={{margin:'0px 10px'}}>
                <BsSearch/>
              </div>
              <label style={{width:'100%'}} >  
                <input style={{width:'100%'}}  placeholder='Search…'/>
              </label>
            </div>

            <div className="buttonBar">
                <ButtonWithIcon color="blue">
                  <BiLogIn className="icon topRight"/>
                  <label>Login</label>
                </ButtonWithIcon>
                <ButtonWithIcon color="white">
                  <TiShoppingCart className="icon topRight"/>
                  <label>Cart</label>
                </ButtonWithIcon>
            </div>

            <div className="listButton">
                <TiShoppingCart/>
            </div>
          </div>
        </div>
    )
}

export default AppBar

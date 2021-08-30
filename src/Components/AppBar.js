import React from 'react'
import {BiSearchAlt2, BsList,TiShoppingCart,BiLogIn} from 'react-icons/all'

const Tabs = (props) => {
    return props.tabs.map((item)=> <label className="tab-item" key={item}>{item}</label>)
}

// const ButtonWithIcon = (props) => {
//   return (
//     <button className={"button "+props.color+"-btn"}>
//         {props.children}
//     </button>
//   )
// }

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

            {/* <div className="searchBar">
              <div style={{margin:'0px 10px'}}>
                <BiSearchAlt2/>
              </div>
              <label style={{width:'100%'}} >  
                <input style={{width:'100%'}}  placeholder='Search…'/>
              </label>
            </div> */}

            <div className="buttonBar">
                <BiSearchAlt2 className="icon topRight"/>
                <BiLogIn className="icon topRight"/>
                <TiShoppingCart className="icon topRight"/>

                {/* <ButtonWithIcon color="blue">
                  <BiLogIn className="icon topRight"/>
                  <label>Login</label>
                </ButtonWithIcon>
                <ButtonWithIcon color="white">
                  <TiShoppingCart className="icon topRight"/>
                  <label>Cart</label>
                </ButtonWithIcon> */}
            </div>

            <div className="listButton">
                <TiShoppingCart/>
            </div>
          </div>
        </div>
    )
}

export default AppBar

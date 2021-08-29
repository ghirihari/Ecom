import React from 'react'
import Logo from '../assets/logo.png'

const SideBar = (props) => {
    return (
        <div className={props.class}>
            <div className="logoContainer">
                <img style={{margin:'0px 30%'}}alt="logo" src={Logo}/>
                <button className="button2 blue-btn">Login/Register</button>
            </div>
            {props.tabs.map((item)=><div key={item} className="listItem">{item}</div>)}
        </div>
    )
}

export default SideBar

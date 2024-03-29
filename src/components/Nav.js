import React from "react";
import "./css/nav.css";
import Logo from "./images/logo.png";
import Search from "./images/search.png"
import Wallet from "./images/wallet.png";
import Menu from "./images/menu.png";
import { changeMobMen } from "./MobMenu";
import { connect, showRef } from "./connection.js";
import { searchToken, f } from "./connection.js";
export var buttonName;

const Nav=()=>{
    var searchBarRef = React.createRef();

    const [conBTNtext,updateConBtnText] = React.useState('Connect Wallet');
    buttonName = updateConBtnText;

    function s(){
        document.getElementById("crt").style.width="100vw";
    }
    function s1(){
        document.getElementById("mng").style.width="100vw";
    }

    return(
       <nav>
        <img src={Logo} alt="logo"/>
        
        <div className="option" style={{marginLeft:"2%"}} onClick={()=>{
            s();
        }}>
            Create Token
        </div>
        <div className="option" style={{marginLeft:"2%"}} onClick={()=>{
            s1();
        }}>
            Manage Token
        </div>
        <div className="option" style={{marginLeft:"2%"}} onClick={()=>{
            showRef();
        }}>
            Fresh Referrals 
        </div>
        <div className="search-bar">
            <div style={{padding:"5%", background:"#DD8500",cursor:"pointer", borderRadius:"15px 0px 0px 15px"}} onClick={async ()=>{
                await searchToken(searchBarRef.current.value);
            }}>
                <img src={Search}/>
            </div>
            <input style={{height:"48px" , width:"300px"}} ref={searchBarRef} placeholder="Enter Token Address"></input>
        </div>
        <div className="connect-btn" onClick={()=>{
            connect();
        }
        }>
            <img src={Wallet}></img>
            <div>{conBTNtext}</div>
        </div>
        <div className="menu-btn" onClick={()=>{
            changeMobMen("0");
        }}>
            <img src={Menu} alt="menu"/>
        </div>
       </nav>
    )


} ;

export default Nav;
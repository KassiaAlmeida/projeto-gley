import React from "react";
import logo from "../../assets/Scooby.jpg"
import "./style.css"

export default function Header (){

    return(
        <header className="header"> 

            <img src={logo} height={150} width ={150}/>

            <input placeholder="Buscar"/>
        </header>



    )
}
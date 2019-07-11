import React from 'react'
import '../index.css';
import image from './image.png'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm mb-4 navBoja">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img src={image} alt="logo" className="logoNav"/>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand text-light" href="/">
                            <b>HOME</b>
                        </a>
                    </li>
                    <li className="nav-item pad">
                        <a className="navbar-brand text-light" href="/about">
                            <b>ABOUT</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand text-light" href="/projectBoard">
                            <b>ORDERS</b>
                        </a>
                    </li>
                    <li className="nav-item pad">
                        <a className="navbar-brand text-light" href="/cakes">
                            <b>CAKES</b>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}




{/*<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">*/}
    {/*<div className="container">*/}
        {/*<a className="navbar-brand" href="/">*/}
            {/*Project Task Tool*/}
        {/*</a>*/}
        {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">*/}
            {/*<span className="navbar-toggler-icon"/>*/}
        {/*</button>*/}
    {/*</div>*/}
{/*</nav>*/}


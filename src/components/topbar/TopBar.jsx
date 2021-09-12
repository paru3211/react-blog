import { Link } from "react-router-dom"
import React from "react";
import "./topbar.css"

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className=" topIcon fab fa-facebook-square"></i>
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className=" topIcon fab fa-pinterest-square"></i>
                <i className=" topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link className="link" to="/">HOME</Link>
                    </li>

                    <li className='topListItem'><Link className="link" to="/">ABOUT</Link></li>
                    <li className='topListItem'><Link className="link" to="/">CONTACT</Link></li>
                    <li className='topListItem'><Link className="link" to="/ write">WRITE</Link></li>
                    <li className='topListItem'><Link className="link" to="/">LOGOUT</Link></li>
                    {user && "LOGOUT"}
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImg"
                            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2plY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className='link' to='/login'>
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className='link' to='/register'>
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    )
                }


                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

